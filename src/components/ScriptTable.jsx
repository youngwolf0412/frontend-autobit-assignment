import React from "react";
import "./ScriptTable.css";

const ScriptTable = () => {
  const scriptData = [
    {
      name: "Silver Mar",
      time: "22:54:59.859",
      scripId: "6470",
      change: "0.022",
      changePercent: "0.06%",
      open: "34.305",
      current: "34.033",
      last: "34.055",
      bid: { price: "29.51", quantity: "33,995" },
      ask: { price: "35.98", quantity: "34,305" },
    },
    {
      name: "Palladium Mar",
      time: "22:29:59.294",
      scripId: "800",
      change: "11.50",
      changePercent: "1.19%",
      open: "969.00",
      current: "962.50",
      last: "974.00",
      bid: { price: "970.5", quantity: "969.0" },
      ask: { price: "978.5", quantity: "974.0" },
    },
    {
      name: "Platinum Apr",
      time: "22:34:59.843",
      scripId: "4020",
      change: "14.50",
      changePercent: "1.50%",
      open: "982.70",
      current: "964.80",
      last: "979.30",
      bid: { price: "985.2", quantity: "979.3" },
      ask: { price: "1025.4", quantity: "982.7" },
    },
    {
      name: "MINI Gold Apr",
      time: "22:59:59.900",
      scripId: "40360",
      change: "2.10",
      changePercent: "0.06%",
      open: "3284.50",
      current: "3282.40",
      last: "3284.50",
      bid: { price: "2928.6", quantity: "3284.5" },
      ask: { price: "3332.2", quantity: "3284.5" },
    },
    {
      name: "MINI Silver Mar",
      time: "22:54:59.859",
      scripId: "6470",
      change: "0.022",
      changePercent: "0.06%",
      open: "34.305",
      current: "34.033",
      last: "34.055",
      bid: { price: "29.51", quantity: "33,995" },
      ask: { price: "35.98", quantity: "34,305" },
    },
    {
      name: "Copper Mar",
      time: "22:54:59.859",
      scripId: "6470",
      change: "0.1070",
      changePercent: "2.05%",
      open: "34.305",
      current: "34.033",
      last: "34.055",
      bid: { price: "4110.0", quantity: "33,995" },
      ask: { price: "5313.8", quantity: "34,305" },
    },
  ];

  return (
    <div className="script-table">
      {scriptData.map((script, index) => (
        <div key={index} className="script-row">
          <div className="script-info">
            <div className="script-header">
              <div className="change-group">
                <span className="change-info">
                  <span className="change-arrow">↗</span>
                  <span className="change-value">{script.change}</span>
                  <span className="change-percent">
                    ({script.changePercent})
                  </span>
                </span>
                <span className="script-name">{script.name}</span>
              </div>
            </div>
            <div className="script-details">
              <span className="time">{script.time}</span>
              <span className="script-id">↗ {script.scripId}</span>
            </div>
            <span className="detail-item">O: {script.open}</span>
          </div>
          <div className="price-info">
            <div className="bid">
              <div className="main-price">
                {script.bid.price}
                <sub>0</sub>
              </div>
              <div className="quantity">↓ {script.bid.quantity}</div>
              <div className="current">C: {script.current}</div>
            </div>
            <div className="ask">
              <div className="main-price">
                {script.ask.price}
                <sub>0</sub>
              </div>
              <div className="quantity">↑ {script.ask.quantity}</div>
              <div className="last">L: {script.last}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ScriptTable;
