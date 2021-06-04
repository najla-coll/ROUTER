import React from 'react'
import {Link,Route} from 'react-router-dom'



const Detail = ({post}) => {

         return (
    
            <div>
            <h2>{post.des}</h2>
            {post.video}
            </div>
    
    )
}

export default Detail
