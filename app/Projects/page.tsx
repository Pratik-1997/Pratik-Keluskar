import Link from "@/node_modules/next/link"
import Projectslist from "../components/Projectslist"

const page = () => {
  return (
    <>
        <div className="container">
            <div className="blockPro">
              <Link href="/" className="back-link"><p className="back"><svg width="21px" height="21px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"  aria-hidden="true"><path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd"></path></svg>Pratik Keluskar</p></Link>
              
            <h1 className='name'>All Projects</h1>
            <Projectslist/>
            </div>
            
        </div>
    </>
  )
}

export default page