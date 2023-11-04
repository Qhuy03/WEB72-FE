import React from "react";
import "./Home.css";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = new useNavigate();

  return (
    <>
      <div>
  <div className="topbar">
    <div className="container">
      <div className="form-search">
        <input type="text" placeholder="Tìm kiếm sản phẩm" />
        <div className="icon">
          <i className="fa-solid fa-magnifying-glass" />
        </div>
      </div>
      <ul>
        <li>
          <Link to='/login'>ĐĂNG NHẬP</Link>
        </li>
      </ul>
      <div className="cart">
        <i className="fa-solid fa-cart-shopping" />
        <span>0</span>
      </div>
    </div>
  </div>
  <header>
    <div className="container">
      <ul>
        <li>
          <Link to ="/">TRANG CHỦ</Link>
        </li>
        <li>
          <a href>CHÍNH SÁCH ĐỔI TRẢ</a>
        </li>
        <li>
          <Link to="/">
            <img src="https://bizweb.dktcdn.net/100/415/697/themes/902041/assets/logo.png?1692958575148" alt="" />
          </Link>
        </li>
        <li>
          <a href>BẢNG SIZE</a>
        </li>
        <li>
          <a href>HỆ THỐNG CỦA HÀNG</a>
        </li>
      </ul>
    </div>
    <div className="container menu">
      <ul>
        <li>
          <a href>Tất cả sản phẩm</a>
        </li>
        <li>
          <a href>Áo Thun</a>
        </li>
        <li>
          <a href>Baby Tee</a>
        </li>
        <li>
          <a href>Áo Polo</a>
        </li>
        <li>
          <a href>Áo sơ mi</a>
        </li>
        <li>
          <a href>Áo khoác</a>
        </li>
        <li>
          <a href>Hoodie</a>
        </li>
        <li>
          <a href>Quần</a>
        </li>
        <li>
          <a href>Quần nữ</a>
        </li>
        <li>
          <a href>phụ kiện</a>
        </li>
      </ul>
    </div>
  </header>
</div>

    </>
  );
};

export default Header;
