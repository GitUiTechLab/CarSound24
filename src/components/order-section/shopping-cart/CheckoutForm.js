import React, { useState, useEffect } from 'react';
import './ShoppingCart.css';

const CheckoutForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        mobile: '',
        email: '',
        country: '',
        town: '',
        street: '',
        pincode: '',
        payment: '',
        cardNumber: '',
        cardName: '',
        expiry: '',
        cvv: '',
    });

    const [errors, setErrors] = useState({});
    const [countries, setCountries] = useState([]);
    const [towns, setTowns] = useState([]);

    useEffect(() => {
        // Fetch countries data
        fetch('https://restcountries.com/v3.1/all')
            .then(response => response.json())
            .then(data => {
                const countryList = data.map(country => ({
                    name: country.name.common,
                    code: country.cca2
                }));
                countryList.sort((a, b) => a.name.localeCompare(b.name)); // Sort countries alphabetically
                setCountries(countryList);
            });
    }, []);

    useEffect(() => {
        // Fetch towns data based on selected country
        if (formData.country) {
            // Fetch town data from countriesnow API
            fetch('https://countriesnow.space/api/v0.1/countries/cities', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ country: formData.country }),
            })
                .then(response => response.json())
                .then(data => {
                    if (data.error) {
                        setTowns([]);
                    } else {
                        setTowns(data.data);
                    }
                })
                .catch(error => console.error('Error fetching towns:', error));
        }
    }, [formData.country]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validate = () => {
        const newErrors = {};

        if (!formData.fullName) newErrors.fullName = 'Full Name is required';
        if (!formData.mobile) newErrors.mobile = 'Mobile is required';
        if (!/^\d{10}$/.test(formData.mobile)) newErrors.mobile = 'Invalid mobile number';
        if (!formData.email) newErrors.email = 'Email is required';
        if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email address';
        if (!formData.country) newErrors.country = 'Country is required';
        if (!formData.town) newErrors.town = 'Town is required';
        if (!formData.street) newErrors.street = 'Street is required';
        if (!formData.pincode) newErrors.pincode = 'Pincode is required';
        if (!/^\d{6}$/.test(formData.pincode)) newErrors.pincode = 'Invalid pincode';
        if (!formData.payment) newErrors.payment = 'Payment method is required';
        if (!formData.cardNumber) newErrors.cardNumber = 'Card Number is required';
        if (!/^\d{16}$/.test(formData.cardNumber)) newErrors.cardNumber = 'Invalid card number';
        if (!formData.cardName) newErrors.cardName = 'Name on Card is required';
        if (!formData.expiry) newErrors.expiry = 'Expiry is required';
        if (!/^\d{2}\/\d{2}$/.test(formData.expiry)) newErrors.expiry = 'Invalid expiry date';
        if (!formData.cvv) newErrors.cvv = 'CVV is required';
        if (!/^\d{3,4}$/.test(formData.cvv)) newErrors.cvv = 'Invalid CVV';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log('Form submitted:', formData);
            // Proceed with form submission (e.g., API call)
        }
    };

    return (
        <form className="checkout-form" onSubmit={handleSubmit}>
            <h2>Personal Information</h2>
            <div className="checkoutform-row">
                <div className="checkoutform-group">
                    <label>Full Name</label>
                    <input
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
                        value={formData.fullName}
                        onChange={handleChange}
                    />
                    {errors.fullName && <span className="error">{errors.fullName}</span>}
                </div>
                <div className="checkoutform-group">
                    <label>Mobile</label>
                    <input
                        type="text"
                        name="mobile"
                        placeholder="Mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                    />
                    {errors.mobile && <span className="error">{errors.mobile}</span>}
                </div>
            </div>
            <div className="checkoutform-group">
                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                />
                {errors.email && <span className="error">{errors.email}</span>}
            </div>

            <h2>Delivery Details</h2>
            <div className="checkoutform-row">
                <div className="checkoutform-group">
                    <label>Country</label>
                    <select
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                    >
                        <option value="">Select Country</option>
                        {countries.map((country) => (
                            <option key={country.name} value={country.name}>
                                {country.name}
                            </option>
                        ))}
                    </select>
                    {errors.country && <span className="error">{errors.country}</span>}
                </div>
                <div className="checkoutform-group">
                    <label>Town</label>
                    <select
                        name="town"
                        value={formData.town}
                        onChange={handleChange}
                    >
                        <option value="">Select Town</option>
                        {towns.map((town, index) => (
                            <option key={index} value={town}>
                                {town}
                            </option>
                        ))}
                    </select>
                    {errors.town && <span className="error">{errors.town}</span>}
                </div>
            </div>
            <div className="checkoutform-row">
                <div className="checkoutform-group">
                    <label>Street</label>
                    <input
                        type="text"
                        name="street"
                        placeholder="Street"
                        value={formData.street}
                        onChange={handleChange}
                    />
                    {errors.street && <span className="error">{errors.street}</span>}
                </div>
                <div className="checkoutform-group">
                    <label>Pincode</label>
                    <input
                        type="text"
                        name="pincode"
                        placeholder="Pincode"
                        value={formData.pincode}
                        onChange={handleChange}
                    />
                    {errors.pincode && <span className="error">{errors.pincode}</span>}
                </div>
            </div>

            <h2>Payment</h2>
            <div className="payment-options">
                <label>
                    <input
                        type="radio"
                        name="payment"
                        value="gpay"
                        checked={formData.payment === 'gpay'}
                        onChange={handleChange}
                    /> GPay
                </label>
                <label>
                    <input
                        type="radio"
                        name="payment"
                        value="paypal"
                        checked={formData.payment === 'paypal'}
                        onChange={handleChange}
                    /> PayPal
                </label>
            </div>
            {errors.payment && <span className="error">{errors.payment}</span>}

            <h2>Credit Card/Debit Card</h2>
            <div className="checkoutform-row">
                <div className="checkoutform-group">
                    <label>Card Number</label>
                    <input
                        type="text"
                        name="cardNumber"
                        placeholder="Card Number"
                        value={formData.cardNumber}
                        onChange={handleChange}
                    />
                    {errors.cardNumber && <span className="error">{errors.cardNumber}</span>}
                </div>
                <div className="checkoutform-group">
                    <label>Name</label>
                    <input
                        type="text"
                        name="cardName"
                        placeholder="Name"
                        value={formData.cardName}
                        onChange={handleChange}
                    />
                    {errors.cardName && <span className="error">{errors.cardName}</span>}
                </div>
            </div>
            <div className="checkoutform-row">
                <div className="checkoutform-group">
                    <label>Expiry</label>
                    <input
                        type="text"
                        name="expiry"
                        placeholder="Expiry"
                        value={formData.expiry}
                        onChange={handleChange}
                    />
                    {errors.expiry && <span className="error">{errors.expiry}</span>}
                </div>
                <div className="checkoutform-group">
                    <label>CVV</label>
                    <input
                        type="text"
                        name="cvv"
                        placeholder="CVV"
                        value={formData.cvv}
                        onChange={handleChange}
                    />
                    {errors.cvv && <span className="error">{errors.cvv}</span>}
                </div>
            </div>

            <button className="checkout-button" type="submit">Proceed to Checkout</button>
        </form>
    );
};

export default CheckoutForm;
