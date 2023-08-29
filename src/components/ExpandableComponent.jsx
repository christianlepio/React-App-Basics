import React, { useCallback, useState } from 'react'

const ExpandableComponent = ({children, maxChars}) => {
    const [showFullText, setshowFullText] = useState(false);
    const text = showFullText ? children : children.substring(0, maxChars);
    const btnClassName = showFullText ? 'btn-danger' : 'btn-success';

  return (
    <>
        <div className='container border border-primary p-4'>
            <p className='text-start'>{text.length <= maxChars ? text+'........' : children}</p>
            <div className='row'>
                <div className="col text-start">
                    <button 
                        className={'btn ' + btnClassName} 
                        onClick={()=>setshowFullText((prevState)=>!prevState)} 
                    >
                        {showFullText?'Show Less':'Show More'}
                    </button>
                </div>
            </div>
        </div>
    </>
  )
}

export default ExpandableComponent