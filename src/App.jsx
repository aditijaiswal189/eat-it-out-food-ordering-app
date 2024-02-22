import { createBrowserRouter } from "react-router-dom";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}
export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

export default App;
