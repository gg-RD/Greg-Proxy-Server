import React from "react";
import style from 'styled-components'



const ShoeDescription = (props) => {
  return (
    <div>
     <DescriptionMain>{props.data[0].shoe_descpription}</DescriptionMain>
     <div>Shown: {props.data[0].shoe_shown}</div>
     <div>Style: {props.data[0].shoe_style}</div>

    </div>
  );
};

 const DescriptionMain = style.div `
    margin-bottom: 80px;

 `


export default ShoeDescription;