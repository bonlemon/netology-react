import React from "react";

const CardsView = props => {
  const { layout, cards } = props;
  if (layout) {
    const renderCards = cards => {
      return cards.map((card, i) => {
        return <div key={`card-${i}`}>{card}</div>;
      });
    };
    return <div className="row">{renderCards(cards)}</div>;
  }
  return null;
};
export default CardsView;
