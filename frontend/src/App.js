import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <ul class="nav justify-content-center">
      <li class="nav-item">
        <a class="nav-link-active" href="/">
          Home
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/eventi">
          Eventi
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/contatti">
          Contatti
        </a>
      </li>
    </ul>
  );
}

export default App;
