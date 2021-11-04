import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter
      style={{ position: "relative", left: 0, bottom: 0, right: 0 }}
      color="elegant-color"
      className="font-small pt-4 mt-4"
    >
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Contact Information</h5>
            <address>
              <a href="mailto:rabhi1604@gmail.com">
                Email: rabhi1604@gmail.com
              </a>
              <br />
              7421 Frankford Rd Apt. 1632 <br /> Dallas, TX - 75252
            </address>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Links</h5>
            <ul>
              <li className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px", marginRight: "10px" }}>
                  <a
                    href="https://www.facebook.com/abhishek.rajendraprasad/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Facebook
                  </a>
                </span>
              </li>
              <li className="fab fa-instagram">
                <span style={{ marginLeft: "10px", marginRight: "10px" }}>
                  <a
                    href="https://www.instagram.com/abhishekr04/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Instagram
                  </a>
                </span>
              </li>
              <li className="fab fa-github">
                <span style={{ marginLeft: "10px", marginRight: "10px" }}>
                  <a
                    href="https://github.com/Abhishek-Rajendra"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                </span>
              </li>
              <li className="fab fa-linkedin">
                <span style={{ marginLeft: "10px", marginRight: "10px" }}>
                  <a
                    href="https://www.linkedin.com/in/abhishek-rajendra-prasad/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                </span>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Abhishek Rajendra Prasad
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default Footer;
