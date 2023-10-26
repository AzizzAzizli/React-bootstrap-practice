import React, { useState } from 'react'

export const ReadMoreButton = (props) => {
    const [readMore, setReadMore] = useState(false);

    function uppercase(str) {
      return str.split("")[0].toUpperCase() + str.slice(1);
    }
    function toggleReadMore() {
        setReadMore((prevReadMore) => !prevReadMore);
      }
  return (
    <>

    {readMore && (
          <>
            <p className="card-text text-light">{uppercase(props.Type)}</p>
            <p className="card-text text-light">{props.Year}</p>
            <p className="card-text text-light">{"IMDB id: " + props.imdbID}</p>
          </>
        )}

   <button
          onClick={toggleReadMore}
          type="button"
          className="btn btn-primary"
        >
          {readMore ? "Read Less" : "Read More"}
        </button>
    </>
  )
}
