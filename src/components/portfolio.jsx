import React from "react";

import { AiOutlineSearch } from "react-icons/ai";

// Importing Wedigg Service images:
import wedigg_service from "../img/Wedigg Service/wedigg_service.png";
import wedigg_service_1 from "../img/Wedigg Service/wedigg_service_1.png";
import wedigg_service_2 from "../img/Wedigg Service/wedigg_service_2.png";
import wedigg_service_3 from "../img/Wedigg Service/wedigg_service_3.png";
import wedigg_service_4 from "../img/Wedigg Service/wedigg_service_4.png";

// Importing Wediggit Site images:
import wediggit_site from "../img/Wediggit Site/wediggit_site.png";
import wediggit_site_1 from "../img/Wediggit Site/wediggit_site_1.png";
import wediggit_site_2 from "../img/Wediggit Site/wediggit_site_2.png";

// Importing The Floating Square images:
import the_floating_square from "../img/The Floating Square/the_floating_square.png";
import the_floating_square_1 from "../img/The Floating Square/the_floating_square_1.png";
import the_floating_square_2 from "../img/The Floating Square/the_floating_square_2.png";
import the_floating_square_3 from "../img/The Floating Square/the_floating_square_3.png";
import the_floating_square_4 from "../img/The Floating Square/the_floating_square_4.png";

// Importing 2048+ images:
import twenty_forty_eight_plus from "../img/2048+/2048+.png";
import twenty_forty_eight_plus_1 from "../img/2048+/2048+_1.png";
import twenty_forty_eight_plus_2 from "../img/2048+/2048+_2.png";
import twenty_forty_eight_plus_3 from "../img/2048+/2048+_3.png";
import twenty_forty_eight_plus_4 from "../img/2048+/2048+_4.png";


class Portfolio extends React.Component {
  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Portfolio</h3>
                <p className="subtitle-a">
                  A collection containing some of my projects.
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">

          
            <div className="col-md-4">
              <div className="work-box">
                <a href={wedigg_service} data-lightbox="gallery-vmarine">
                  <div className="work-img">
                    <img src={wedigg_service} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Wedigg Service</h2>
                        <span className="w-ctegory">
                          Wediggit&#39;s service app
                          <br></br>
                          <br></br>
                        </span>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Swift SwiftUI Firebase Vision AVFoundation
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={wedigg_service_1}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={wedigg_service_2}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={wedigg_service_3}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={wedigg_service_4}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  className="btn btn-primary btn js-scroll px-4"
                  href="https://apps.apple.com/us/app/wedigg-service/id1517291407#?platform=iphone"
                  target="_blank"
                  role="button"
                  style={{display: 'flex', justifyContent: 'center'}}
                  >
                      Learn More
                  </a>
              </div>
            </div>
            

            <div className="col-md-4">
              <div className="work-box">
                <a href={the_floating_square} data-lightbox="gallery-vmarine">
                  <div className="work-img">
                    <img src={the_floating_square} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">The Floating Square</h2>
                        <span className="w-ctegory">
                          IOS Game
                          <br></br>
                          <br></br>
                        </span>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Swift GameKit SpriteKit Combine AVFoundation
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={the_floating_square_1}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={the_floating_square_2}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={the_floating_square_3}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={the_floating_square_4}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  className="btn btn-primary btn js-scroll px-4"
                  href="https://apps.apple.com/us/app/the-floating-square/id1507159644"
                  target="_blank"
                  role="button"
                  style={{display: 'flex', justifyContent: 'center'}}
                  >
                      Learn More
                  </a>
              </div>
            </div>


            <div className="col-md-4">
              <div className="work-box">
                <a href={wediggit_site} data-lightbox="gallery-vmarine">
                  <div className="work-img">
                    <img src={wediggit_site} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Wediggit Site</h2>
                        <span className="w-ctegory">
                          Wediggit&#39;s website
                          <br></br>
                          <br></br>
                        </span>
                        <div className="w-more">
                          <span className="w-ctegory">
                          Wordpress JS HTML5 CSS3 PHP REST API
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={wediggit_site_1}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={wediggit_site_2}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  className="btn btn-primary btn js-scroll px-4"
                  href="https://www.wediggit.co.il/"
                  target="_blank"
                  role="button"
                  style={{display: 'flex', justifyContent: 'center'}}
                  >
                      Learn More
                  </a>
              </div>
            </div>


            <div className="col-md-4">
              <div className="work-box">
                <a href={twenty_forty_eight_plus} data-lightbox="gallery-vmarine">
                  <div className="work-img">
                    <img src={twenty_forty_eight_plus} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">2048 Plus</h2>
                        <span className="w-ctegory">
                          2048 Solver with ML
                          <br></br>
                          <br></br>
                        </span>
                        <div className="w-more">
                          <span className="w-ctegory">
                            C# .NET Microsoft XNA ML ExpectiMax Algorithm
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={twenty_forty_eight_plus_1}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={twenty_forty_eight_plus_2}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={twenty_forty_eight_plus_3}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={twenty_forty_eight_plus_4}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  className="btn btn-primary btn js-scroll px-4"
                  href="https://github.com/erezdrutin/2048-Plus"
                  target="_blank"
                  role="button"
                  style={{display: 'flex', justifyContent: 'center'}}
                  >
                      Learn More
                  </a>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
