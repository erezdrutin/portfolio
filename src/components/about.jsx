import React from "react";
import myImage from "../img/myImage.png";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        { id: "Python_skill", content: "Python", porcentage: "90%", value: "90" },
        { id: "HTML5_CSS3_skill", content: "HTML5 & CSS3", porcentage: "85%", value: "85" },
        { id: "JavaScript_ReactJS_skill", content: "JavaScript & ReactJS", porcentage: "80%", value: "80" },
        { id: "SQL_skill", content: "SQL", porcentage: "90%", value: "90" },
        { id: "Wordpress_skill", content: "Wordpress", porcentage: "75%", value: "75" },
        { id: "Swift_SwiftUI_skill", content: "Swift & SwiftUI", porcentage: "70%", value: "70" },
        { id: "Firebase_skill", content: "Firebase", porcentage: "80%", value: "80" },
        { id: "C#_Java_skill", content: "C# & Java", porcentage: "80%", value: "80" },
        { id: "Automic_skill", content: "Automic Automations", porcentage: "90%", value: "90" },
        { id: "Batch_Powershell_skill", content: "Batch & Powershell", porcentage: "80%", value: "80" },
        { id: "Linux_skill", content: "Linux", porcentage: "75%", value: "75" },
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "A passionate developer with a demonstrated history in the DevOps & Automations industry. Currently serving in IDF as a DevOps developer, a position that allows me to explore a variety of new fields and technologies, and working in Wediggit ltd as an Apps developer, a position that allows me to develop myself and expand my skills."
        },
        {
          id: "second-p-about",
          content:
            "A Practical Technician degree graduate that is currently learning towards a B.S.c in Computer Science in the Open University."
        },
        {
          id: "third-p-about",
          content:
          "Specializes in coming up with creative solutions for the most bizarre problems. "
        }
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      {/* <p className="title-s">Skill</p> */}
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.porcentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.porcentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
