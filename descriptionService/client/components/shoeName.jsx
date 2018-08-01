import React from 'react';
import style from 'styled-components'


const ShoeName = (props) => (
  <div >

   <Price>
    <h6>{props.data[0].shoe_cat}</h6>
    <h6>{props.data[0].shoe_price}</h6>
   </Price>
    <ShoeNameStyle className = "shoe-name">{props.data[0].shoe_name}</ShoeNameStyle> 
  </div>
  );

const Price = style.div `
    display: flex;
    justify-content: space-between;
    margin-right: 10px;
    margin-bottom: 20px;
    font-size: 20px;

`

const ShoeNameStyle = style.h4 `
	font-size: 30px;
`


export default ShoeName;