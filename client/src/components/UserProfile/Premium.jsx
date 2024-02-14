import React from 'react';
import './Premium.css';
import { FaBookOpen } from 'react-icons/fa'; // Import book icon

const SubscriptionCard = ({ title, price, benefits, buttonText, onSubscribe }) => {
  return (
    <div className="subscription-card">
      <FaBookOpen size={50} style={{ margin: '0 auto' }} /> {/* Book icon */}
      <h3 className="card-title">{title}</h3>
      <p className="card-price">{price}</p>
      <ul className="card-benefits">
        {benefits.map((benefit, index) => (
          <li key={index}>{benefit}</li>
        ))}
      </ul>
      <button onClick={onSubscribe} className="card-button">{buttonText}</button>
    </div>
  );
};


const Premium = () => {
  const monthlyBenefits = [
    "Font customization",
    "Comment to a book",
    "Unlock AudioBooks",
    "Priority customer support",
  ];

  const annualBenefits = [
    ...monthlyBenefits,
    "2 months free",
    "Unloack all features ",
    "Pay once in a while and judt Read",
  ];

  const handleSubscribe = (plan) => {
    // Subscription logic here
    alert(`Subscribed to ${plan} plan!`);
  };

  return (
    <div className="premium-container">
      <h2>Premium Subscriptions</h2>
      <div className="subscriptions">
        <SubscriptionCard
          title="Monthly Subscription"
          price="₹49/ month"
          benefits={monthlyBenefits}
          buttonText="Subscribe Now"
          onSubscribe={() => handleSubscribe("Monthly")}
        />
        <SubscriptionCard
          title="Annual Subscription"
          price=" ₹500/ year"
          benefits={annualBenefits}
          buttonText="Subscribe Now"
          onSubscribe={() => handleSubscribe("Annual")}
        />
      </div>
    </div>
  );
};

export default Premium;
