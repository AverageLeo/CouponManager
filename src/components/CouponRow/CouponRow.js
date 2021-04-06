import React from "react";
import "./CouponRow.css";

const CouponRow = ({
  name,
  title,
  couponsCount,
  couponsTotal,
  couponsIssued,
  couponsUsed,
  status,
}) => {
  return (
    <tr>
      <th className="first"></th>
      <th>{name}</th>
      <th>{title}</th>
      <th>
        {couponsCount}/<div className="actuallyThinner">{couponsTotal}</div>
      </th>
      <th>
      {/* conditional classname to render different colors for values*/}
        <div className={couponsIssued === 0 ? "redFont" : "purpleFont"}>
          {couponsIssued}
        </div>
      </th>
      <th>
        <div className="redFont">{couponsUsed}</div>
      </th>
      <th>
        <div className={status === "Active" ? "greenFont" : "redFont"}>
          {status}
        </div>
      </th>
      <th className="couponArrow">
      <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
        <svg
          cursor="pointer"
          width="3vw"
          height="1.5vw"
          viewBox="0 0 15 24"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <desc>Created with sketchtool.</desc>
          <g
            id="Page-1"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g
              id="Cupons-page-empty"
              transform="translate(-1227.000000, -972.000000)"
              fill="#52555C"
              fillRule="nonzero"
            >
              <g id="Line-Copy-4" transform="translate(165.500000, 969.000000)">
                <g
                  id="Path"
                  transform="translate(1069.000000, 15.000000) rotate(-180.000000) translate(-1069.000000, -15.000000) translate(1062.000000, 3.000000)"
                >
                  <path
                    d="M6.99996016,19 C6.56983131,19 6.13975558,18.831934 5.81182084,18.4965087 L-4.50765969,7.93607257 C-5.16411344,7.26429782 -5.16411344,6.17513021 -4.50765969,5.50362723 C-3.85147152,4.83212426 -2.78735675,4.83212426 -2.13084989,5.50362723 L6.99996016,14.8480852 L16.1308233,5.50395336 C16.7872771,4.83245039 17.8512856,4.83245039 18.5074207,5.50395336 C19.1641931,6.17545634 19.1641931,7.26462395 18.5074207,7.9363987 L8.18809949,18.4968348 C7.8600054,18.8323145 7.42992967,19 6.99996016,19 Z"
                    transform="translate(7.000000, 12.000000) rotate(-270.000000) translate(-7.000000, -12.000000) "
                  ></path>
                </g>
              </g>
            </g>
          </g>
        </svg>
        </a>
      </th>
      <th className="last"></th>
    </tr>
  );
};

export default CouponRow;
