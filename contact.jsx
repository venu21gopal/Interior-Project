import React, { useState } from 'react';
import Select from "react-dropdown-select";
import './contact.css';

export const Contact = () => {
  const options = [
    { id: "Dining Room", name: 1 },
    { id: "Living Room", name: 2 },
    { id: "Bed Room", name: 3 },
    { id: "Rest Room", name: 4 },
    { id: "others", name: 5 },
  ];

  const [selectedOption, setSelectedOption] = useState([]);
  const [showOtherInput, setShowOtherInput] = useState(false);
  const [otherInputValue, setOtherInputValue] = useState('');

  const handleSelectChange = (values) => {
    setSelectedOption(values);

    // Check if the selected option is "others"
    setShowOtherInput(values.some((option) => option.name === 5));
  };

  const handleOtherInputChange = (event) => {
    setOtherInputValue(event.target.value);
  };

  return (
    <div>
      <div className='form-padding'>
        <form className="form">
          <p className="title">Contact Us</p>
          <p className="message">Contact us for any information. </p>
          <div className="flex">
            <label>
              <input
                required=""
                placeholder="Firstname"
                type="text"
                className="input"
              />
            </label>

            <label>
              <input
                required=""
                placeholder="Lastname"
                type="text"
                className="input"
              />
            </label>
          </div>

          <label>
           
            <div className='d-flex justify-content-center mt-6'>
              <div className='w-100 '>

                <Select
                className="input"
                  
                  options={options}
                  labelField="id"
                  valueField="name"
                  multi
                  onChange={handleSelectChange}
                />
              </div>
              
            </div>
             
            
            </label>
      
          {showOtherInput && (
            
              <label htmlFor="otherSpecify">            
              <input
                type="text"
                id="otherSpecify"
                name="otherSpecify"
                value={otherInputValue}
                onChange={handleOtherInputChange}
                className="input"
                placeholder='Please Specify'
                required=""
            
           /></label>
            
            
          )}
          
          

          <label>
            <input
              required=""
              placeholder="Subject"
              type="password"
              className="input"
            />
          </label>

          <button className="submit">Submit</button>
        </form>
      </div>

      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col">
              <h4>company</h4>
              <ul>
                <li><a href="#">about us</a></li>
                <li><a href="#">our services</a></li>
                <li><a href="#">privacy policy</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>follow us</h4>
              <div className="social-links">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
