import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMediumSquare
} from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";


const footerLinks = {
  
    legal: [
      {
        name: "Privacy Policy",
        url: "/legal/privacy-policy",
      },
      {
        name: "Disclaimers",
        url: "/legal/disclaimers",
      },
      {
        name: "Terms and Conditions",
        url: "/legal/terms-and-conditions",
      },
    ],
  
  
    quick: [
      {
        name: "About",
        url: "/about",
      },
      {
        name: "Contact",
        url: "/contact",
      },
      {
        name: "External Articles",
        url: "/external-articles",
      },
      
    ],
    socialMedia:[
      
      {
        name:"Linkedin",
        url:"https://www.linkedin.com/in/serenity-mosaic-09b625288/",
        icons:<AiFillLinkedin/>
      },
      {
        name:"GitHub",
        url:"https://github.com/Dwanx-9",
        icons:<AiFillGithub/>
      },
      {
        name:"Telegram",
        url:"https://t.me/serenitymosaic",
        icons:<FaTelegram />
      },
      {
        name:"Medium",
        url:"https://medium.com/@serenitymosaic",
        icons:<AiFillMediumSquare/>
      },
    ]
  
};


export default footerLinks