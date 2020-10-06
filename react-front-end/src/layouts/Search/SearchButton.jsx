import React from "react";

function SearchButton(props) {
  return (
    <>
      <button Link className={"ui purple button"} onClick={props.handleSubmit}>
        <i className="icon search"></i>
        Search
      </button>
    </>
  );
}

export default SearchButton;
