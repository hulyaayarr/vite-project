import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Container from "react-bootstrap/Container";

export default function Root() {
  return (
    <>
      <Navbar />
      <Container>
        <Outlet />
      </Container>
    </>
  );
}
