import React from "react";
import './ItemList.scss';
import { Link } from "react-router-dom";

const ItemList: React.FC<{}> = () => {

  return (
    <div className='general-page-wrapper'>
      <div className='item-list'>
        <h1>Items</h1>
        <div className='item-list__list-of-items'>
          <Link to={`/items/equipment`}>
            Equipment               
          </Link>
          <Link to={`/items/consumables`}>
            Consumables               
          </Link>  
          <Link to={`/items/attachments`}>
            Attachments               
          </Link>   
          <Link to={`/items/grenades`}>
            Grenades               
          </Link>   
        </div>
      </div>
    </div>
  );
};

export default ItemList;
