import React from 'react'
import './About.css';
import image from 'D:/Billing Software/billing-software/src/Images/aboutusimage.jpg'

function About() {
    return (
        <div className="about">
            <div class="about-section" contentEditable="true">
  <h1>About the Hotel</h1>
  <p>Some text about who we are and what we do.</p>
  <p>Resize the browser window to see that this page is responsive by the way.</p>
</div>
<div className="body_image">   
    <img src={ image }  alt=""  width="1600" height="600"/>
</div>
<div className="about_footer" contentEditable="true">
    <footer>
        <p>trying footer</p>
        <p>veeraiahmadamanchi777@gmail.com</p>
    </footer>
</div>
        </div>
    )
}

export default About
