import React, { useState } from "react";
import "./ScriptSelector.css";

const ScriptSelector = () => {
  const [viewMode, setViewMode] = useState("pro");

  return (
    <div className="script-selector-container">
      <div className="script-actions">
        <div className="action-box">
          <div className="plus-icon">+</div>
          <span>Press and hold to select script</span>
        </div>

        <div className="action-box">
          <div className="plus-icon">+</div>
          <span>Press and hold to select script</span>
        </div>
      </div>

      <div className="view-mode-container">
        <div className={`view-mode ${viewMode === "pro" ? "active" : ""}`}>
          <div className="toggle-switch pro">
            <input
              type="checkbox"
              checked={viewMode === "pro"}
              onChange={() => setViewMode("pro")}
            />
            <span className="slider"></span>
          </div>
          <span>Pro View</span>
        </div>
        <div className={`view-mode ${viewMode === "oneclick" ? "active" : ""}`}>
          <span>One Click Trade</span>
          <div className="toggle-switch oneclick">
            <input
              type="checkbox"
              checked={viewMode === "oneclick"}
              onChange={() => setViewMode("oneclick")}
            />
            <span className="slider"></span>
          </div>
        </div>
      </div>

      <div className="search-container">
        <div className="search-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="18"
            height="18"
          >
            <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
          </svg>
        </div>
        <input
          type="text"
          className="search-input"
          placeholder="Search by Script Name"
        />
      </div>

      <div className="column-headers">
        <div className="script-header">Script</div>
        <div className="price-headers">
          <div className="bid-header">Bid</div>
          <div className="ask-header">Ask</div>
        </div>
      </div>
    </div>
  );
};

export default ScriptSelector;
