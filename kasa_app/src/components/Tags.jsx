import React from 'react';

function Tags({tagName}){
        return(
                <div className='tag'>
                       <span className='tag__name'>{tagName}</span> 
                </div>
        )
}

export default Tags;