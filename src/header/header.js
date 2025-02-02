import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./header.css";

const Header = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    // Fetch menu items dynamically
    setMenuItems([
      "Business Card",
      "Envelope",
      "Brochure",
      "Bottle Sticker",
      "Calendar",
      "ID Card",
      "Menu Card",
      "School Diary",
      "CD/DVD Sticker",
      "Ribbon Badge",
    ]);
  }, []);

  const handleLoginClick = () => {
    setShowLogin(!showLogin);
  };

  const handleSidebarToggle = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <>

     {/* Google Fonts Preconnect */}
     <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link
        href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap"
        rel="stylesheet"
      />

      <header className="d-flex justify-content-between align-items-center p-3 border-bottom">
        {/* Left Section */}
        <div className="d-flex align-items-center">
          <button
            className="btn border-0 me-2"
            onClick={handleSidebarToggle}
          >
            <i className="bi bi-list"></i>
          </button>
          <h1 className="m-0 text-uppercase fw-bold">Pentagon Printers</h1>
        </div>

        {/* Center Section - Empty on larger screens */}
        <div className="d-none d-md-block"></div>

        {/* Right Section */}
        <div className="d-flex align-items-center">
          <div className="search-bar input-group me-3 d-none d-md-flex">
            <input
              type="search"
              className="form-control"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-icon"
            />
            <button className="btn border-0" id="search-icon">
              <i className="bi bi-search"></i>
            </button>
          </div>
          <button className="btn border-0 me-3 d-none d-md-block">
            <i className="bi bi-telephone"></i>
          </button>
          <button className="btn border-0 me-3 d-none d-md-block">
            <i className="bi bi-cart"></i>
          </button>
          <button className="btn border-0" onClick={handleLoginClick}>
            <i className="bi bi-person"></i>
          </button>
        </div>
      </header>

      {/* Sidebar */}
      {showSidebar && (
        <>
          <div
            className="sidebar-overlay position-fixed top-0 start-0 w-100 h-100"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", zIndex: 1040 }}
            onClick={handleSidebarToggle}
          ></div>
          <div
            className="sidebar position-fixed top-0 start-0 h-100 bg-light p-4 overflow-auto"
            style={{
              width: "320px",
              zIndex: 1050,
              borderRight: "1px solid #ddd",
              overflowY: "auto",
              maxHeight: "100vh",
            }}
          >
            <span
              className="position-absolute top-0 end-0 me-2 p-3 fw-light cursor-pointer"
              style={{ fontSize: "2rem", cursor: "pointer" }}
              onClick={handleSidebarToggle}
            >
              ×
            </span>
            <ul className="list-unstyled mt-5">
              {menuItems.map((item, index) => (
                <li
                  className="mb-4 position-relative"
                  key={index}
                >
                  <a
                    href="#"
                    className="d-block p-2 text-decoration-none"
                    style={{
                      position: "relative",
                      fontFamily: "Raleway, sans-serif",
                      fontSize: "1.3rem",
                      color: "#000",
                      fontWeight: 300,
                    }}
                    onMouseEnter={(e) => {
                      const icon = e.currentTarget.querySelector("i");
                      if (icon) icon.style.opacity = 1;
                    }}
                    onMouseLeave={(e) => {
                      const icon = e.currentTarget.querySelector("i");
                      if (icon) icon.style.opacity = 0;
                    }}
                  >
                    {item}
                    <i
                      className="bi bi-chevron-right position-absolute end-0"
                      style={{
                        opacity: 0,
                        top:12,
                        transition: "opacity 0.3s",
                        fontSize: "1.0rem",
                      }}
                    ></i>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}

      {/* Login Popup */}
      {showLogin && (
        <div
          className="login-popup position-fixed top-50 start-50 translate-middle border p-4 bg-white"
          style={{
            borderRadius: "0px",
            maxWidth: "400px",
            width: "100%",
          }}
        >
          <span
            className="position-absolute top-0 end-0 mt-2 me-2 fw-bold cursor-pointer"
            style={{ fontSize: "1.5rem", cursor: "pointer" }}
            onClick={handleLoginClick}
          >
            ×
          </span>
          <h2 className="mb-3 mt-3">Login / Sign In</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input type="text" className="form-control" id="username" />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input type="password" className="form-control" id="password" />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Login
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Header;
