import React, { Component } from 'react'

const Newsitem = (props)=> {
  
    let {title,description,imageurl,newsurl} = props
    return (
      <div className='my-3'> 
        <div className="card" style={{width: "18rem"}}>
  <img src={!imageurl?"https://images.unsplash.com/photo-1618424181497-157f25b6ddd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wJTIwY29tcHV0ZXJ8ZW58MHx8MHx8&w=1000&q=80":imageurl} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href={newsurl} className="btn btn-primary">Read More</a>
  </div>
</div>
      </div>
    )
  }
export default Newsitem
