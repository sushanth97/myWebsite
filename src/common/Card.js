import React from 'react';

export default function Card(props) {
    return (
        <div className="card-shadow border mt-5 mx-5 p-3" onClick={() => {
            props.handleClick(props.value);
        }}>
            <h4>{props.title}</h4>
            <div className="pt-3">
                <div className="float-end">{props.read} mins read</div>
                <span>posted on: {props.date}</span>
            </div>    
        </div>
    );
}