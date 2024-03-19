import React, { useState } from "react";
import CardContainer from "./CardContainer";
import SearchInput from "./SearchInput";
import SearchResults from "./SearchResults";

/**
 * Search component
 * @component
 * @param {Object} data - The data object containing titles, summaries and authors
 * @returns {JSX.Element} The Search component
 */
const Search = ({ data }) => {
  // State variables to store search results, search term, card array, submit button state, error state and searched ID
  const [searchResults, setSearchResults] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [cardArray] = useState([]);
  const [isSubmitDisable, setSubmitDisable] = useState(true);
  const [showError, setShowError] = useState(false);
  const [searchedId, setSearchedID] = useState("");
  const [showResults, setShowResults] = useState(false); // Initially hide search results

  /**
   * Handles the search event
   * @param {string} term - The search term
   */
  const handleSearch = (term) => {
    setSearchItem(term);
    if (term) {
      setShowResults(true); // Show search results when there's a search term
      const results = getResult(term);
      setSearchResults(results);
    } else {
      setShowResults(false); // Hide search results when the search term is cleared
      setSearchResults([]);
    }
    setSubmitDisable(true);
  };

  /**
   * Retrieves search results based on the search term
   * @param {string} searchTerm - The search term
   * @returns {Array} An array of search results
   */
  const getResult = (searchTerm) => {
    const results = data?.summaries
      ?.map((summary) => {
        const occurrences =
          summary?.summary?.toLowerCase()?.split(searchTerm?.toLowerCase())
            ?.length - 1;
        return { id: summary.id, title: data.titles[summary.id], occurrences };
      })
      .filter((result) => result.occurrences > 0);

    results?.sort((a, b) => b.occurrences - a.occurrences);
    return results;
  };

  /**
   * Adds a result to the card array.
   *
   * @param {string} id - The ID of the result.
   * @param {string} title - The title of the result.
   */
  const addToList = (id, title) => {
    /**
     * Sets the search item state with the provided title.
     */
    setSearchItem(title);

    /**
     * Sets the searched ID state with the provided ID.
     */
    setSearchedID(id);

    /**
     * Sets the submit disable state to false,
     * indicating that a result has been selected.
     */
    setSubmitDisable(false);

    /**
     * Sets the show results state to false,
     * closing the search results list.
     */
    setShowResults(false); // Close search results list when a result is selected
  };

  /**
   * Handles the submit event
   */
  const handleSubmit = () => {
    if (searchItem) {
      if (isSubmitDisable) {
        setShowError(true);
        setTimeout(() => {
          setShowError(false);
        }, 2000);
      }
      // Add the searched summary to the card array
      cardArray?.push({
        title: data.titles[searchedId],
        summary: data.summaries[searchedId].summary,
        author: data.authors[searchedId].author,
      });
      // Clear the search term and search results
      setSearchItem("");
      setSearchResults([]);
      setSubmitDisable(true);
    }
  };

  return (
    <div className="col-lg-12">
      {/* Render the SearchInput component */}
      <SearchInput
        handleSearch={handleSearch}
        handleSubmit={handleSubmit}
        searchItem={searchItem}
        showError={showError}
      />
      {/* Render the SearchResults component if showResults is true */}
      {showResults && (
        <SearchResults
          searchResults={searchResults}
          addToList={addToList}
          setShowResults={setShowResults}
        />
      )}
      {/* Render the CardContainer component */}
      <CardContainer card={cardArray} />
    </div>
  );
};
export default Search;
