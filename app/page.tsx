"use client";
import Downloads from "./components/Downloads";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import styles from "./page.module.css";
import Bob from "./assets/bob-cards.png";
import portal from "./assets/act-portal.png";
import iages from "./assets/iages.png";
import ralson from "./assets/ralson.png";
import ralco from "./assets/ralco.png";
import Mt from "./assets/mt.png";
import ACT from "./assets/act.png";
import Zod from "./assets/zod.png";
import Duracoat from "./assets/duracoat.png";
import Link from "@/node_modules/next/link";
import FocusComponent from "./components/FocusComponent";
import RecentProject from "./assets/honda.png";
import Image from "next/image";
import HondaLogo from "@/app/assets/honda-logo.svg";
import CaliperLogo from "@/app/assets/caliper-logo.png";
import BobLogo from "@/app/assets/bob-logo.svg";
import ActLogo from "@/app/assets/act-logo.svg";
import { useEffect, useState } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState("about");

  const scrolltoHash = function (element_id: string, leftId: string) {
    const element = document.getElementById(element_id);
    element?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
    setActiveSection(element_id);
  };

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about");
      const experienceSection = document.getElementById("experience");
      
      if (aboutSection && experienceSection) {
        const aboutRect = aboutSection.getBoundingClientRect();
        const experienceRect = experienceSection.getBoundingClientRect();
        
        // Check if experience section is in view (with some offset)
        if (experienceRect.top <= 100 && experienceRect.bottom >= 100) {
          setActiveSection("experience");
        } else if (aboutRect.top <= 100 && aboutRect.bottom >= 100) {
          setActiveSection("about");
        }
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    
    // Call once to set initial state
    handleScroll();

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const experiences = [
    {
      company: "Interactive Avenues",
      periods: [
        {
          year: "2025 - Present",
          position: "Senior Developer",
          descp:
            "Leading development teams and architecting complex solutions. Mentoring junior developers and implementing best practices across projects.",
          techs: [
            "Next.js",
            "TypeScript",
            "Sitecore",
            "Supabase",
            "GraphQL",
          ],
        },
        {
          year: "2023 - 2024",
          position: "Developer",
          descp:
            "Developing advanced features and taking ownership of key modules. Collaborating with cross-functional teams to deliver high-quality solutions.",
          techs: [
            "React",
            "Angular",
            "JavaScript",
            "jQuery",
            "SCSS",
            "Bootstrap",
          ],
        },
        {
          year: "2022 - 2023",
          position: "Associate Developer",
          descp:
            "Collaborating with a team on React.js projects, executing various functionalities across multiple initiatives, and delivering production-ready code. Emphasizing SEO considerations to prioritize performance.",
          techs: [
            "JavaScript",
            "jQuery",
            "Scss",
            "Bootstrap",
            "HTML 5",
            "Css 3",
            "Drupal",
            "Shopify",
          ],
        },
      ],
    },
    {
      company: "Velocity Consultancy",
      periods: [
        {
          year: "2021 - 2022",
          position: "Web Developer",
          descp:
            "Executing WordPress projects involving custom themes and premium themes, incorporating functionalities based on client specifications. Utilizing primarily PHP, HTML, CSS, and JS languages. Additionally, providing guidance to teammates to enhance their comprehension of UI requirements.",
          techs: [
            "Wordpress",
            "JavaScript",
            "jQuery",
            "Bootstrap",
            "HTML 5",
            "Css 3",
            "PHP",
          ],
        },
      ],
    },
  ];

  return (
    <main>
      {/* <div className="focus"></div>
      <FocusComponent /> */}
      <div className="container">
        <div className="left-block block">
          <h1 className="name">Pratik Keluskar</h1>
          <p className="jd">Developer at Interactive Avenues</p>
          <p className="short-descp">
            I build pixel-perfect, accessible sites for the web and beyond.
          </p>
          <div className="sub-links">
            <ul>
              <li>
                <a
                  onClick={() => scrolltoHash("about", "aboutLink")}
                  className={`links ${activeSection === "about" ? "active" : ""}`}
                  id="aboutLink"
                >
                  <span className="line"></span>About
                </a>
              </li>
              <li>
                <a
                  onClick={() => scrolltoHash("experience", "expLink")}
                  className={`links ${activeSection === "experience" ? "active" : ""}`}
                  id="expLink"
                >
                  <span className="line"></span>Experience
                </a>
              </li>
            </ul>
          </div>
          <div className="recentProjects">
            <h4>Recent Projects</h4>
            <div className="recent_block">
              <a href="https://honda2wheelersindia.com/" className="first_honda" target="_blank">
                <Image
                  src={HondaLogo}
                  width={100}
                  height={100}
                  className="img-fluid"
                  alt=""
                />
              </a>

              <a href="#">
                <Image
                  src={CaliperLogo}
                  width={100}
                  height={100}
                  className="img-fluid"
                  alt=""
                />
              </a>

              <a href="https://honda2wheelersindia.com/" target="_blank">
                <Image
                  src={BobLogo}
                  width={100}
                  height={100}
                  className="img-fluid"
                  alt=""
                />
              </a>

              <a href="http://actcorp.in/" className="actLogo" target="_blank">
                <Image
                  src={ActLogo}
                  width={100}
                  height={100}
                  className="img-fluid"
                  alt=""
                />
              </a>
            </div>

            <Link href="/Projects" className="links" id="projLink">
              <span className="line"></span>View More Projects <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"    width="15px" height="15px" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path></svg>
            </Link>
          </div>
          <Downloads />
        </div>
        <div className="right-block block">
          <div className="sm-right-block" id="about">
            <div className="mob-sticky">
              <h3>About</h3>
            </div>
            <p className="text">
              I hold an MScIT post-graduate degree, which I successfully
              completed in 2020. Following my education, I secured a position as
              a Web Developer at{" "}
              <a
                href="https://www.velocityconsultancy.com/"
                target="_blank"
                className="link"
              >
                Velocity Consultancy
              </a>{" "}
              , where I gained practical experience in HTML, CSS, JavaScript,
              and WordPress. Over the course of one year, I honed my skills and
              contributed to the development of various web projects.
            </p>
            <p className="text">
              Subsequently, I transitioned to{" "}
              <a
                href="https://www.interactiveavenues.com/Interactive"
                target="_blank"
                className="link"
              >
                Interactive Avenues
              </a>{" "}
              as an Associate Developer, further advancing my expertise. Working
              collaboratively on diverse projects, my focus expanded to include
              advanced JavaScript, jQuery, and React, with a specialization in
              Next.js. I actively participated in delivering visually appealing
              websites that prioritize simplicity and maintain high SEO scores.
            </p>
            <p className="text">
              Beyond my professional endeavors, I have a passion for cricket and
              enjoy spending time with friends during my leisure.
            </p>
          </div>
          <div className="sm-right-block" id="experience">
            <div className="mob-sticky">
              <h3>Experience</h3>
            </div>
            <Experience experiences={experiences} />
          </div>
        </div>
      </div>
      {/* <div className="projects-box">
        <Link href="/Projects">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="40"
            viewBox="0 -960 960 960"
            width="40"
          >
            <path d="m656-120-56-56 63-64-63-63 56-57 64 64 63-64 57 57-64 63 64 64-57 56-63-63-64 63Zm-416-80q17 0 28.5-11.5T280-240q0-17-11.5-28.5T240-280q-17 0-28.5 11.5T200-240q0 17 11.5 28.5T240-200Zm0 80q-50 0-85-35t-35-85q0-50 35-85t85-35q37 0 67.5 20.5T352-284q39-11 63.5-43t24.5-73v-160q0-83 58.5-141.5T640-760h46l-63-63 57-57 160 160-160 160-57-56 63-64h-46q-50 0-85 35t-35 85v160q0 73-47 128.5T354-203q-12 37-43.5 60T240-120Zm-64-480-56-56 63-64-63-63 56-57 64 64 63-64 57 57-64 63 64 64-57 56-63-63-64 63Z" />
          </svg>
        </Link>
        <span className="hover">
          Checkout <span className="d-inline-block">Projects</span>
        </span>
      </div> */}
    </main>
  );
}
