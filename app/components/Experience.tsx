const Experience = (props: any) => {
  return (
    <>
      {props.experiences.map((company: any, companyIndex: any) => (
       
        <div key={companyIndex} className="company-block">
          <h3 className="company-name">{company.company}</h3>
          {company.periods.map((period: any, periodIndex: any) => (
            <div key={periodIndex} className="experienceblock">
              <div className="yr-exp">{period.year}</div>
              <div className="det-exp">
                <h3 className="pos">
                  {period.position}
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 20 20"    
                    width="15px" 
                    height="15px" 
                    fill="currentColor" 
                    className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" 
                    aria-hidden="true"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" 
                      clipRule="evenodd"
                    />
                  </svg>
                </h3>
                <p className="pos-descp">{period.descp}</p>
                <ul className="techs">
                  {period.techs.map((tech: any, techIndex: any) => (
                    <li key={techIndex} className="singleTech">
                      <span>{tech}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

export default Experience;