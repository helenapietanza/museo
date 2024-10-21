function Navtop() {
  return (
    <ul className="nav justify-content-center">
      <li className="nav-item">
        <a className="nav-link-active" href="/home">
          Home
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/eventi">
          Eventi
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/contatti">
          Contatti
        </a>
      </li>
    </ul>
  );
}

export default Navtop;
