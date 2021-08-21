import "./App.css";
import Main from "./components/Main";
import Particle from "./components/Particle";
import { Container } from "react-bootstrap";
import "./style.css";
function App() {
  return (
    <section>
      <Container fluid className="main-section">
        <Particle />
        <Container className="content">
          <Main />
        </Container>
      </Container>
    </section>
  );
}
export default App;
