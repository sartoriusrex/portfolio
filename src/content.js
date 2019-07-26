import { colors } from './styles/variables';
import jjdImage from './images/jjd.png';
import jjdGif from './images/jjd.gif';
import usdtImage from './images/usdt.png';
import usdtGif from './images/usdt.gif';
import ravenImage from './images/raven.png';
import ravenGif from './images/raven.gif';

const content = {
  landing: {
    intro: "Hey, I'm",
    subtitle: "I build fast, responsive websites"
  },
  bio: {
    title: "Dennis Mai",
    description: "Self-taught Web Developer, Avid Learner, and Jiu Jiteiro living in",
    place: "{ Hawaii: Kauai }"
  },
  about: "Born and raised in Wichita, Kansas to immigrant, Vietnamese parents. Studied abroad in Murcia, Spain where I met my bombastic Swiss-French wife. Moved to Zurich, Switzerland, tasted the start-up life, ate lots of cheese and chocolate. Fell in love with Brazilian Jiu Jitsu. Witnessed the birth of my fiery daughter. Moved to Hawaii, where we live and play today. Life is Good.",
  projects: [
    { 
      short: "jjd",
      title: "Jiu Jitsu Distilled",
      technologies: "React, Redux, React-Router, React-Form, MongoDB, Mongoose, Node, Express, Axios, Bootstrap, Mailgun, JWT, bcryptjs, Heroku, AdobeXD",
      description: "Full stack Brazilian Jiu Jitsu technique and sequence organizer.",
      gif: jjdGif,
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
      description: "Full stack, no front-end framework, fake news and government satire website.",
      gif: usdtGif,
      image: usdtImage,
      color: colors.pink,
      live: "https://usdt-satire.herokuapp.com/",
      github: "https://github.com/sartoriusrex/USDT",
    },
    {
      short: "raven",
      title: "Raven",
      technologies: "React, Hooks, Sketch, Zeplin, Heroku",
      description: "Fully responsive React implementation of Sketch Design, which was only spec'ed for layouts 1440px wide.",
      gif: ravenGif,
      image: ravenImage,
      color: colors.purple,
      live: "https://raven-landing-page.herokuapp.com/",
      github: "https://github.com/sartoriusrex/raven-landing-page",
    }
  ],
  contact: [
    {
      text: "dmai.developer@gmail.com",
      label: "Email",
      link: "mailto:dmai.developer@gmail.com"
    },
    {
      text: "sartoriusrex",
      label: "Github",
      link: "https://github.com/sartoriusrex"
    },
    {
      text: "dmaidev",
      label: "Linkedin",
      link: "https://www.linkedin.com/in/dmaidev/"
    },
    {
      text: "dennis_mai",
      label: "Skype",
      link: "skype:dennis_mai?chat"
    },
    {
      text: "sartoriusrex",
      label: "Stackoverflow",
      link: "https://stackoverflow.com/users/11639750/sartoriusrex"
    },
  ]
}

export default content;