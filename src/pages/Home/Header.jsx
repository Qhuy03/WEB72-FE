import React from "react";
import "./Home.css";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = new useNavigate();

  return (
    <>
      <div className="topbar">
        <div className="topbar-left"></div>
        <div className="topbar-right">
          <form
            action="/search"
            method="get"
            className="header-search-form"
            role="search"
          >
            <input
              type="text"
              name="query"
              className="search-auto form-control"
              placeholder="Tìm kiếm sản phẩm..."
              autoComplete="off"
            />
            <button
          
              className="btn btn-default"
              type="submit"
              aria-label="Tìm kiếm"
            ><i class="fa-solid fa-magnifying-glass"></i></button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Header;
