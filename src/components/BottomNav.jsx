import React from "react";
import "./BottomNav.css";

const BottomNav = () => {
  return (
    <nav className="bottom-nav">
      <div className="nav-item active">
        <div className="nav-icon quotes-icon">
          {" "}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M16 8.4l-4.7-4.7-1.4 1.4 4.7 4.7-4.7 4.7 1.4 1.4 4.7-4.7 1.4-1.4-1.4-1.4zM8 15.6l4.7 4.7 1.4-1.4-4.7-4.7 4.7-4.7-1.4-1.4-4.7 4.7-1.4 1.4 1.4 1.4" />
          </svg>
        </div>
        <span>Quotes</span>
      </div>

      <div className="nav-item">
        <div className="nav-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M21 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18zM8 4v16h3V4H8zm5 0v16h3V4h-3z" />
          </svg>
        </div>
        <span>Deals</span>
      </div>

      <div className="nav-item center-item">
        <div className="nav-icon center-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-8h4v2h-6V7h2v5z" />
          </svg>
        </div>
      </div>

      <div className="nav-item">
        <div className="nav-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M3 3h18v18H3V3zm16 16V5H5v14h14zM11 7h2v2h-2V7zm0 4h2v6h-2v-6z" />
          </svg>
        </div>
        <span>Net Deals</span>
      </div>

      <div className="nav-item">
        <div className="nav-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm1 3v4h4v2h-4v4h-2v-4H7v-2h4V7h2z" />
          </svg>
        </div>
        <span>History</span>
      </div>
    </nav>
  );
};

export default BottomNav;
