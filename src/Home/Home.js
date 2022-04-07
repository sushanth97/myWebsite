import React, { useState } from 'react';
import AboutMe from './../AboutMe/AboutMe';
import Blogslist from './../Blogs/Blogslist';
import Polyfillslist from './../Polyfills/Polyfillslist';

function Home() {
  let [ active, setActive ] = useState('blogs');
  let blogCss = active === 'blogs' ? 'nav-link tabactive text-white' : 'nav-link';
  let polyFillCss = active === 'polyfills' ? 'nav-link tabactive text-white' : 'nav-link';
  let aboutMeCss = active === 'aboutme' ? 'nav-link tabactive text-white' : 'nav-link';
  let TabComponent;
  if (active === 'blogs') {
    TabComponent = <Blogslist/>
  } else if (active === 'polyfills') {
    TabComponent = <Polyfillslist/>
  } else {
    TabComponent = <AboutMe/>
  }
  return (
    <React.Fragment>
      <div className="bg-secondary py-4 text-white text-center">
        <h1>
          Hi, I am Sushanth
        </h1>
        <p>(welcome to my website)</p>
      </div>
      <div className="row pt-4 homecontainer">
        <div className="col-md-3 text-center">
          <ul className="nav flex-column">
            <li className="nav-item">
              <a className={blogCss} href="#" onClick={() => { setActive('blogs')}}>Blogs</a>
            </li>
            <li className="nav-item">
              <a className={polyFillCss} href="#" onClick={() => { setActive('polyfills')}}>Javascript Polyfills</a>
            </li>
            <li className="nav-item">
              <a className={aboutMeCss} href="#" onClick={() => { setActive('aboutme')}}>About Me</a>
            </li>
          </ul>
        </div>
        <div className="col-md-9 border-start">
          {TabComponent}
        </div>
      </div>
    </React.Fragment> 
  );
}

export default Home;