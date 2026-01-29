import React from 'react'
import { Navbar, Nav, Button } from "react-bootstrap";

function Header() {
  return (
    <>
      {/* Remove default spacing */}
      <style>
        {`
          body {
            margin: 0;
            padding: 0;
          }
        `}
      </style>

      <Navbar
        expand="lg"
        collapseOnSelect
        style={{
          width: "100%",
          backgroundColor: "#EAF2FB",
          padding: "18px 32px",
          margin: 0,
        }}
      >
        {/* Logo */}
        <Navbar.Brand
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontSize: "28px",
              fontWeight: "800",
              letterSpacing: "3px",
              color: "#0D6EFD",
              marginRight: "10px",
            }}
          >
            NAAVIKA
          </span>

          <div
            className="d-none d-md-block"
            style={{ lineHeight: "1.1" }}
          >
            <div
              style={{
                fontSize: "13px",
                fontWeight: "600",
                color: "#1F3C5B",
              }}
            >
              Hearing Health Clinic
            </div>
            <div
              style={{
                fontSize: "12px",
                color: "#4A6A8A",
              }}
            >
              Restore | Rediscover
            </div>
          </div>
        </Navbar.Brand>

        <Navbar.Toggle />

        <Navbar.Collapse>
          <Nav
            className="ms-auto align-items-lg-center"
            style={{ gap: "24px" }}
          >
            {[
              "Home",
              "Solutions",
              "Team",
              "About Us",
              "Blog",
              "Contact Us",
            ].map((item, index) => (
              <Nav.Link
                key={index}
                href="#"
                style={{
                  fontWeight: "500",
                  color: item === "Home" ? "#0D6EFD" : "#1F3C5B",
                }}
              >
                {item}
              </Nav.Link>
            ))}

            <Button
              style={{
                backgroundColor: "#1CB5A3",
                border: "none",
                borderRadius: "20px",
                padding: "8px 22px",
                fontWeight: "500",
                color: "#FFFFFF",
              }}
            >
              Book Appointment
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default Header;
