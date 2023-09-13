import React, { useState, useEffect } from "react";
import { Footer } from "../../Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import "./AdminProducts.css";
import Modal from "react-bootstrap/Modal";
import { Navbar } from "../../Navbar";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

export const AdminProducts = () => {
  const [showPreviewModal, setShowPreviewModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [productos, setProductos] = useState([]);

  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  // Create
  const [nome, setNome] = useState("");
  const [description, setdescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Alimento");
  const [image, setImage] = useState(null);

  // Edit
  const [editName, setEditName] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editPrice, setEditPrice] = useState("");
  const [editCategory, setEditCategory] = useState("Alimento");
  const [editImage, setEditImage] = useState(null);

  // Edit
  const editProduct = async (id) => {
    const storage = getStorage();
    const storageRef = ref(storage, `images/${editImage.name}`);
    await uploadBytes(storageRef, editImage);
    const downloadURL = await getDownloadURL(storageRef);
    setEditImage(downloadURL);

    const updatedProductData = {
      nome: editName,
      description: editDescription,
      price: editPrice,
      category: editCategory,
      image: downloadURL,
    };

    try {
      const response = await fetch(
        `https://dogwoah-servidor-production.up.railway.app/api/products/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedProductData),
        }
      );

      if (response.status === 200) {
        const updatedProduct = await response.json();
        console.log("Producto actualizado:", updatedProduct);
        setProductos((prevProductos) => {
          const updatedProductos = prevProductos.map((producto) => {
            if (producto.id === id) {
              return updatedProduct;
            } else {
              return producto;
            }
          });

          return updatedProductos;
        });
        setShowPreviewModal(false);
      } else {
        throw new Error("Producto no encontrado");
      }
    } catch (error) {
      console.error("Error al editar el producto:", error.message);
    }
  };

  //---------------------------------------
  //Create
  const createProduct = async () => {
    const storage = getStorage();
    const storageRef = ref(storage, `images/${image.name}`);
    await uploadBytes(storageRef, image);
    const downloadURL = await getDownloadURL(storageRef);
    setImage(downloadURL);

    const product = {
      nome,
      description,
      price,
      category,
      image: downloadURL,
    };

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    };

    fetch(
      "https://dogwoah-servidor-production.up.railway.app/api/products",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        setProductos([data, ...productos]);
        console.log(product);
        setShowCreateModal(false);
      })
      .catch((error) => {
        console.error("Error al crear producto:", error);
      });
  };

  const createSubmit = async (e) => {
    e.preventDefault();
    await createProduct();
  };

  //------------------------------------

  const togglePreviewModal = (product) => {
    setSelectedProduct(product);
    setShowPreviewModal(!showPreviewModal);
  };

  const toggleCreateModal = () => {
    setShowCreateModal(!showCreateModal);
  };

  const toggleDeleteModal = (product) => {
    setSelectedProduct(product);
    setShowDeleteModal(!showDeleteModal);
  };

  useEffect(() => {
    fetch("https://dogwoah-servidor-production.up.railway.app/api/products")
      .then((response) => response.json())
      .then((data) => {
        setProductos(data);
      })
      .catch((error) => {
        console.error("Error al obtener productos destacados", error);
      });
  }, []);

  const deleteProduct = (id) => {
    fetch(
      `https://dogwoah-servidor-production.up.railway.app/api/products/${id}`,
      {
        method: "DELETE",
      }
    )
      .then(function (response) {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error("Producto no encontrado");
        }
      })
      .then(function (data) {
        setProductos(productos.filter((p) => p.id !== id));
        setShowDeleteModal(false);
      })
      .catch(function (error) {
        console.error(error.message);
      });
  };

  //-----------------------------------

  let counter = 1;
  return (
    <div>
      <Navbar />
      <div className="btn-c">
        <h2 className="fw-bold">Admin Product List</h2>
        <button onClick={() => toggleCreateModal()}>Criar Novo Produto</button>
      </div>
      <div style={{ maxHeight: "500px", overflowY: "auto" }}>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>Nome</th>
              <th>Descrição</th>
              <th>Preço</th>
              <th>Categoria</th>
              <th>Imagem</th>
              <th>Ação</th>
            </tr>
          </thead>
          <tbody>
            {productos.reverse().map((e) => (
              <tr key={e.id}>
                <td>{counter++}</td>
                <td>{e.nome}</td>
                <td>{e.description}</td>
                <td>{e.price}</td>
                <td>{e.category}</td>
                <td>
                  <img
                    style={{ height: "30px", width: "40px" }}
                    src={e.image}
                    alt=""
                  />
                </td>
                <td className="td-icon">
                  <FontAwesomeIcon
                    cursor={"pointer"}
                    color="#2077d8"
                    icon={faPenToSquare}
                    onClick={() => togglePreviewModal(e)}
                  />
                  <FontAwesomeIcon
                    cursor={"pointer"}
                    color="#ff0f47"
                    icon={faTrashCan}
                    onClick={() => toggleDeleteModal(e)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <Modal show={showPreviewModal} onHide={togglePreviewModal}>
          {selectedProduct && (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                editProduct(selectedProduct.id);
              }}
              className="preview-modal"
            >
              <h3>Editar Produto</h3>
              <img src={selectedProduct.image} alt={selectedProduct.name} />

              <div className="input-container">
                <div className="input-div">
                  <span className="input-span">Nome</span>
                  <input
                    className="form-control"
                    type="text"
                    name="name"
                    onChange={(e) => setEditName(e.target.value)}
                  />
                </div>
                <div className="input-div">
                  <span className="input-span">Descrição</span>
                  <input
                    className="form-control"
                    type="text"
                    name="description"
                    onChange={(e) => setEditDescription(e.target.value)}
                  />
                </div>
                <div className="input-div">
                  <span className="input-span">Preço</span>
                  <input
                    style={{ width: "100%" }}
                    className="form-control"
                    type="number"
                    name="price"
                    onChange={(e) => setEditPrice(e.target.value)}
                  />
                </div>
                <div className="input-div">
                  <span className="input-span">Categoria</span>
                  <select
                    className="form-control"
                    onChange={(e) => setEditCategory(e.target.value)}
                    name="category"
                  >
                    <option value={"alimento"}>Alimento</option>
                    <option value={"brinquedo"}>Brinquedo</option>
                    <option value={"banho"}>Banho</option>
                  </select>
                </div>
                <div className="input-div">
                  <span className="input-span">Nova Imagem</span>
                  <input
                    className="form-control"
                    type="file"
                    id="formFile"
                    onChange={(e) => setEditImage(e.target.files[0])}
                  />
                </div>
              </div>

              <div className="save-btn">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value={"Salvar"}
                />
              </div>
            </form>
          )}
        </Modal>

        <Modal show={showCreateModal} onHide={toggleCreateModal}>
          <form onSubmit={createSubmit} className="preview-modal">
            <h3>Criar Produto</h3>

            <div className="input-container">
              <div className="input-div">
                <span className="input-span">Nome</span>
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  onChange={(e) => setNome(e.target.value)}
                  required
                />
              </div>
              <div className="input-div">
                <span className="input-span">Descrição</span>
                <input
                  className="form-control"
                  type="text"
                  name="description"
                  onChange={(e) => setdescription(e.target.value)}
                  required
                />
              </div>
              <div className="input-div">
                <span className="input-span">Preço</span>
                <input
                  style={{ width: "100%" }}
                  className="form-control"
                  type="number"
                  name="price"
                  onChange={(e) => setPrice(e.target.value)}
                  required
                />
              </div>
              <div className="input-div">
                <span className="input-span">Categoria</span>
                <select
                  className="form-control"
                  onChange={(e) => setCategory(e.target.value)}
                  name="category"
                  required
                >
                  <option value={"alimento"}>Alimento</option>
                  <option value={"brinquedo"}>Brinquedo</option>
                  <option value={"banho"}>Banho</option>
                </select>
              </div>
              <div className="input-div">
                <span className="input-span">Nova Imagem</span>
                <input
                  className="form-control"
                  type="file"
                  id="formFile"
                  onChange={(e) => setImage(e.target.files[0])}
                  required
                />
              </div>
            </div>

            <div className="save-btn">
              <input
                className="btn btn-primary"
                type="submit"
                value={"Criar"}
                required
              />
            </div>
          </form>
        </Modal>

        <Modal show={showDeleteModal} onHide={toggleDeleteModal}>
          {selectedProduct && (
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "10px",
              }}
            >
              <h3>Excluir</h3>
              <div
                style={{
                  width: "90%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: "15px",
                }}
              >
                <span>Certeza que quer excluir este produto?</span>

                <h3>{selectedProduct.name}</h3>

                <img
                  src={`http://127.0.0.1:8000/storage/${selectedProduct.image}`}
                  alt="img"
                  width={300}
                  height={300}
                />
              </div>

              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "20px",
                }}
              >
                <button
                  style={{ width: "150px", backgroundColor: "red" }}
                  onClick={() => deleteProduct(selectedProduct.id)}
                >
                  Sim
                </button>
                <button
                  style={{ width: "150px" }}
                  onClick={toggleDeleteModal}
                  i
                >
                  Não
                </button>
              </div>
            </div>
          )}
        </Modal>
      </div>

      <Footer />
    </div>
  );
};
