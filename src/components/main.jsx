import React from "react";

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src="./assets/main.png.jpg"
            alt="Card"
            height={500}
          />
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container">
              <h5 className="card-title fs-1 text fw-lighter">New Season Arrivals</h5>
              <p className="card-text fs-5 d-none d-sm-block ">
              Introducing POKBON Marketplace, your go-to e-commerce website in Ghana. 
              With our innovative pre-order options and seamless tracking order page, 
              we revolutionize the way you shop online. Discover a wide range of products from trusted sellers,
               place your orders in advance, and stay updated on every step of the delivery process. Experience
               convenience like never before with POKBON Marketplace, where shopping meets efficiency..
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
