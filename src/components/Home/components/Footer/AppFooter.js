import React from "react";
import "./footer.css";
import {
  Footer,
  Dropdown,
  Container,
  Columns,
  Button,
} from "react-bulma-components";

const AppFooter = () => {
  const date = new Date();

  return (
    <Footer>
      <Container>
        <Columns className="footer__heading">
          <Columns.Column className="d-flex">
            <img src="img/iosf-logo.png" alt="logo" className="logo" />
            <span className="logo-text">IOSF</span>
          </Columns.Column>
          <Columns.Column className="d-flex">
            <a className="fs-14 color-white fw-bold m-left-auto" href="#header">
              Back To Top &#8593;
            </a>
          </Columns.Column>
          <div className="divider" />
        </Columns>
        <Columns>
          <Columns.Column className="footer__quote color-white fs-18">
            Join us as a contributor and associate with us in our journey for
            making Open Source Contribution lit &#128293; and super powerful for
            the budding and already existing developer community
          </Columns.Column>
        </Columns>
        <Button
          className="footer__joinUsBtn"
          size="medium"
          renderAs="a"
          href="https://toolsiosf.typeform.com/to/fl45kmgs"
        >
          Join Us
        </Button>
        <Columns className="footer__content">
          <Columns.Column size={2}>
            <h4>General Links</h4>
            <ul className="footer__links">
              <li>
                <a className="footer-link grey-text text-lighten-1" href="/">
                  About
                </a>
              </li>
              <li>
                <a className="footer-link grey-text text-lighten-1" href="/">
                  Work
                </a>
              </li>
              <li>
                <a className="footer-link grey-text text-lighten-1 " href="/">
                  Join
                </a>
              </li>
              <li>
                <a className="footer-link grey-text text-lighten-1" href="/">
                  Blogs
                </a>
              </li>
              <li>
                <a className="footer-link grey-text text-lighten-1" href="/">
                  Contact
                </a>
              </li>
            </ul>
          </Columns.Column>
          <Columns.Column size={3}>
            <h4>Subscribe</h4>
            <form className="p-top-16">
              <div className="field">
                <div className="control">
                  <input className="input" placeholder="Enter E-mail Address" />
                </div>
              </div>
              <Button
                className="footer__subscribeBtn fs-14"
                color="primary"
                size="small"
              >
                Subscribe
              </Button>
            </form>
          </Columns.Column>
          <Columns.Column className="footer__lang">
            <Dropdown hoverable value="item" label={""}>
              <Dropdown.Item value="item">English</Dropdown.Item>
            </Dropdown>
          </Columns.Column>
        </Columns>
        <div className="divider" />
        <Columns className="footer__end">
          <Columns.Column>
            <div className="footer__copyright">
              <p>
                ping@iosf.com <br />
                &copy; Indian Open Source Foundation, {date.getFullYear()}
              </p>
            </div>
          </Columns.Column>
          <Columns.Column>
            <div className="footer__socialLinks">
              <a
                href="https://www.facebook.com/iosfindia/"
                className="btn btn-floating z-depth-0 facebook transparent grey-text"
              >
                <i className="fab grey-text fa-facebook-f"></i>
              </a>
              <a
                href="https://twitter.com/iosf_india"
                className="btn btn-floating z-depth-0 twitter transparent grey-text"
              >
                <i className="fab grey-text fa-twitter"></i>
              </a>
              <a
                href="https://www.instagram.com/iosf_india/"
                className="btn btn-floating z-depth-0 instagram transparent grey-text"
              >
                <i className="fab grey-text fa-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/iosf/"
                className="btn btn-floating z-depth-0 linkedin transparent grey-text"
              >
                <i className="fab grey-text fa-linkedin"></i>
              </a>
              <a
                href="https://github.com/IndianOpenSourceFoundation"
                className="btn btn-floating z-depth-0 github transparent grey-text"
              >
                <i className="fab grey-text fa-github"></i>
              </a>
            </div>
          </Columns.Column>
        </Columns>
      </Container>
    </Footer>
  );
};

export default AppFooter;
