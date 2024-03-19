import React, { useRef, useEffect } from "react";
import './style.scss'; // Import your SCSS file

const CardItem = ({ item }) => {
    // Destructure the item object to get the title, summary, and author
    const { title, summary, author } = item;

    // Create a reference to a DOM element using the useRef hook
    const summaryRef = useRef(null);

    // Use the useEffect hook to add or remove a 'scrollable' class to the summary wrapper div
    useEffect(() => {
        // Check if the summary content overflows
        const isOverflowing = summaryRef.current.scrollHeight > summaryRef.current.clientHeight;

        // Add or remove the 'scrollable' class based on overflow
        if (isOverflowing) {
            summaryRef.current.classList.add('scrollable');
        } else {
            summaryRef.current.classList.remove('scrollable');
        }
    }, [summary]);

    return (
        <div className="col-md-3 col-sm-6">
            <div className="card h-100 card-zoom"> {/* Ensure all cards have the same height */}
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{author}</h6>
                    <div ref={summaryRef} className="summary-wrapper flex-grow-1">
                        <p className="card-text">{summary}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardItem;
