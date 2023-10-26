import React, { useState } from "react";
import "../favButton/FavButton.css";
export const FavButton = () => {
  const [isfav, setisfav] = useState(false);
  function setfav() {
    setisfav((prev) => !prev);
  }
  return (
    <>
      <button
        onClick={setfav}
        className={`btn  ${
          isfav ? "btn-danger " : "btn-success"
        }  favposition `}
      >
        {isfav ? "Remove fav" : "Add fav"}
      </button>
    </>
  );
};
