import React from "react";
import { ReadMoreButton } from "../readMoreButton";
import { FavButton } from "../favButton";
import "./Card.css"
export const Card = (props) => {
  console.log(props);


 

  return (
    <div className="p-1 cardpostition " style={{ width: "18rem" }}>
     
      <img
        src={props.Poster}
        style={{ height: "350px" }}
        className="card-img-top"
      />
       <FavButton/>
      <div className="card-body bg-secondary rounded-1 p-2">
        <p className="card-text text-light">{props.Title}</p>
     <ReadMoreButton key={"read-more"+props.imdbID} {...props}/>

    
      </div>
    </div>
  );
};
