import "./App.css";
import { Background } from "./ui/Fondo";
import { Card } from "./ui/Card";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Calendario from "./components/Calendario";
import Conociendo from "./components/Conociendo";
import Noticias from "./components/Noticias";

function App() {
  return (
    <Background>
      <Card>
        <Header />
        <Intro />
        <Noticias />
        <Conociendo />
        <Calendario />
        <Footer />
      </Card>
    </Background>
  );
}

export default App;
