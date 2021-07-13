import DashBoard from "./components/DashBoard";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Container>
        <Navbar className="mb-5" expand="lg" variant="light" bg="light">
          <Container>
            <Navbar.Brand className="mx-auto" href="#">
              Rodo
            </Navbar.Brand>
          </Container>
        </Navbar>
      </Container>
      <DashBoard />
    </div>
  );
}

export default App;
