import React from "react";
import "./CouponsTable.css";
import CouponRow from "../CouponRow/CouponRow";

const CouponsTable = ({ couponsArray }) => {
  return (
    <div>
      <table className="wholeTable" cellSpacing="0">
        <thead>
          <tr className="infoRow">
          <th className="first"></th>
            <th className="leftColumn">Brand name</th>
            <th>Coupon title</th>
            <th>Coupons</th>
            <th>Issued</th>
            <th>Used</th>
            <th>Status</th>
            <th className="rightColumn"></th>
            <th className="last"></th>
          </tr>
        </thead>
        <tbody>
          {couponsArray.map((coupon) => {
            return (
              <CouponRow
                key={Math.random() * 247924223}
                name={coupon.name}
                title={coupon.title}
                couponsCount={coupon.couponsCount}
                couponsTotal={coupon.couponsTotal}
                couponsIssued={coupon.couponsIssued}
                couponsUsed={coupon.couponsUsed}
                status={coupon.status}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CouponsTable;
