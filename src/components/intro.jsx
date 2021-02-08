import React from "react";
import "./stars.scss";
import Typed from "react-typed";

import { FiMail } from "react-icons/fi";
import { GoMarkGithub } from "react-icons/go";
import { ImLinkedin, ImAppleinc } from "react-icons/im";

class Intro extends React.Component {
  render() {
    return (
      // <div id="home" className="intro route bg-image " style={{backgroundImage: "url("+bigImage+")"}}>
      <div id="home" className="intro route bg-image background">
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />

        <div className="intro-content display-table">
          <div className="table-cell">
            <div className="container">
              <h1 className="intro-title mb-4">Hello, I am Erez</h1>
              <p className="intro-subtitle">
                <span className="text-slider-items"></span>
                <strong className="text-slider">
                  <Typed
                    strings={[
                      "DevOps Developer",
                      "Apps Developer",
                      "Full Stack Developer",
                      "Software Engineer",
                      "Automations Developer"
                    ]}
                    typeSpeed={80}
                    backDelay={1100}
                    backSpeed={30}
                    loop
                  />
                </strong>
              </p>
              <p className="pt-3">
                <a
                  className="btn btn-primary btn js-scroll px-4"
                  href="#work"
                  role="button"
                >
                  View My Work
                </a>
              </p>
              
              <div className="socials">
              <ul>
                <li>
                  <a
                    href="https://github.com/erezdrutin"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="ico-circle">
                      <GoMarkGithub style={{width: '1.5rem', height: '1.5rem', color: 'white'}} />
                    </span>
                  </a>
                </li>

                <li>
                  <a
                    href="https://apps.apple.com/us/developer/erez-drutin/id912961642"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="ico-circle">
                      <ImAppleinc style={{width: '1.5rem', height: '1.5rem', color: 'white'}} />
                    </span>
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.linkedin.com/in/erez-drutin-0099701aa"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="ico-circle">
                      <ImLinkedin style={{width: '1.5rem', height: '1.5rem', color: 'white'}} />
                    </span>
                  </a>
                </li>

                <li>
                  <a
                    href="mailto:drutinerez3@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="ico-circle">
                      <FiMail style={{width: '1.5rem', height: '1.5rem', color: 'white'}}/>
                    </span>
                  </a>
                </li>

              </ul>
            </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
