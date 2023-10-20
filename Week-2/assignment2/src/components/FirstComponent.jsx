import React from 'react'
import foto from '../assets/pokemon.jpg'
export default function FirstComponent(props) {
    const {title,data,text,number}=props;
  return (
    <div>
        <div className="card m-4" style={{ width: "18rem" }}>
            <img src={foto} className="card-img-top"/>
            <div className="card-body">
                <h5 className="card-title">{title} {number}</h5>
                <p className="card-text">
                    {` Name: ${data.name} Type: ${data.type} Number: ${data.number}`}
                </p>
                <a href="#" className="btn btn-primary">
                    {text}
                </a>
            </div>
        </div>

    </div>
  )
}
