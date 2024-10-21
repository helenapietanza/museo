function Slideshow() {
  return (
    <>
      <div className="slideshow-container">
        <div className="mySlides fade">
          <div className="numbertext">1 / 3</div>
          <img src={require("./museo.jpg")} />
          <div className="text">Caption Text</div>
        </div>

        <div className="mySlides fade">
          <div className="numbertext">2 / 3</div>
          <img src={require("./museo.jpg")} />
          <div className="text">Caption Two</div>
        </div>

        <div className="mySlides fade">
          <div className="numbertext">3 / 3</div>
          <img src={require("./museo.jpg")} />
          <div className="text">Caption Three</div>
        </div>
        <a className="prev" onclick="plusSlides(-1)">
          &#10094;
        </a>
        <a className="next" onclick="plusSlides(1)">
          &#10095;
        </a>
        <div>
          <span class="dot" onclick="currentSlide(1)"></span>
          <span class="dot" onclick="currentSlide(2)"></span>
          <span class="dot" onclick="currentSlide(3)"></span>
        </div>
      </div>
    </>
  );
}

export default Slideshow;
