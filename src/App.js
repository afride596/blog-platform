import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import AppLayout from "./AppLayout";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";

const AppRouting = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <AppLayout />,
    children: [
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);
function App() {
  return (
    <RouterProvider router={AppRouting}>
      <div className="App">
        <AppLayout />
      </div>
    </RouterProvider>
  );
}

export default App;
