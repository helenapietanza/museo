import "./App.css";
import "./components/css/nav.css";
import "./components/css/slideshow.css";
import "./components/css/immaginefrontale.css";
import Navtop from "./components/nav.jsx";
import FrontImage from "./components/frontimage.jsx";
import Slideshow from "./components/slideshow.jsx";
import MostraEventi from "./components/eventi.jsx";

function App() {
  return (
    <>
      <Navtop /> <FrontImage /> <Slideshow /> <MostraEventi />
    </>
  );
}

export default App;
