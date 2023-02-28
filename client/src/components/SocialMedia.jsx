import React from 'react';
import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <div>
        <a 
            href='https://github.com/tbekishev'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaGithub/>
        </a>
      </div>
      <div>
      <a 
          href='https://www.facebook.com/tbekishev'
          target='_blank'
          rel='noopener noreferrer'
        >        
        <FaFacebookF/>
      </a>
      </div>
      <div>
        <a 
          href='https://www.linkedin.com/in/tbekishev/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaLinkedin/>
        </a>
      </div>
    </div>
  )
}

export default SocialMedia;
