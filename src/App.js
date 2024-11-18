import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import AppLayout from "./AppLayout";
import About from "./components/About";

const AppRouting = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);
function App() {
  return (
    <RouterProvider router={AppRouting}>
      <div className="App">
        <Header />
      </div>
    </RouterProvider>
  );
}

export default App;
