import React from "react";
import list from "./etsy.json";

function App() {
    console.log(list);
    return (
        <div className="item-list">
            {list.map(
                ({
                     listing_id,
                     url,
                     price,
                     MainImage,
                     title,
                     quantity,
                     currency_code
                 }) => {
                    return (
                        <div class="item" key={listing_id}>
                            <div class="item-image">
                                <a href={url}>
                                    {MainImage && <img src={MainImage.url_570xN} />}
                                </a>
                            </div>
                            <div class="item-details">
                                <p class="item-title">{title}</p>
                                <p class="item-price">{`${currency_code} ${price}`}</p>
                                <p class="item-quantity level-medium">{quantity} left</p>
                            </div>
                        </div>
                    );
                }
            )}
        </div>
    );
}

export default App;
