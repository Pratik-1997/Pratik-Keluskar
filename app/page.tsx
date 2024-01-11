"use client";
import Downloads from './components/Downloads'
import Experience from './components/Experience'
import Projects from './components/Projects'
import styles from './page.module.css'
import Mt from './assets/mt.png';
import ACT from './assets/act.png';
import Zod from './assets/zod.png';
import Duracoat from './assets/duracoat.png';
import Link from '@/node_modules/next/link';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export default function Home() {




    const scrolltoHash = function (element_id: string, leftId: string) {
      const element = document.getElementById(element_id)
      element?.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
      const elementLeft : any = document.getElementsByClassName("links");
      for( let i = 0 ; i <= elementLeft.length ; i++){
        console.log(elementLeft[i]?.id)
        if (elementLeft[i]?.id === leftId) {
          // Add "active" class to the clicked element
          elementLeft[i]?.classList.add("active");
      } else {
          // Remove "active" class from other elements
          elementLeft[i]?.classList.remove("active");
      }
      }
    }

  return (
    <main>
      <div className="container">
        <div className="left-block block">
          <h1 className='name'>Pratik Keluskar</h1>
          <p className="jd">Associate Developer at Interactive Avenues</p>
          <p className="short-descp">I build pixel-perfect, accessible sites for the web and beyond.</p>
          <div className="sub-links">
            <ul> 
              <li>
                <a onClick={() => scrolltoHash('about', 'aboutLink' )} className="links" id='aboutLink'><span className="line"></span>About</a>
              </li>
              <li>
                <a onClick={() => scrolltoHash('experience', 'expLink')}  className="links" id='expLink' ><span className="line"></span>Experience</a>
              </li>
              <li>
                <a onClick={() => scrolltoHash('projects', 'projLink')}  className="links" id='projLink'><span className="line"></span>Projects</a>
              </li>
            </ul>
          </div>
          <Downloads/>
          
        </div>
        <div className="right-block block">
          <div className="sm-right-block" id="about">
            <div className="mob-sticky">
              <h3>About</h3>
            </div>
            <p className="text">I hold an MScIT post-graduate degree, which I successfully completed in 2020. Following my education, I secured a position as a Web Developer at <a href="https://www.velocityconsultancy.com/" target="_blank" className='link'>Velocity Consultancy</a> , where I gained practical experience in HTML, CSS, JavaScript, and WordPress. Over the course of one year, I honed my skills and contributed to the development of various web projects.</p>
            <p className="text">Subsequently, I transitioned to <a href="https://www.interactiveavenues.com/Interactive" target="_blank" className='link'>Interactive Avenues</a> as an Associate Developer, further advancing my expertise. Working collaboratively on diverse projects, my focus expanded to include advanced JavaScript, jQuery, and React, with a specialization in Next.js. I actively participated in delivering visually appealing websites that prioritize simplicity and maintain high SEO scores.</p>
            <p className="text">Beyond my professional endeavors, I have a passion for cricket and enjoy spending time with friends during my leisure.</p>
          </div>
          <div className="sm-right-block" id="experience">
          <div className="mob-sticky">
              <h3>Experience</h3>
            </div>
            <Experience year="2022 - Present" pos="Associate Developer · Interactive Avenues" descp="
Collaborating with a team on React.js projects, executing various functionalities across multiple initiatives, and delivering production-ready code. Emphasizing SEO considerations to prioritize performance." techs={['Html', 'Css', 'Scss' , 'Js', 'jQuery', 'React', 'Next']}/>
            <Experience year="2021 - 2022" pos="Web Developer · Velocity Consultancy" descp="
Executing WordPress projects involving custom themes and premium themes, incorporating functionalities based on client specifications. Utilizing primarily PHP, HTML, CSS, and JS languages. Additionally, providing guidance to teammates to enhance their comprehension of UI requirements." techs={['Html', 'Css', 'Js', 'jQuery', 'Wordpress', 'Php']}/>
          </div>
          <div className="sm-right-block" id="projects">
          <div className="mob-sticky">
            <h3>Projects</h3></div>
            <Projects img={Mt} name="Mahindra Tractor" descp="Contributed to the development of UI components for the project, aiding the team in completing the project ahead of schedule. " />
            <Projects img={ACT} name="ACT" descp="Developed the homepage for a website, incorporating diverse functionalities. Additionally, played a key role in implementing Ajax calls and backend functionalities within the Drupal framework. " />
            <Projects img={Zod} name="Zodiac Clothing" descp="The primary objective of this project was to enhance the SEO score, which saw significant improvement during my involvement. Additionally, I contributed to establishing the fundamental UI/UX structure across the entire website." />
            <Projects img={Duracoat} name="Duracoat" descp="Contributed to the development of UI components for the project, aiding the team in completing the project ahead of schedule." />
          </div>
        </div>
      </div>
      <div className="projects-box">
        <Link href="/Projects">
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m656-120-56-56 63-64-63-63 56-57 64 64 63-64 57 57-64 63 64 64-57 56-63-63-64 63Zm-416-80q17 0 28.5-11.5T280-240q0-17-11.5-28.5T240-280q-17 0-28.5 11.5T200-240q0 17 11.5 28.5T240-200Zm0 80q-50 0-85-35t-35-85q0-50 35-85t85-35q37 0 67.5 20.5T352-284q39-11 63.5-43t24.5-73v-160q0-83 58.5-141.5T640-760h46l-63-63 57-57 160 160-160 160-57-56 63-64h-46q-50 0-85 35t-35 85v160q0 73-47 128.5T354-203q-12 37-43.5 60T240-120Zm-64-480-56-56 63-64-63-63 56-57 64 64 63-64 57 57-64 63 64 64-57 56-63-63-64 63Z"/></svg>
        </Link>
        <span className='hover'>Checkout Projects</span>
      </div>
    </main>
  )
}
