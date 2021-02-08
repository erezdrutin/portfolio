import React from "react";

class Resume extends React.Component {
  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Resume</h3>
                <p className="subtitle-a">
                  My Resume - both in Hebrew and English
                </p>
                <div className="line-mf"></div>
                
                <div className="pt-3" style={{marginTop: '1rem'}}>
                    <a
                    className="btn btn-primary btn js-scroll px-4"
                    href="#work"
                    role="button"
                    >
                        Download My Resume in Hebrew
                    </a>
                    <a
                    className="btn btn-primary btn js-scroll px-4"
                    href="#work"
                    role="button"
                    style={{marginLeft: '2rem'}}
                    >
                        Download My Resume in English
                    </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
