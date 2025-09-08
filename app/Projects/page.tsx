import Link from "@/node_modules/next/link";
import Projects from "../components/Projects";
import Bob from "../assets/bob-cards.png";
import portal from "../assets/act-portal.png";
import iages from "../assets/iages.png";
import ralson from "../assets/ralson.png";
import ralco from "../assets/ralco.png";
import Mt from "../assets/mt.png";
import ACT from "../assets/act.png";
import Zod from "../assets/zod.png";
import Duracoat from "../assets/duracoat.png";
import Honda from "../assets/honda.png";
import Caliper from "../assets/caliper.png";

const page = () => {
  return (
    <>
      <div className="container">
        <div className="blockPro">
          <Link href="/" className="back-link">
            <p className="back">
              <svg
                width="21px"
                height="21px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Pratik Keluskar
            </p>
          </Link>

          <div className="heading-row">
            <h1 className="name">All Projects</h1>
            <Link href="/All-Projects" className="link explore-more">
              Explore more projects
            </Link>
          </div>
          <div className="sm-right-block" id="projects">
            <Projects
              img={Honda}
              name="Honda"
              descp="Involvement in building reusable components and dynamic pages using Next.js, Sitecore, and Supabase. Played a key role in form development and collaborated closely with the Honda client team to align on requirements and delivery."
              href="https://honda2wheelersindia.com/"
            />
            <Projects
              img={Caliper}
              name="Caliper Tool"
              descp="Led the end-to-end development of the project from scratch in Next.js. Coordinated with Java teams for API integration and managed the full delivery lifecycle. The tool was built as a client-facing platform for ad generation purposes."
            />

            <Projects
              img={Bob}
              name="BOB Financial"
              descp="Involvement in new UI and functionality for filtering data, creation of new pages, and ensuring deployment at proper times."
              href="https://www.bobcard.co.in/"
            />
            <Projects
              img={portal}
              name="ACT Upgrade Portal"
              descp="Developed an Angular app from scratch for upgrading internet packages for ACT, incorporating various functionalities and integrating payment processing through BillDesk."
            />
            <Projects
              img={iages}
              name="World Gold council"
              descp="Building Next application from scratch for World Gold Council "
            />
            <Projects img={ralco} name="Ralco Tyres" descp="" href="https://www.ralcotyres.com/" />
            <Projects img={ralson} name="Ralson Tyres" descp="" href="https://ralson.com/" />
            <Projects
              img={Mt}
              name="Mahindra Tractor"
              descp="Contributed to the development of UI components for the project, aiding the team in completing the project ahead of schedule. "
              href="https://www.mahindratractor.com/"
            />
            {/* <Projects
              img={ACT}
              name="ACT"
              descp="Developed the homepage for a website, incorporating diverse functionalities. Additionally, played a key role in implementing Ajax calls and backend functionalities within the Drupal framework. "
            /> */}
            {/* <Projects
              img={Zod}
              name="Zodiac Clothing"
              descp="The primary objective of this project was to enhance the SEO score, which saw significant improvement during my involvement. Additionally, I contributed to establishing the fundamental UI/UX structure across the entire website."
            /> */}
            {/* <Projects
              img={Duracoat}
              name="Duracoat"
              descp="Contributed to the development of UI components for the project, aiding the team in completing the project ahead of schedule."
            /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
