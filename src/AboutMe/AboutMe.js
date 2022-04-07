import React from 'react';
import profileimg from '../assets/myprofile.png';

function AboutMe() {
    return (
        <div className="p-5 d-flex flex-column align-items-center justify-content-center h-100">
            <img src={profileimg} className="profileimg" alt="Image loading failed"></img>
            <p className="pt-4">
                I am a frontend developer with 3+ years of experience in designing and developing world class responsive web applications.
                Working in Zoho Corporation in a product called Zoho Books. Experienced with React js and Ember js framework.
            </p>
        </div>
    );
}

export default AboutMe;