import { FC } from "react";
import "../Home/home.css";

const Carousel: FC = () => {
  return (
    <>
      <div className="banner_carousel">
        <div
          id="carouselExampleDark"
          className="carousel carousel-dark slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            {/* <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button> */}
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <img
                src={require("../../assets/images/watch.jpg")}
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption image_one image_two d-none d-md-block">
                <h5>Amazing Value</h5>
                <h3>Upgrade and Save</h3>
                <h4>On The Latest Apple Devices</h4>
                <button type="button" className="button">
                  SHOP NOW
                </button>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img
                src={require("../../assets/images/camera.jpg")}
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption image_two d-none d-md-block">
                <h5>Amazing Value</h5>
                <h3>Upgrade and Save</h3>
                <h4>On The Latest Apple Devices</h4>
                <button type="button" className="button">
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
};
export default Carousel;
