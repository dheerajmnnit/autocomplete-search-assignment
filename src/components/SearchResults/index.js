import React from "react";
import './style.scss';
/**
 * SearchResults component
 * 
 * This component renders a list of search results based on the provided
 * `searchResults` array and `addToList` function. Each result item is a clickable
 * list item which, when clicked, invokes the `addToList` function with the
 * result's `id` and `title` as arguments.
 * 
 * @param {Object} props - The component props.
 * @param {Array} props.searchResults - The array of search results.
 * @param {Function} props.addToList - The function to add a result to the list.
 * @returns {JSX.Element} The rendered SearchResults component.
 */
const SearchResults = ({ searchResults, addToList }) => {
    // Render the search results list
    return (
        <div className="col-6 offset-3 resultContainer">
            {/* Render the unordered list */}
            <ul className="col-9 ul-list">
                {/* Map through the search results array */}
                {searchResults?.map((result) => {
                    // Destructure the `id` and `title` properties from each result
                    const { id, title } = result;
                    
                    // Render each result as a clickable list item
                    return (
                        <li
                            // Attach a click event handler
                            onClick={() => {
                                // Invoke the `addToList` function with the result's `id` and `title`
                                addToList(id, title);
                            }}
                            // Use the result's `id` as the key
                            key={id}
                            // Apply the 'li-list' class to the list item
                            className="li-list"
                        >
                            {/* Render the result's `id` and `title` */}
                            {result.id} - {result.title}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default SearchResults;
