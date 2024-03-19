import React from "react";
import './Header.scss';

/**
 * Header component:
 * This is a functional component that returns a JSX element, specifically a header element.
 * The header contains a single h1 element, which displays the text "Autocomplete Search Application".
 * 
 * @return {JSX.Element} The JSX element representing the Header component.
 */
function Header() {
    // The JSX element returned by this function represents the Header component.
    // It consists of a header element with the class name 'app-header'.
    // Inside the header, there is an h1 element with the class name 'title',
    // which displays the text "Autocomplete Search Application".
    
    return (
        // The JSX element representing the Header component.
        <header className="app-header">
            {/* The h1 element displaying the title of the application. */}
            <h1 className="title">Autocomplete Search Application</h1>
        </header>
    );
}

export default Header;