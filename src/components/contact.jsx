import React from "react";
import imageOverlay from "../img/earth.jpg";
import { FiMail } from "react-icons/fi";
import { GoMarkGithub } from "react-icons/go";
import { ImLinkedin, ImAppleinc } from "react-icons/im";

class Contact extends React.Component {
  render() {
    return (
      <section
        className="paralax-mf footer-paralax bg-image sect-mt4 route"
        style={{ backgroundImage: "url(" + imageOverlay + ")" }}
      >
        <div className="overlay-mf"></div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="contact-mf">
                <div id="contact" className="box-shadow-full">
                  <div className="row">
                    <div className="col-md-6">
                    <div className="title-box-2 pt-4 pt-md-0">
                      <h5 className="title-left">Get in Touch</h5>
                    </div>
                    <div className="more-info">
                      <p className="lead">
                        I would love to hear from you!
                        <br/>
                        Contact me via one of the following methods.
                      </p>
                      {/* <!-- <ul class="list-ico">
                              <li><span class="ion-ios-location"></span> 329 WASHINGTON ST BOSTON, MA 02108</li>
                              <li><span class="ion-ios-telephone"></span> (617) 557-0089</li>
                              <li><span class="ion-email"></span> contact@example.com</li>
                              </ul> --> */}
                    </div>
                    <div className="socials">
                      <ul>
                        <li>
                          <a
                            href="https://github.com/erezdrutin"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span className="ico-circle">
                              <GoMarkGithub style={{width: '1.5rem', height: '1.5rem'}} />
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
                              <ImAppleinc style={{width: '1.5rem', height: '1.5rem'}} />
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
                              <ImLinkedin style={{width: '1.5rem', height: '1.5rem'}} />
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
                              <FiMail style={{width: '1.5rem', height: '1.5rem'}}/>
                            </span>
                          </a>
                        </li>

                      </ul>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="copyright-box">
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    );
  }
}

export default Contact;
