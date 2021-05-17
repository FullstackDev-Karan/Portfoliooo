import React from 'react';
import './index.css';

function Card(props) {
    return (
        <div>
           <div className="card" style={{ width: '18rem'}}>
              <img src={props.img} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.desc}</p>
                <a href=" " className="btn btn-primary">View Project</a>
              </div>
            </div>
        </div>
    )
}

export default Card
