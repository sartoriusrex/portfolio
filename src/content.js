import { colors } from './styles/variables';
import jjdGif from './images/jjd-preview.gif';
import usdtGif from './images/usdt-preview.gif';
import ravenGif from './images/raven-preview.gif';
import jjdVid from './images/jjd-preview.webm';
import usdtVid from './images/usdt-preview.webm';
import ravenVid from './images/raven-preview.webm';
import jjdVidTwo from './images/raven-preview.mp4';
import usdtVidTwo from './images/raven-preview.mp4';
import ravenVidTwo from './images/raven-preview.mp4';
import PDF from './mai_resume.pdf';

const content = {
  landing: {
    intro: "Hey, I'm",
    subtitle: "I build fast, responsive websites."
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
      vid: jjdVid,
      vidTwo: jjdVidTwo,
      color: colors.blue,
      live: "https://jjd-client-v1.herokuapp.com/",
      github: "https://github.com/sartoriusrex/jjd-client",
      githubServer: "https://github.com/sartoriusrex/jjd-server-public",
    },
    {
      short: "usdt",
      title: "US Department of Truth",
      technologies: "Node, Express, EJS, MongoDB, Mongoose, PassportJS, Nodemailer, SendGrid, scss, BEM, gulp, Heroku",
      description: "Full stack, no front-end framework, fake news and government satire website.",
      gif: usdtGif,
      vid: usdtVid,
      vidTwo: usdtVidTwo,
      color: colors.purple,
      live: "https://usdt-satire.herokuapp.com/",
      github: "https://github.com/sartoriusrex/USDT",
    },
    {
      short: "raven",
      title: "Raven",
      technologies: "React, Hooks, Sketch, Zeplin, Netlify, (And Heroku)",
      description: "Fully responsive React implementation of Sketch Design, which was only spec'ed for layouts 1440px wide.",
      gif: ravenGif,
      vid: ravenVid,
      vidTwo: ravenVidTwo,
      color: colors.pink,
      live: "https://raven-landing-page.netlify.com/",
      github: "https://github.com/sartoriusrex/raven-landing-page",
    }
  ],
  contact: [
    {
      label: "Resume",
      text: "Download Resume",
      link: PDF,
    },
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