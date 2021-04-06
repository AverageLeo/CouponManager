import React from "react";
import "./NewCouponButton.css";

const NewCouponButton = ({ onClickHandler }) => {
  return (
    <div className="new-coupon" onClick={onClickHandler}>
      + Add new coupon
    </div>
  );
};

export default NewCouponButton;
