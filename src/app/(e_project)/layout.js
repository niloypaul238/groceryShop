import Footer from "../Footer";
import Nav from "../Nav";

export default function Elayout({ children }) {
  return (
    <>
      <Nav></Nav>
      {children}
      <Footer></Footer>
    </>


  );
}
