// ==========================================
// COMPONENT: Resume page
// OVERVIEW:  View and download options,
//            Responsive to resizing
// USAGE:     App
// ==========================================

import Button from '../button/Button';
import ButtonAnchor from '../button/ButtonAnchor';
import SpanText from './SpanText';
import DateFormat from './DateFormat';
import ListItem from '../list/ListItem';

import './ResumePage.css';

export default function Resume() {
  const docsLink = "https://docs.google.com/document/d/1CpQL-_v7v3_YCdxQXRoP112ybwPCpTEqIaEqMFjr8qk/edit?usp=sharing";
  const degree = "Bachelor of Science in Engineering in Computer Science";
  const coursework = "Data Structures and Algorithms, "
                   + "Applied Computational Machine Learning, "
                   + "Introduction to Computer Organization, "
                   + "Discrete Mathematics, "
                   + "Technical Communication, "
                   + "Codepath";

  return (
    <section className="resume-page">
      <span className="diag-line"></span>

      <h1 className="title">Resume</h1>

      <ButtonAnchor to={docsLink}>View in Docs</ButtonAnchor>
      <ButtonAnchor to="./assets/resume/YuXiaoResume.pdf"
                    download="YuXiaoResume">
                    Download
      </ButtonAnchor>

      <div className="resume-content-container">
        <div className="resume-content">
          <section className="resume-content-head">
            <h1>Yu Xiao</h1>

            <p>978-888-8886 - txiaopk@gmail.com - Greater Boston, MA</p>

            <span>
              <a className="multi-word"
                href="https://yuxiao.netlify.app" 
                target="_blank"
                rel="noreferrer">
                yuxiao.netlify.app
              </a>
              <p>&nbsp;-&nbsp;</p>
              <a className="multi-word"
                href="https://linkedin.com/in/yuxiao8" 
                target="_blank"
                rel="noreferrer">
                linkedin.com/in/yuxiao8
              </a>
            </span>
          </section>

          <section className="resume-content-section">
            <h2>EDUCATION</h2>
            <h3>University of Michigan, Ann Arbor MI</h3>
            <DateFormat title={degree}>Graduating April 2024</DateFormat>
            <SpanText title="GPA">3.89/4.00</SpanText>
            <SpanText title="Coursework">{coursework}</SpanText>
          </section>

          <section className="resume-content-section">
            <h2>SKILLS</h2>
            <SpanText title="Proficient">C/C++, HTML, Affinity Designer</SpanText>
            <SpanText title="Competent">React, CSS, JavaScript, Java, Git</SpanText>
            <SpanText title="Capable">Python, MATLAB, Adobe Illustrator</SpanText>
          </section>

          <section className="resume-content-section">
            <h2>WORK EXPERIENCE</h2>
            <div className="resume-content-block">
              <h3>Mathworks, Natick MA</h3>
              <DateFormat title="EDG Software Engineering Intern">May 2022 - August 2022</DateFormat>
              <ul>
                <ListItem>Implemented [PROJECT] to improve runtime performance for MATLAB and SimuLink [PRODUCT] by XX% using C++</ListItem>
                <ListItem>Designed custom unit tests to follow test driven development philosophy and ensure program effectiveness</ListItem>
                <ListItem>Conducted unit, integration, and system tests to validate [PRODUCT] robustness and performance</ListItem>
                <ListItem>Communicated progress in biweekly team meetings using AGILE methodology to align and review project updates</ListItem>
              </ul>
            </div>
            
            <div className="resume-content-block">
              <h3>Graphic Design</h3>
              <DateFormat title="Digital Artwork Freelancer">July 2016 - Present</DateFormat>
              <ul>
                <ListItem>Designed and sold 30+ custom decks of playing cards utilizing Affinity Designer and Adobe Illustrator</ListItem>
                <ListItem>Created content for UM Asian Intervarsity as a Graphics Team Member to communicate events through social platforms</ListItem>
                <ListItem>Negotiated contracts with clients to create illustrations, logos, posters utilizing Affinity Designer and Adobe Illustrator</ListItem>
              </ul>
            </div>
          </section>

          <section className="resume-content-section">
            <h2>PROJECTS</h2>
            <div className="resume-content-block">
              <h3>Technical Course Projects</h3>
              <DateFormat title="Log Entries Manager">October 2021 - November 2021</DateFormat>
              <ul>
                <ListItem>Created log management system utilizing hash maps to perform sorting, appending, deleting, searching on log entries using object oriented programming in C++</ListItem>
                <ListItem>Implemented keyword search feature to efficiently filter entries by category and search words using hash map</ListItem>
                <ListItem>Designed custom functors to manage entries of log objects using STL functions</ListItem>
                <ListItem>Utilized test driven development and Makefiles to automate testing and running software</ListItem>
              </ul>
            </div>

            <div className="resume-content-block">
              <DateFormat title="Air Quality Monitor">January 2021 - April 2021</DateFormat>
              <ul>
                <ListItem>Collaborated with engineering team of 6 to prototype and develop 5 level air quality monitor using C++ and Arduino components</ListItem>
                <ListItem>Communicated progress and design updates in weekly presentations to peers and supervisors</ListItem>
              </ul>
            </div>

            <div className="resume-content-block">
              <h3>Independent Front-end Development</h3>
              <DateFormat title="Personal Website">November 2021 - Present</DateFormat>
              <ul>
                <ListItem>Created multi-page responsive personal portfolio website with mobile friendly design using React, HTML, CSS</ListItem>
                <ListItem>Constructed wireframes and mockups of interfaces to scope and design UI / UX using Affinity Designer</ListItem>
                <ListItem>Enhanced performance for 90+ Google Lighthouse audit and 100 for accessibility, best practices, and SEO</ListItem>
              </ul>
            </div>            
          </section>

        </div>
      </div>

      <Button to="/resume#">Back to Top</Button>
    </section>
  );
}
