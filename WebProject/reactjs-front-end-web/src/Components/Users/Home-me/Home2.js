import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "./Cat2.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }} data-aos="fade-right">
              <span className="primary-header"> ABOUT </span> WEB
            </h1>
            <p className="home-about-body" data-aos="fade-up">
              <br />
               <i className="primary-header">
              Nghiên cứu về bản chất của tồn tại và sự hiện diện của mọi thứ.
              </i>{" "}
              <br />
              <br />
              Tìm hiểu về kiến thức, sự hiểu biết và cách chúng ta có thể biết điều gì là đúng.
              <br />
              <br />{" "}
              <i className="primary-header"></i> Nghiên cứu về giá trị, bao gồm cả giá trị đạo đức và æsthetic (nghệ thuật và cái đẹp).
              <br />
              <br />Nghiên cứu về đạo đức, quy tắc đạo đức và hành vi đạo đức.
              <i>
                <i className="primary-header"></i>
              </i>
              <br />
              <br />Nghiên cứu về lý trí và các nguyên tắc của lập luận.{" "}
              <i className="primary-header"></i> 
              <i className="primary-header"></i>
              <br />
              <br />
              "Triết học" là một lĩnh vực nghiên cứu về {" "}
              <i className="primary-header"></i>những vấn đề cơ bản và toàn diện của tồn tại, tri thức, giá trị, ý nghĩa, lý do và tư duy.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                data-aos="fade-left"
                src={myImg}
                className="img-fluid"
                alt="avatar"
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1 data-aos="fade-right">
              <span className="primary-header">CONNECT </span> WITH ME
            </h1>
            <p data-aos="fade-left">Feel free to connect with me</p>
            <ul className="home-about-social-links" data-aos="fade-up">
              <li className="social-icons">
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="github"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="twitter"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="email"
                >
                  <AiOutlineMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="linkedin"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="instagram"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;