import React from 'react';
import FontAwesome from 'react-fontawesome';
import style from 'styled-components'


const AddToCart = () => (
  <AddCartMain>
    <Button className = "add-cart" >Add To Cart</Button>
    <Button className = "heart">
      <FontAwesome name='heart f004' />
    </Button>    
  </AddCartMain>
);

const AddCartMain = style.div `
	display: flex
    justify-content: space-between;
    margin: 20px 0px 20px 0px;
`

const Button = style.button `
    text-transform: uppercase;
    font-size: 25px;
    background-color: black;
    color: white;
    padding: 10px;
    opacity: 1;
    &:hover{
      opacity: .5;
    }
`




export default AddToCart;