import React from "react";

const BookDetail = props => {
  return (
    <span>
      <div className="col-md-4" style={{ float: "left"}}>
        <p><img alt={props.title} src={props.src} /></p>
        <p>{props.title}</p>
        <p><strong>Author(s):</strong> {props.authors}</p>
        <p><strong>Google Books Link:</strong> <a href={props.link} >{props.title}</a></p>
        <button onClick={props.handleSaveBook} className="btn btn-primary save-btn" style={{ marginBottom: "30px"}}> Save Book </button>
      </div>
      <div className="col-md-8" style={{ float: "right" }}>
        <p><strong>Description:</strong> {props.description}</p>
      </div>
      <hr style={{ clear: "both" }} />
    </span>
  );
}

export default BookDetail;
