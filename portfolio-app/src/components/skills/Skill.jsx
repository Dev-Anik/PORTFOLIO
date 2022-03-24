import React from "react";
import './skill.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Skill = () => {
  return <>
  <div className="skills box" id="third">
  <h5>Skills I Have</h5>
        <h2>My Skills</h2>


{/* grid components */}

<div className="skill-grid">

{/* card-1 */}
<div className="skill-card">
<h3>Frontend Development</h3>


<div className="skill-card-flex">
<div className="item-list">
<article>
<BsPatchCheckFill className="icon"/>
<div className="item">
<h4>HTML</h4>
<small>Experienced</small>
</div>
</article>


<article>
<BsPatchCheckFill className="icon"/>
<div className="item">
<h4>CSS</h4>
<small>Experienced</small>
</div>
</article>



<article>
<BsPatchCheckFill className="icon"/>
<div className="item">
<h4>Bootstrap</h4>
<small>Experienced</small>
</div>
</article>
</div>





<div className="item-list">

<article>
<BsPatchCheckFill className="icon"/>
<div className="item">
<h4>Vanilla Js</h4>
<small>Experienced</small>
</div>
</article>



<article>
<BsPatchCheckFill className="icon"/>
<div className="item">
<h4>React Js</h4>
<small>Experienced</small>
</div>
</article>



</div>

</div>
</div>


{/* card-2  BACKEND*/}
<div className="skill-card">
<h3>Backend Development</h3>  
<div className="skill-card-flex">
<div className="item-list">
<article>
<BsPatchCheckFill className="icon"/>
<div className="item">
<h4>PHP</h4>
<small>Intermediate</small>
</div>
</article>


<article>
<BsPatchCheckFill className="icon"/>
<div className="item">
<h4>Laravel</h4>
<small>Intermediate</small>
</div>
</article>
</div>


<div className="item-list">
<article>
<BsPatchCheckFill className="icon"/>
<div className="item">
<h4>MySql</h4>
<small>Intermediate</small>
</div>
</article>
</div>
</div>



</div>

</div>
        </div>
 
  </>;
};

export default Skill;
