import React from "react";
import ShopCard from "./components/ShopCard";
import { VIEW_MODULE } from "./utils";
import CardsView from "./components/CardsView";
import ListView from "./components/ListView";
import ShopItem from "./components/ShopItem";


export default class App extends React.Component {
  render() {
    return (
      <div>
        <div className="toolbar">
          <div
            className="switch-view"
            onClick={() => console.log("сменился тип вывода")}
          >
            <i className="material-icons" style={{ fontSize: 42 }}>
              {VIEW_MODULE}
            </i>
          </div>
        </div>
        {this.renderLayout(true)}
      </div>
    );
  }

  renderLayout(cardView) {
    const { layout, products } = this.props;

    const cards = this.getShopItems(products, cardView);

    if (cardView) {
      return <CardsView layout={layout} cards={cards} />;
    }
    return <ListView items={cards} />;
  }

  getShopItems(products, cardView) {
    if (products) {
      return products.map(product => {
        let cardProps = {
          title: product.name,
          caption: product.color,
          img: product.img,
          price: `$${product.price}`
        };
        if (cardView) {
          return <ShopCard {...cardProps} />;
        }
        return <ShopItem {...cardProps} />;
      });
    }
    return null;
  }
}
