import React from 'react';
import './paragraph.css'

export default function paragraph(props){
    return(
  
        <div className="paragraph">
           <header class="boldWords">{props.title}</header>
           <br></br>
           <p>{props.paragraph}</p>
        </div>
      
    )
}