import React from "react";
import "../User-dashboard";
import MasterCard from "../../../../src/assets/images/MasterCard.png"

export default function Card({ balance, lastDigits, expiry, color }) {
  return (
    <div className={`card ${color}`}>
      <img src={MasterCard} alt="MasterCard" className="card-image"/>
      <p className="total">Total Balance</p>
      <p className="amount">${balance}</p>
      <p className="card-number">**** **** **** {lastDigits}</p>
      <p className="expiry">{expiry}</p>
    </div>
  );
};


