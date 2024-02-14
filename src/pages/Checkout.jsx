import React, {useState} from "react";
import { Footer, Navbar } from "../components";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

  const Checkout = () => {
  const state = useSelector((state) => state.handleCart);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectState, setSelectedState] = useState("");


  let  totalItems = 0;
    let subtotal = 0;
    const shipping = 0;

  state.forEach((item) => {
    totalItems += item.qty;
    subtotal += item.qty * item.price;
  });

  const EmptyCart = () => {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 py-5 bg-light text-center">
            <h4 className="p-3 display-5">No item in Cart</h4>
            <Link to="/" className="btn btn-outline-dark mx-4">
              <i className="fa fa-arrow-left"></i> Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  };

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value); // Update selected country on change
    setSelectedState("");
  };

  const handleStateChange =(e) =>{
    setSelectedState(e.target.value)
  }

  const ShowCheckout = () => {
    
    let states = [];
    // Define the list of states/cities for each country
    const countryStates = {
      Ghana: ["Accra", "Kumasi", "Tamale", "Cape Coast", "Takoradi", "Tema"],
      Nigeria: ["Lagos", "Abuja", "Kano", "Ibadan"],
      Togo: ["Lome", "Kara", "Sokode", "Atakpame"],
      
    };
    
    if (selectedCountry && countryStates[selectedCountry]) {
      states = countryStates[selectedCountry];
    }


    return (
      <>
        <div className="container py-5">
          <div className="row my-4">
            <div className="col-md-5 col-lg-4 order-md-last">
              <div className="card mb-4">
                <div className="card-header py-3 bg-light">
                  <h5 className="mb-0">Order Summary</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      Products ({totalItems})<span> GHS {Math.round(subtotal)}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                      Shipping
                      <span>GHS {shipping}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>Total amount</strong>
                      </div>
                      <span>
                        <strong>GHS {Math.round(subtotal + shipping)}</strong>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-7 col-lg-8">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h4 className="mb-0">Payment and Delivery</h4>
                </div>
                <div className="card-body">
                  <form className="needs-validation" novalidate>
                    <div className="row g-3">
                      <div className="col-sm-6 my-1">
                        <label for="firstName" className="form-label">
                          First name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="firstName"
                          placeholder=""
                          required
                        />
                        <div className="invalid-feedback">
                          Valid first name is required.
                        </div>
                      </div>

                      <div className="col-sm-6 my-1">
                        <label for="lastName" className="form-label">
                          Last name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="lastName"
                          placeholder=""
                          required
                        />
                        <div className="invalid-feedback">
                          Valid last name is required.
                        </div>
                      </div>

                      <div className="col-12 my-1">
                        <label for="email" className="form-label">
                          Email
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="you@example.com"
                          not required
                        />
                        <div className="invalid-feedback">
                          Please enter a valid email address for shipping
                          updates.
                        </div>
                      </div>

                      <div className="col-12 my-1">
                        <label for="address" className="form-label">
                          Address
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="address"
                          placeholder="1234 Main St"
                          required
                        />
                        <div className="invalid-feedback">
                          Please enter your delivery address.
                        </div>
                      </div>

                      <div className="col-12">
                        <label for="address2" className="form-label">
                          Address 2{" "}
                          <span className="text-muted">(Optional)</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="address2"
                          placeholder="Apartment or suite"
                        />
                      </div>

                      <div className="col-md-5 my-1">
                        <label for="country" className="form-label">
                          Country
                        </label>
                        <br />
                        <select className="form-select" 
                        id="country"
                        value={selectedCountry} 
                          onChange={handleCountryChange} 
                          required 
                          >
                          <option value="">Choose</option>
                          <option value="Ghana">Ghana</option>
                          <option value="Nigeria">Nigeria</option>
                          <option value="Togo">Togo</option>
                       
                        </select>
                        <div className="invalid-feedback">
                          Please select a valid country.
                        </div>
                      </div>

                      <div className="col-md-4 my-1">
                        <label for="state" className="form-label">
                          City
                        </label>
                        <br />
                        <select className="form-select" 
                        id="City" 
                        value={selectState}
                        onChange={handleStateChange}
                        required
                        >
                          <option value="">Choose</option>
                          {states.map((state, index) =>(
                            <option key={index} value={state}>
                              {state}
                            </option>
                          ))}
                        </select>
                        <div className="invalid-feedback">
                          Please provide a valid city.
                        </div>
                      </div>

                      <div className="col-md-3 my-1">
                        <label for="zip" className="form-label">
                          Street Address
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="zip"
                          placeholder=""
                          required
                        />
                        <div className="invalid-feedback">
                          Street Address is Required.
                        </div>
                      </div>
                    </div>

                    <div className="col-12 my-1">
                    <label for="Telephone" className="form-label">
                      Mobile Number
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      id="user_number"
                      placeholder="place enter a valid number"
                      required
                      
                    />
                     </div>

                    <hr className="my-4" />
                    
                    <h4 className="mb-3">Payment and Delivery Instructions</h4>
                    <h5>Pay on Delivery</h5>
                    Please kindly note that, upon confirmation of items ordered, you will be called to confirm the order you have placed. 
                    Upon confirmation they will be delivered within the next 1-2 business days depending the time of placing the order. Payment is made upon delivery. 
                    <b>
                    <p>or</p>
                    </b>
                    <h5>Pick Up Delivery</h5>
                    <h6> Kindly use the address below for Pickup Location</h6>
                    Vision IT Centre, Isaac Tetteh Avenue-Darkuman Official Town , Accra, Greater Accra, GA467, Ghana
                    <p></p>
                    <b>Business hours</b>
                    <br></br>
                    9AM – 6PM Mon-Sun <br></br>
                    <b>Tel: 0556780200</b>

                    {/*
                    <div className="row gy-3">
                      <div className="col-md-6">
                        <label for="cc-name" className="form-label">
                          Name on card
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="cc-name"
                          placeholder=""
                          required
                        />
                        <small className="text-muted">
                          Full name as displayed on card
                        </small>
                        <div className="invalid-feedback">
                          Name on card is required
                        </div>
                      </div>

                      <div className="col-md-6">
                        <label for="cc-number" className="form-label">
                          Credit card number
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="cc-number"
                          placeholder=""
                          required
                        />
                        <div className="invalid-feedback">
                          Credit card number is required
                        </div>
                      </div>

                      <div className="col-md-3">
                        <label for="cc-expiration" className="form-label">
                          Expiration
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="cc-expiration"
                          placeholder=""
                          required
                        />
                        <div className="invalid-feedback">
                          Expiration date required
                        </div>
                      </div>

                      <div className="col-md-3">
                        <label for="cc-cvv" className="form-label">
                          CVV
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="cc-cvv"
                          placeholder=""
                          required
                        />
                        <div className="invalid-feedback">
                          Security code required
                        </div>
                      </div>
                    </div>
                          */}
                    <hr className="my-4" />

                    <button
                      className="w-100 btn btn-primary "
                      type="submit" enabled
                    >
                      Continue to checkout
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Checkout</h1>
        <hr />
        {state.length ? <ShowCheckout /> : <EmptyCart />}
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
