import React, { Component } from "react";
import SHOP_DATA from "./shop.data";
import CollectionPrievew from "../../components/collection-prievew/collection-prievew.component";

class ShopPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA
    };
  }

  render() {
    const { collections } = this.state;

    return (
      <div className='shopPage'>
        {collections.map(({ id, ...theRestOfData }) => (
          <CollectionPrievew key={id} {...theRestOfData} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
