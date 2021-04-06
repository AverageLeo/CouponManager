import React, { useState } from "react";
import "./TableContainer.css";
import couponIcon from "../../assets/coupon-icon.png";

import NewCouponButton from "./NewCouponButton/NewCouponButton";
import CouponsTable from "../CouponsTable/CouponsTable";

const TableContainer = () => {
  // initial state containing an array with 5 objects (coupons)
  const [couponsArray, setCouponsArray] = useState([
    {
      name: "Starbucks",
      title: "Free cupcake",
      couponsTotal: 278,
      couponsCount: 123,
      couponsIssued: 98,
      couponsUsed: 57,
      status: "Active",
    },
    {
      name: "McDonald’s",
      title: "30% meal discount",
      couponsCount: 123,
      couponsTotal: 278,
      couponsIssued: 274,
      couponsUsed: 57,
      status: "Active",
    },
    {
      name: "Children land",
      title: "1+1 Tickets",
      couponsTotal: 278,
      couponsCount: 123,
      couponsIssued: 0,
      couponsUsed: 57,
      status: "Inactive",
    },
    {
      name: "McDonald’s",
      title: "Free ice-cream",
      couponsTotal: 278,
      couponsCount: 123,
      couponsIssued: 98,
      couponsUsed: 57,
      status: "Inactive",
    },
    {
      name: "Starbucks",
      title: "Free cupcake",
      couponsTotal: 278,
      couponsCount: 123,
      couponsIssued: 98,
      couponsUsed: 57,
      status: "Active",
    },
  ]);

  // get random from an api data to insert into the new objects 
  async function getRandomCouponsFromAPI() {
    const randomData = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    ).then((response) => response.json());
    return randomData;
  }

  // update state with new object (coupon) containing random data
  const pushRandomCoupon = (randomAPIData) => {
    let name =
      randomAPIData[Math.floor(Math.random() * randomAPIData.length)].name;
    let title =
      randomAPIData[Math.floor(Math.random() * randomAPIData.length)].username;
    let couponsTotal = Math.floor(Math.random() * 300);
    let couponsCount = Math.floor(Math.random() * couponsTotal);

    let couponsIssued = Math.floor(Math.random() * 300);
    let couponsUsed = Math.floor(Math.random() * 300);
    const statusCalc = function () {
      return Math.random() < 0.7 ? "Active" : "Inactive";
    };
    let status = statusCalc();

    const updatedCouponsArray = [...couponsArray];
    updatedCouponsArray.unshift({
      name,
      title,
      couponsTotal,
      couponsCount,
      couponsIssued,
      couponsUsed,
      status,
    });
    setCouponsArray(updatedCouponsArray);
  };

  //on click event to return data from api and push new object to state
  const onClickHandler = () => {
    getRandomCouponsFromAPI().then(pushRandomCoupon);
  };

  return (
    <div className="main-content">
      <div className="title-area">
        <div className="table-title">
          <div className="table-title-text">
            <img className="coupon-icon" src={couponIcon} alt="coupon-icon" />
            <h1 className="coupon-management">Coupon management</h1>
          </div>
          <div>
            <NewCouponButton onClickHandler={onClickHandler} />
          </div>
        </div>
      </div>
      <CouponsTable couponsArray={couponsArray} />
    </div>
  );
};

export default TableContainer;
