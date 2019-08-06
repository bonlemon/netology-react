import React from "react";
import ShopCard from "./components/ShopCard";
import { VIEW_MODULE, VIEW_LIST } from "./utils";
import CardsView from "./components/CardsView";
import ListView from "./components/ListView";
import ShopItem from "./components/ShopItem";

export default class Store extends React.Component {
  state = {
    mode: VIEW_MODULE
  };
  handleOnChangeMode = () => {
    this.setState(state => {
      const mode = state.mode === VIEW_MODULE ? VIEW_LIST : VIEW_MODULE;
      return { mode };
    });
  };
  render() {
    const { mode } = this.state;
    return (
      <div>
        <div className="toolbar">
          <div className="switch-view" onClick={this.handleOnChangeMode}>
            <i className="material-icons" style={{ fontSize: 42 }}>
              {mode}
            </i>
          </div>
        </div>
        {this.renderLayout(mode)}
      </div>
    );
  }

  renderLayout(cardView) {
    const { layout, products } = this.props;

    const cards = this.getShopItems(products, cardView);

    if (cardView === VIEW_LIST) {
      return <ListView items={cards} />;
    }
    return <CardsView layout={layout} cards={cards} />;
  }

  getShopItems(products, cardView) {
    if (products) {
      return products.map(({ name, color, img, price }) => {
        let cardProps = {
          title: name,
          caption: color,
          img: img,
          price: `$${price}`
        };
        if (cardView === VIEW_LIST) {
          return <ShopItem {...cardProps} />;
        }
        return <ShopCard {...cardProps} />;
      });
    }
    return null;
  }
}
