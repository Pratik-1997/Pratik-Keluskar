"use client";
import { useState } from "react";

const Projectslist = () => {
  const list = [
    {
      id: 1,
      year: "2023",
      name: "Mahindra Tractor",
      made: "Interactive Avenues",
      techs: ["jQuery", "Drupal"],
      link: "https://mahindratractor.com/",
    },
    {
      id: 2,
      year: "2023",
      name: "ACT",
      made: "Interactive Avenues",
      techs: ["Html", "Css", "jQuery"],
      link: "https://actcorp.in/",
    },
    {
      id: 3,
      year: "2022",
      name: "Bayclub",
      made: "Interactive Avenues",
      techs: ["Gsap"],
      link: " https://www.bayclub.in//",
    },

    {
      id: 4,
      year: "2022",
      name: "BOB Financial",
      made: "Interactive Avenues",
      techs: ["Next"],
      link: "https://bobcard.co.in/",
    },
    {
      id: 5,
      year: "2023",
      name: "Duracoat",
      made: "Interactive Avenues",
      techs: ["Html", "Scss", "jQuery"],
      link: "https://www.duracoat.com/",
    },
    {
      id: 6,
      year: "2023",
      name: "The Pink Foundry",
      made: "Interactive Avenues",
      techs: ["Shopify"],
      link: "https://www.thepinkfoundry.com/",
    },
    {
      id: 7,
      year: "2022",
      name: "AmazonxIa Portal",
      made: "Interactive Avenues",
      techs: ["React"],
      link: "https://amazonportal.interactiveavenues.in/home",
    },
    // {
    //   id: 8,
    //   year: "2022",
    //   name: "Lyfe Hotel",
    //   made: "Interactive Avenues",
    //   techs: ["Html", "Css", "jQuery"],
    //   link: "https://www.lyfehotels.com/",
    // },
    {
      id: 9,
      year: "2022",
      name: "Zodiac",
      made: "Interactive Avenues",
      techs: ["Html", "Css", "jQuery", "Magento"],
      link: "https://zodiaconline.com/",
    },
    {
      id: 10,
      year: "2022",
      name: "Voltas Beko",
      made: "Interactive Avenues",
      techs: ["Html", "Css", "jQuery"],
      link: "https://www.voltasbeko.com/",
    },
    {
      id: 11,
      year: "2022",
      name: "Bajaj",
      made: "Interactive Avenues",
      techs: ["Html", "Css", "jQuery"],
      link: "https://www.bajajauto.com/",
    },
    {
      id: 12,
      year: "2022",
      name: "Accelus Tires",
      made: "Interactive Avenues",
      techs: ["Html", "Css", "jQuery"],
      link: "https://accelustires.com/",
    },

    {
      id: 13,
      year: "2021",
      name: "Khashan Law",
      made: "Velocity Consultancy",
      techs: ["Wordpress"],
      link: "https://khashanlaw.com/",
    },
    {
      id: 14,
      year: "2021",
      name: "Vitality Wellness",
      made: "Velocity Consultancy",
      techs: ["Wordpress"],
      link: "https://vitalitywellnessclinic.com/",
    },
    {
      id: 15,
      year: "2021",
      name: "AZ Motor Express",
      made: "Velocity Consultancy",
      techs: ["Wordpress"],
      link: "https://azmotorexpress.com/",
    },
    {
      id: 16,
      year: "2021",
      name: "Woods Plumbing",
      made: "Velocity Consultancy",
      techs: ["Wordpress"],
      link: "https://woodsplumbing.com/",
    },
  ];

  const [selectedYear, setSelectedYear] = useState(null);

  const handleYearChange = (e: any) => {
    setSelectedYear(e.target.value);
  };

  const filteredList = selectedYear
    ? list.filter((item) => item.year === selectedYear)
    : list;

  return (
    <>
      <div className="filter">
        <label htmlFor="yearFilter" className="yearFilter">Filter by Year :</label>
        <select
          id="yearFilter"
          onChange={handleYearChange}
          value={selectedYear || ""}
        >
          <option value="">All Years</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
        </select>
      </div>

      <div className="table">
        <table>
          <thead>
            <tr>
              <th className="th1">Year</th>
              <th className="th2">Project</th>
              <th className="th3">Made at</th>
              <th className="th4">Built with</th>
              <th className="th5">Link</th>
            </tr>
          </thead>
          <tbody>
            {filteredList.map((item) => (
              <tr key={item.id}>
                <td className="year-p">{item.year}</td>
                <td>{item.name}</td>
                <td>{item.made}</td>
                <td className="techno">
                  {item.techs.map((tech, index) => (
                    <span key={index}>
                      {tech}
                      {index !== item.techs.length - 1 ? "" : ""}
                    </span>
                  ))}
                </td>
                <td className="item-link">
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.link}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Projectslist;
