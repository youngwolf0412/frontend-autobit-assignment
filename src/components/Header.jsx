import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-main">
        <button className="menu-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z" />
          </svg>
        </button>

        <h1 className="title">Quotes</h1>

        <div className="header-actions">
          <button className="action-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path d="M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z" />
            </svg>
          </button>
          <button className="action-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2h6z" />
            </svg>
          </button>
          <button className="action-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path d="M7 4V2h10v2h3.007c.548 0 .993.445.993.993v16.014a.994.994 0 0 1-.993.993H3.993A.994.994 0 0 1 3 21.007V4.993C3 4.445 3.445 4 3.993 4H7zm0 2H5v14h14V6h-2v2H7V6zm2-3h6v2H9V3z" />
            </svg>
          </button>
        </div>
      </div>

      <div className="public-news">
        <p>Public News: For Support, Call +91 8918085080 ( Whatsapp only )</p>
      </div>
    </header>
  );
};

export default Header;
