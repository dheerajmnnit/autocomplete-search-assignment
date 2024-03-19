import React from "react";
import CardItem from "../CardItem";
import './style.scss';

/**
 * Renders a container for a list of cards.
 *
 * @param {Object} props - The properties object.
 * @param {Array} props.card - The array of card objects.
 * @return {JSX.Element} The rendered container.
 */
const CardContainer = ({ card }) => {
  // Render a div containing a row of CardItems, one for each item in the card array
  return (
    <div className="row card-container ">
      {/* Map over each item in the card array and render a CardItem component */}
      {card.map((item, index) => (
        <CardItem key={index} item={item} />
      ))}
    </div>
  );
};
export default CardContainer;