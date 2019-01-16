import React from "react";

const Results = props =>

  <div className="container">
    <li className="list-group-item">
      <h4>
        <span>{props.title} </span>
          <a href={props.url}><button className="btn btn-default ">View Article</button> </a>
          <button className="btn btn-default" onClick={() => props.handleSaveButton(props._id)}><span class="glyphicon glyphicon-search"></span> Save </button>
      </h4>
    </li>
  </div>

export default Results;
