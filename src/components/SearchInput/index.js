import React from "react";
import './style.scss';
/**
 * SearchInput component
 * 
 * This component renders a text input and a submit button for searching.
 * 
 * @param {Object} props - The component props.
 * @param {Function} props.handleSearch - The function to handle the search input change.
 * @param {Function} props.handleSubmit - The function to handle the submit button click.
 * @param {string} props.searchItem - The current search input value.
 * @param {boolean} props.showError - Flag to show or hide the error message.
 * 
 * @returns {JSX.Element} The rendered SearchInput component.
 */
const SearchInput = ({ handleSearch, handleSubmit, searchItem, showError }) => {
  return (
    // The container div with the class 'col-lg-6 offset-3 searchContainer'
    <div className="col-lg-6 offset-3 searchContainer">

      {/* Show the error message if showError is true */}
      {showError && <div className="errorText">Please select a title !!</div>}

      {/* The search input with the class 'col-9 searchBox' and placeholder 'Enter search term' */}
      <input
        type="text"
        className="col-9 searchBox"
        placeholder="Enter search term"
        value={searchItem}
        onChange={(e) => handleSearch(e.target.value)}
      />

      {/* The submit button with the class 'col-3 searchButton' */}
      <span className="col-3 searchButton" onClick={handleSubmit}>
        Submit
      </span>
    </div>
  );
};

export default SearchInput;
