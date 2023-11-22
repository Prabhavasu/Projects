import React, { useState } from 'react';

const Checkout = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zip: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform your checkout logic here, such as sending the formData to a server
    console.log('Form Data:', formData);
    // Reset the form after submission
    setFormData({
      firstName: '',
      lastName: '',
      address: '',
      city: '',
      state: '',
      zip: '',
    });
  };

  return (
    <div>
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
        />
        <br />
        <input
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
        />
        <br />
        <input
          type="text"
          placeholder="Address"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
        />
        <br />
        <input
          type="text"
          placeholder="City"
          name="city"
          value={formData.city}
          onChange={handleInputChange}
        />
        <br />
        <input
          type="text"
          placeholder="State"
          name="state"
          value={formData.state}
          onChange={handleInputChange}
        />
        <br />
        <input
          type="text"
          placeholder="Zip"
          name="zip"
          value={formData.zip}
          onChange={handleInputChange}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Checkout;
