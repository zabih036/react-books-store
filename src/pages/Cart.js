import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { items, updateQuantity, removeFromCart, getTotalPrice, getTotalItems, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="cart-page">
        <div className="container">
          <div className="empty-cart">
            <ShoppingBag size={64} className="empty-cart-icon" />
            <h2>Your cart is empty</h2>
            <p>Looks like you haven't added any books to your cart yet.</p>
            <Link to="/books" className="btn btn-primary">
              Start Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="container">
        <div className="page-header">
          <h1>Shopping Cart</h1>
          <p>{getTotalItems()} item(s) in your cart</p>
        </div>
        
        <div className="cart-content">
          <div className="cart-items">
            {items.map(item => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-image">
                  <img src={item.image} alt={item.title} />
                </div>
                
                <div className="cart-item-info">
                  <h3 className="cart-item-title">{item.title}</h3>
                  <p className="cart-item-author">by {item.author}</p>
                  <p className="cart-item-price">${item.price}</p>
                </div>
                
                <div className="cart-item-controls">
                  <div className="quantity-controls">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="quantity-btn"
                      disabled={item.quantity <= 1}
                    >
                      <Minus size={16} />
                    </button>
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                      className="quantity-input"
                      min="1"
                    />
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="quantity-btn"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                  
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="btn btn-danger"
                  >
                    <Trash2 size={16} />
                    Remove
                  </button>
                </div>
                
                <div className="cart-item-total">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}
          </div>
          
          <div className="cart-summary">
            <div className="summary-card">
              <h3>Order Summary</h3>
              
              <div className="summary-row">
                <span>Subtotal ({getTotalItems()} items)</span>
                <span>${getTotalPrice().toFixed(2)}</span>
              </div>
              
              <div className="summary-row">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              
              <div className="summary-row">
                <span>Tax</span>
                <span>${(getTotalPrice() * 0.08).toFixed(2)}</span>
              </div>
              
              <div className="summary-row total">
                <span>Total</span>
                <span>${(getTotalPrice() * 1.08).toFixed(2)}</span>
              </div>
              
              <div className="summary-actions">
                <Link to="/checkout" className="btn btn-primary w-full">
                  Proceed to Checkout
                </Link>
                <button 
                  onClick={clearCart}
                  className="btn btn-outline w-full"
                >
                  Clear Cart
                </button>
                <Link to="/books" className="btn btn-secondary w-full">
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
