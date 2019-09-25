import React from "react";
import "./collection-prievew.styles.scss";
import CollectionItem from "../collection-item/collection-item.component";

// ceep in mind this functions call gets called evry time this Component gets rendered
const CollectionPrievew = ({ title, items }) => (
  <div className='collection-preview'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>
      {items
        .filter((item, idx) => idx < 4)
        .map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default CollectionPrievew;
