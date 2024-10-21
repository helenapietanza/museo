function FrontImage() {
  return (
    <div className="container">
      <img src={require("./museo.jpg")} alt="Foto del museo" id="immagine" />
      <h2 id="TestoImmagine">Museo lorem</h2>
    </div>
  );
}

export default FrontImage;
