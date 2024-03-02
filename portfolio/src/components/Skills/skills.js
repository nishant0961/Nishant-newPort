import React from 'react'
import './skills.css';
import UIDesign from '../../react-portfolio-assets/assets/ui-design.png'
import WebDesign from '../../react-portfolio-assets/assets/website-design.png';
import AppDesign from '../../react-portfolio-assets/assets/app-design.png';

const skills = () => {
  return (
    <section id = 'skills'>
        <span className="skillTitle">What I do</span>
        <span className="skillDesc">I am skilled and passionate web designer with experience in creating visually appealing and user-friendly websites. I have a strong understanding of design and a keen eye for detail. I am proficient in HTML, CSS, and JavaScript, as well as design software such as Adobe Photoshop and Illustartor.</span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>UI/UX Design</h2>
                    <p>This is a demo text, you can write your own content here</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={WebDesign} alt="Web Design" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>WebSite Design</h2>
                    <p>This is demo text can be changed while making the production ready website.</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={AppDesign} alt="App Design" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>App Design</h2>
                    <p>You can write text related to mobile app development.</p>
                </div>
            </div>
        </div>
    </section>
  );
}

export default skills
