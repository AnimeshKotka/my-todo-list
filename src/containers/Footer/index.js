import React from 'react';
import github from './../../assets/images/svg/github.svg';
import linkedin from './../../assets/images/svg/linkedin.svg';
import twitter from './../../assets/images/svg/twitter.svg';
import wordpress from './../../assets/images/svg/wordpress.svg';
import mail from './../../assets/images/svg/mail.svg';

import './footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <h4>Follow Me</h4>
        <a
          href="https://github.com/rushijagani"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} alt="github" />
        </a>
        <a
          href="https://twitter.com/rushijagani_rj"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={twitter} alt="twitter" />
        </a>
        <a
          href="https://www.linkedin.com/in/rushi-jagani-99a37241/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedin} alt="linkedin" />
        </a>
        <a
          href="https://rushijagani.wordpress.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={wordpress} alt="wordpress" />
        </a>
        <a
          href="mailto:rushi.jagani@ymail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={mail} alt="mail" />
        </a>
      </div>
    </footer>
  );
};
export default Footer;
