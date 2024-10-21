function FrontImage() {
  return (
    <div>
      <img
        src={require("./museo.jpg")}
        alt="Foto del museo"
        id="immagine"
        className="container"
      />
      <h2 id="TestoImmagine">Museo lorem</h2>
    </div>
  );
}

export default FrontImage;
