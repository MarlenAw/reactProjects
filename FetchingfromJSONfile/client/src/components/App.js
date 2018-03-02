import React, { Component } from 'react';

import resume from '../resume.json';
import Experience from './Experience';
import Skills from './Skills';
import Languages from './Languages';

class App extends Component {
  renderExperiences() {
    return resume.experiences.map((item, i) => {
      return <Experience item={item} key={i} />;
    });
  }

  renderSkills(){
    return resume.skills.map((item, i) => {
      return <Skills item={item} key={i} />;
    });
  }

  renderLanguages(){
    return resume.languages.map((item, i) => {
      return <Languages item={item} key={i} />
    });
  }

  render() {
    return (
      <div className="wrapper">
        <div className="sidebar-wrapper">
          <div className="profile-container">
            <img className="profile" src="assets/images/profile.png" alt="" />
            <h1 className="name">{resume.name}</h1>
            <h3 className="tagline">Full Stack Developer</h3>
          </div>

          <div className="contact-container container-block">
            <ul className="list-unstyled contact-list">
              <li className="email">
                <i className="fa fa-envelope" />
                <a href="mailto: yourname@email.com">{resume.email}</a>
              </li>
              <li className="phone">
                <i className="fa fa-phone" />
                <a href="tel:0123 456 789">{resume.phone}</a>
              </li>
              <li className="website">
                <i className="fa fa-globe" />
                <a href={resume.website} target="_blank">
                  www.marlenawwad.com
                </a>
              </li>
              <li className="linkedin">
                <i className="fa fa-linkedin" />
                <a href={resume.linkedin} target="_blank">
                  linkedin.com/MarlenAw
                </a>
              </li>
              <li className="github">
                <i className="fa fa-github" />
                <a href={resume.github} target="_blank">
                  github.com/marlenaw
                </a>
              </li>
            </ul>
          </div>
          <div className="education-container container-block">
            <h2 className="container-block-title">Education</h2>
            <div className="item">
              <h4 className="degree">Full Stack Web Development</h4>
              <h5 className="meta">Founders and Coders</h5>
              <div className="time">2017 - 2018</div>
            </div>
            <div className="item">
              <h4 className="degree">Full Stack Web Development</h4>
              <h5 className="meta">John Bryce</h5>
              <div className="time">2016 - 2017</div>
            </div>
            <div className="item">
              <h4 className="degree">Computer Science</h4>
              <h5 className="meta">University of Düsseldorf</h5>
              <div className="time">2011 - 2014</div>
            </div>
          </div>

          <div className="languages-container container-block">
            <h2 className="container-block-title">Languages</h2>

            {this.renderLanguages()}
            
          </div>

          <div className="interests-container container-block">
            <h2 className="container-block-title">Interests</h2>
            <ul className="list-unstyled interests-list">
              <li>Extreme Sports</li>
              <li>Entrepreneurship</li>
              <li>Technology</li>
              <li>Blockchain</li>
            </ul>
          </div>
        </div>

        <div className="main-wrapper">
          <section className="section summary-section">
            <h2 className="section-title">
              <i className="fa fa-user" />Career Profile
            </h2>
            <div className="summary">
              <p>
                Summarise your career here lorem ipsum dolor sit amet,
                consectetuer adipiscing elit. You can{' '}
                <a
                  href="http://themes.3rdwavemedia.com/website-templates/orbit-free-resume-cv-template-for-developers/"
                  target="_blank"
                >
                  download this free resume/CV template here
                </a>. Aenean commodo ligula eget dolor aenean massa. Cum sociis
                natoque penatibus et magnis dis parturient montes, nascetur
                ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.
              </p>
            </div>
          </section>

          <section className="section experiences-section">
            <h2 className="section-title">
              <i className="fa fa-briefcase" />Experiences
            </h2>

            {this.renderExperiences()}


          </section>

          <section className="section projects-section">
            <h2 className="section-title">
              <i className="fa fa-archive" />Projects
            </h2>
            <div className="intro">
              <p>
                You can list your side projects or open source libraries in this
                section. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Vestibulum et ligula in nunc bibendum fringilla a eu
                lectus.
              </p>
            </div>
            <div className="item">
              <span className="project-title">
                <a href="#hook">Velocity</a>
              </span>{' '}
              -{' '}
              <span className="project-tagline">
                A responsive website template designed to help startups promote,
                market and sell their products.
              </span>
            </div>
            <div className="item">
              <span className="project-title">
                <a
                  href="http://themes.3rdwavemedia.com/website-templates/responsive-bootstrap-theme-web-development-agencies-devstudio/"
                  target="_blank"
                >
                  DevStudio
                </a>
              </span>{' '}
              -
              <span className="project-tagline">
                A responsive website template designed to help web
                developers/designers market their services.{' '}
              </span>
            </div>
            <div className="item">
              <span className="project-title">
                <a
                  href="http://themes.3rdwavemedia.com/website-templates/responsive-bootstrap-theme-for-startups-tempo/"
                  target="_blank"
                >
                  Tempo
                </a>
              </span>{' '}
              -{' '}
              <span className="project-tagline">
                A responsive website template designed to help startups promote
                their products or services and to attract users &amp; investors
              </span>
            </div>
            <div className="item">
              <span className="project-title">
                <a
                  href="hhttp://themes.3rdwavemedia.com/website-templates/responsive-bootstrap-theme-mobile-apps-atom/"
                  target="_blank"
                >
                  Atom
                </a>
              </span>{' '}
              -{' '}
              <span className="project-tagline">
                A comprehensive website template solution for
                startups/developers to market their mobile apps.{' '}
              </span>
            </div>
            <div className="item">
              <span className="project-title">
                <a
                  href="http://themes.3rdwavemedia.com/website-templates/responsive-bootstrap-theme-for-mobile-apps-delta/"
                  target="_blank"
                >
                  Delta
                </a>
              </span>{' '}
              -{' '}
              <span className="project-tagline">
                A responsive Bootstrap one page theme designed to help app
                developers promote their mobile apps
              </span>
            </div>
          </section>

          <section className="skills-section section">
            <h2 className="section-title">
              <i className="fa fa-rocket" />Skills &amp; Proficiency
            </h2>
            <div className="skillset">

              {this.renderSkills()}

            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default App;
