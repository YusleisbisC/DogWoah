import { RouterProvider } from "react-router-dom";
import { router } from "./AppRouter";
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';


export function App() {
  
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}


export default App;
