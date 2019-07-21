import { colors } from './styles/variables';
import jjdImage from './images/jjd.png';
import usdtImage from './images/usdt.png';
import ravenImage from './images/raven.png';
import { ReactComponent as Email } from './images/email.svg';
import { ReactComponent as Github } from './images/github.svg';
import { ReactComponent as Skype } from './images/skype.svg';
import { ReactComponent as Stackoverflow } from './images/stackoverflow.svg';
import { ReactComponent as Linkedin } from './images/linkedin.svg';

const content = {
  landing: {
    intro: "Hey, I'm",
    subtitle: "I build Internet stuff and solve problems"
  },
  bio: {
    title: "Dennis Mai",
    description: "Self-taught Web Developer, Avid Learner, and Jiu Jitero living in",
    place: "{ Hawaii: Kauai }"
  },
  about: "Born and raised in raised in Wichita, Kansas to immigrant, Vietnamese parents. Studied abroad in Murcia, Spain where I met my Swiss wife. Moved to Zurich, Switzerland and tasted the start-up life. Fell in love with Brazilian Jiu Jitsu. Witnessed the birth of my daughter. Moved to Hawaii, where we all live & play today. Life is Good.",
  projects: [
    { 
      short: "jjd",
      title: "Jiu Jitsu Distilled",
      technologies: "React, Redux, React-Router, React-Form, MongoDB, Node, Express, Axios, Bootstrap, Mailgun, JWT, bcryptjs, Heroku",
      description: "I built this as a way of documenting and organizing Brazilian Jiu Jitsu techniques, their variations, and how they connect with each other in sequences.",
      gif: "asdf",
      image: jjdImage,
      color: colors.blue,
      live: "https://jjd-client-v1.herokuapp.com/",
      github: "https://github.com/sartoriusrex/jjd-client",
      githubServer: "https://github.com/sartoriusrex/jjd-server",
    },
    {
      short: "usdt",
      title: "US Department of Truth",
      technologies: "Node, Express, EJS, MongoDB, PassportJS, scss, gulp, Heroku",
      description: "I wanted to make a satire website in the wake of the wave of fake news scandals. USDT is a fictitious government entity that controls the dissemination of public information.",
      gif: "asdf",
      image: usdtImage,
      color: colors.pink,
      live: "https://usdt-satire.herokuapp.com/",
      github: "https://github.com/sartoriusrex/USDT",
    },
    {
      short: "raven",
      title: "Raven",
      technologies: "React, Hooks, ReactDOM, Heroku",
      description: "I Implemented a Sketch Design I found online using only React. The design was only done for layout widths of 1440px, so I made it responsive, using my own design decisions.",
      gif: "asdf",
      image: ravenImage,
      color: colors.purple,
      live: "https://raven-landing-page.herokuapp.com/",
      github: "https://github.com/sartoriusrex/raven-landing-page",
    }
  ],
  contact: [
    {
      text: "dmai.developer@gmail.com",
      icon: Email,
      label: "e-mail",
      link: "mailto:dmai.developer@gmail.com"
    },
    {
      text: "sartoriusrex",
      icon: Github,
      label: "Github",
      link: "https://github.com/sartoriusrex"
    },
    {
      text: "dmaidev",
      icon: Linkedin,
      label: "LinkedIn",
      link: "www.linkedin.com/in/dmaidev"
    },
    {
      text: "dennis_mai",
      icon: Skype,
      label: "Skype",
      link: "skype:dennis_mai?chat"
    },
    {
      text: "sartoriusrex",
      icon: Stackoverflow,
      label: "e-mail",
      link: "https://stackoverflow.com/users/11639750/sartoriusrex"
    },
  ]
}

export default content;