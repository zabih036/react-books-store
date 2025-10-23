import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CreditCard, User, MapPin, Mail, Phone, CheckCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Checkout = () => {
  const { items, getTotalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: ''
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsComplete(true);
      clearCart();
      
      // Redirect to home after 3 seconds
      setTimeout(() => {
        navigate('/');
      }, 3000);
    }, 2000);
  };

  if (items.length === 0 && !isComplete) {
    return (
      <div className="checkout-page">
        <div className="container">
          <div className="empty-cart">
            <h2>Your cart is empty</h2>
            <p>Add some books to your cart before checking out.</p>
            <Link to="/books" className="btn btn-primary">
              Start Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (isComplete) {
    return (
      <div className="checkout-page">
        <div className="container">
          <div className="checkout-success">
            <CheckCircle size={64} className="success-icon" />
            <h2>Order Placed Successfully!</h2>
            <p>Thank you for your purchase. You will receive a confirmation email shortly.</p>
            <div className="success-actions">
              <Link to="/" className="btn btn-primary">
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <div className="container">
        <div className="page-header">
          <h1>Checkout</h1>
          <p>Complete your purchase</p>
        </div>
        
        <div className="checkout-content">
          <form onSubmit={handleSubmit} className="checkout-form">
            <div className="form-section">
              <h3>
                <User size={20} style={{ marginRight: '8px' }} />
                Personal Information
              </h3>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="input"
                  />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="input"
                  />
                </div>
              </div>
            </div>
            
            <div className="form-section">
              <h3>
                <MapPin size={20} style={{ marginRight: '8px' }} />
                Shipping Address
              </h3>
              <div className="form-group">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  className="input"
                />
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="city">City</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    className="input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="state">State</label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    required
                    className="input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="zipCode">ZIP Code</label>
                  <input
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    required
                    className="input"
                  />
                </div>
              </div>
            </div>
            
            <div className="form-section">
              <h3>
                <CreditCard size={20} style={{ marginRight: '8px' }} />
                Payment Information
              </h3>
              <div className="form-group">
                <label htmlFor="cardNumber">Card Number</label>
                <input
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  placeholder="1234 5678 9012 3456"
                  required
                  className="input"
                />
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="expiryDate">Expiry Date</label>
                  <input
                    type="text"
                    id="expiryDate"
                    name="expiryDate"
                    value={formData.expiryDate}
                    onChange={handleInputChange}
                    placeholder="MM/YY"
                    required
                    className="input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="cvv">CVV</label>
                  <input
                    type="text"
                    id="cvv"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleInputChange}
                    placeholder="123"
                    required
                    className="input"
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="cardName">Name on Card</label>
                <input
                  type="text"
                  id="cardName"
                  name="cardName"
                  value={formData.cardName}
                  onChange={handleInputChange}
                  required
                  className="input"
                />
              </div>
            </div>
            
            <div className="checkout-actions">
              <Link to="/cart" className="btn btn-outline">
                Back to Cart
              </Link>
              <button 
                type="submit" 
                className="btn btn-primary"
                disabled={isProcessing}
              >
                {isProcessing ? 'Processing...' : `Pay $${(getTotalPrice() * 1.08).toFixed(2)}`}
              </button>
            </div>
          </form>
          
          <div className="order-summary">
            <h3>Order Summary</h3>
            <div className="summary-items">
              {items.map(item => (
                <div key={item.id} className="summary-item">
                  <div className="summary-item-info">
                    <h4>{item.title}</h4>
                    <p>Qty: {item.quantity}</p>
                  </div>
                  <div className="summary-item-price">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="summary-totals">
              <div className="summary-row">
                <span>Subtotal</span>
                <span>${getTotalPrice().toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Tax</span>
                <span>${(getTotalPrice() * 0.08).toFixed(2)}</span>
              </div>
              <div className="summary-row total">
                <span>Total</span>
                <span>${(getTotalPrice() * 1.08).toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
