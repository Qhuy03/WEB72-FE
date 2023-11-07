import React, { useState } from "react";
import "./Home.css";
import { Link, useNavigate } from "react-router-dom";
import Modal from "../Modal";
import Login from "../Login_Register/Login";

const Header = () => {
  const navigate = new useNavigate();
  const [handleModal, setHandleModal] = useState(false)
  const [login, setLogin] = useState(true)
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
          <a onClick={() => setHandleModal(!handleModal)}>ĐĂNG NHẬP</a>
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
    <Modal handleModal={handleModal} setHandleModal={setHandleModal}>
      <a style={{
        color: 'red',
        fontSize: '24px',
        display: 'inline-flex',
        width: '100%',
        height: '100%',
        justifyContent: 'end'
      }} onClick={() => setHandleModal(!handleModal)}>X</a>
      {login ? 
        <div>
          <div className="login">
            <h1>Đăng nhập</h1>
            <p>Vui lòng nhập thông tin tài khoản</p>
            <hr />
            <label htmlFor="username">
              <b>Tên đăng nhập</b>
            </label>
            <input
              // onChange={(event) => setUserName(event.target.value)}
              type="text"
              placeholder="Mời nhập tên tài khoản"
              name="username"
              id="username"
            />

            <label htmlFor="password">
              <b>Mật khẩu</b>
            </label>
            <input
              // onChange={(event) => setPassword(event.target.value)}
              type="password"
              placeholder="******"
              name="password"
              id="password"
            />

            <hr />
            <button
            // onClick={handleLogin}
            type="submit" className="submit">
              Đăng nhập
            </button>
          </div>
          <div className="register-login">
            <p>
              Bạn chưa có tài khoản? <a onClick={() => setLogin(!login)} >Đăng ký</a>.
            </p>
          </div>
        </div>
        :
        <div>
      <div className="register">
        <h1>Đăng ký</h1>
        <p>Vui lòng điền thông tin để đăng ký</p>
        <hr />

        <label htmlFor="username">
          <b>Tên đăng nhập</b>
        </label>
        <input
          // value={userName}
          // onChange={(event) => setUserName(event.target.value)}
          type="text"
          placeholder="Mời nhập tên tài khoản"
          name="username"
          id="username"
        />

        <label htmlFor="password">
          <b>Mật khẩu</b>
        </label>
        <input
          // value={password}
          // onChange={(event) => setPassword(event.target.value)}
          type="password"
          placeholder="******"
          name="password"
          id="password"
        />

        <label htmlFor="password-repeat">
          <b>Nhập lại mật khẩu</b>
        </label>
        <input
          // value={password2}
          // onChange={(event) => setPassword2(event.target.value)}
          type="password"
          placeholder="******"
          name="password-repeat"
          id="password-repeat"
        />

        <hr />
        <p>
          Để tạo tài khoản vui lòng đồng ý với điều khoản của chúng tôi{" "}
          <a href="#">Terms &amp; Privacy</a>.
        </p>

        <button
        // onClick={handleAddUser}
        type="submit" className="submit">
          Đăng ký
        </button>
      </div>
      <div className="register-login">
        <p>
          Bạn đã có tài khoản rồi? <a onClick={() => setLogin(!login)} >Đăng nhập</a>.
        </p>
      </div>
    </div>
      }
    </Modal>
    </>
  );
};

export default Header;
