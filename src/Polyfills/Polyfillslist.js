import React, { useState } from 'react';
import Card from './../common/Card';
import ArrayMap from './ArrayMap';

export default function Blogslist() {
  let [showList, updateList] = useState(true);
  let [ItemDetails, updateItemDetails] = useState(null);
  function handleClick(value) {
    updateList(false);
    updateItemDetails(value);
  };
  let PolyfillComponent =  ArrayMap;
  if (showList) {
    PolyfillComponent = ItemDetails;
  }
  return ( 
    <div>
      { showList ? <Card title="Polyfills for Array Map" read="10" date="01.04.2022" handleClick={handleClick} value='ArrayMap'/>
                 : <PolyfillComponent/>
      }          
    </div>
  )
}