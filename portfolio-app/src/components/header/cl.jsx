import React from 'react'
import './header.css'
import CV from '../../assets/auni-cv.pdf'
const cl = () => {
  return (
   <>
   <div className="cv">
       <ul>
           <li>
               <a href={CV} download><button>Download CV</button></a>      
           </li>
           <li>
              <button> Let's Talk</button>
           </li>
       </ul>
       </div>
   </>
  )
}

export default cl