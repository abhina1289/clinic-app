import React from 'react'
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom"; // Add this import

function Header() {
  // Naavika Theme
  const theme = {
    red: "#c92424",
    blue: "#4484c4",
    green: "#3a9f43",
    lightBg: "#f9fafb",
    textDark: "#222",
  };

  return (
    <>
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
          backgroundColor: "#ffffff",
          padding: "18px 32px",
          margin: 0,
          boxShadow: `0 2px 10px ${theme.blue}10`,
          borderBottom: `1px solid ${theme.blue}20`,
        }}
      >
        <Navbar.Brand
          as={Link}  // Change this
          to="/"     // Change this
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
              color: theme.blue,
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
                color: theme.textDark,
              }}
            >
              Hearing Health Clinic
            </div>
            <div
              style={{
                fontSize: "12px",
                color: `${theme.textDark}99`,
              }}
            >
              Restore | Rediscover
            </div>
          </div>
        </Navbar.Brand>

        <Navbar.Toggle 
          style={{
            borderColor: theme.blue,
          }}
        />

        <Navbar.Collapse>
          <Nav
            className="ms-auto align-items-lg-center"
            style={{ gap: "24px" }}
          >
            <Nav.Link as={Link} to="/" style={{ fontWeight: "500", color: "#0D6EFD" }}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/service" style={{ fontWeight: "500", color: "#1F3C5B" }}>
              Solutions
            </Nav.Link>
            <Nav.Link as={Link} to="#" style={{ fontWeight: "500", color: "#1F3C5B" }}>
              Team
            </Nav.Link>
            <Nav.Link as={Link} to="/abt" style={{ fontWeight: "500", color: "#1F3C5B" }}>
              About Us
            </Nav.Link>
            <Nav.Link as={Link} to="#" style={{ fontWeight: "500", color: "#1F3C5B" }}>
              Blog
            </Nav.Link>
            <Nav.Link as={Link} to="#" style={{ fontWeight: "500", color: "#1F3C5B" }}>
              Contact Us
            </Nav.Link>

            <Button
              style={{
                backgroundColor: theme.green,
                border: "none",
                borderRadius: "20px",
                padding: "8px 22px",
                fontWeight: "500",
                color: "#FFFFFF",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#2d7a34";
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = `0 4px 12px ${theme.green}40`;
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = theme.green;
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "none";
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