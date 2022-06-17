// ==========================================
// COMPONENT: Projects page
// OVERVIEW:  All projects,
//            Back to top quick access
// USAGE:     App
// ==========================================

import Project from './Project';
import Button from '../button/Button';
import ListItem from '../list/ListItem';

import './ProjectsPage.css';

export default function ProjectsPage() {
  return (
    <section className="projects-page">
      <span className="diag-line intro-diag"></span>

      <h1 className="title">Projects</h1>

      <Project title="FreshTea Website"
                src="./assets/fresh-tea-0.webp"
                width="700px"
                height="auto"
                alt="FreshTea Website page"
                site="https://yu-xiao-boba-shop.netlify.app/"
                code="https://github.com/ytxpk/boba-website"
                tech="HTML, CSS, JS"
                name="fresh-tea"
                imgs="4">
        <p>I created this mock boba tea website to 
            gain working knowledge of front end web 
            development. Additionally, I am a fan of
            bubble tea and learned more about the history
            of the drink. I began by creating the site with
            HTML and CSS. Later, I learned and added JS to improve
            functionality and interactivity.
        </p>
        <p className="features">Features</p>
        <ul>
          <ListItem>Browser size responsiveness</ListItem>
          <ListItem>Customer review system</ListItem>
          <ListItem>Interactive menu with drinks, toppings, and options</ListItem>
          <ListItem>Cart system to store user order</ListItem>
        </ul>
      </Project>

      <Project title="BlueAir Website"
                src="./assets/blue-air-0.webp"
                width="700px"
                height="auto"
                alt="Blue Website page"
                site="https://yu-xiao-blue-air.netlify.app/"
                code="https://github.com/ytxpk/blue-air-website"
                tech="HTML, CSS, JS"
                name="blue-air"
                imgs="2">
        <p>A mock website meant for a business that delivers 
            fresh air. Elegance and mobile usability was 
            a focus for this project. Through this project, 
            I enhanced my understanding of UI and UX 
            principles in addition to JS tools such as
            intersection observer.
        </p>
        <p className="features">Features</p>
        <ul>
          <ListItem>Animated links</ListItem>
          <ListItem>Fade in home page image</ListItem>
          <ListItem>Mobile responsiveness with hamburger menu</ListItem>
        </ul>
      </Project>

      <Button to="/projects#">Back to Top</Button>

    </section>
  );
}
