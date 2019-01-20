import React from "react";

const SearchForm = props => {
  return (
    <form>
      <div className="form-group" style={{ textAlign: "center" }}>
        <input style={{ textAlign: "left" }}
          className="form-control"
          id="search"
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
        />
        <br />
        <button onClick={props.handleFormSubmit} className="btn btn-primary"> Search </button>
        <div>
          <a href="/savedbooks" style={{ color: "Blue", fontSize: "20px" }}>Saved Books </a>
        </div>
      </div>
    </form>
  );
}

export default SearchForm;
