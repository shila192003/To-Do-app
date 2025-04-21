import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been sent.`);
  };

  
  return (
    <div className="container mt-5  " >
      <h2 className="text-center mb-4 ">Contact form</h2>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card p-4 shadow-sm border-0 ">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label float-left">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required    placeholder="enter name"
                />
              </div>
              <div className="mb-3">
                <label className="form-label float-left">Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required  placeholder="enter e-mail"
                />
              </div>
              <div className="mb-3">
                <label className="form-label float-left" placeholder="enter comment or message">Message</label>
                <textarea
                  className="form-control"
                  rows="4"
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  required   placeholder="enter comment or message here..."
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
