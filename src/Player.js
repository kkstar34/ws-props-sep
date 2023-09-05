import React from 'react'

function Player(props) {
  return (
    <>
        <div className="card" >
            <img src={props.player.img_path} className="card-img-top img" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.player.name}</h5>
                <p className="card-text">{props.player.post} and {props.player.age}.</p>
                <a href="#" className="btn btn-primary">{props.player.performance}</a>
            </div>
        </div>
    </>
  )
}

export default Player;