import './Faq.css'
import { AiOutlinePlus } from "react-icons/ai";
import { useState } from 'react';
import { MdOutlineCancelPresentation } from "react-icons/md";
const Faq=({title,description})=>{

    const [showcontent,setShowContent] = useState(false)
    return (
      <div className="container">
        <div className="show-content">
          <h4>{title}</h4>
          <button className="btn" onClick={() => setShowContent(!showcontent)}>
            {showcontent ? <MdOutlineCancelPresentation /> : <AiOutlinePlus />}
          </button>
        </div>
        <div className="info-content {showcontent ? 'show' : ''}">
          {showcontent && <p>{description}</p>}
        </div>
      </div>
    );

}
export default Faq




    