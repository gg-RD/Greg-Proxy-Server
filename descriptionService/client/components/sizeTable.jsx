import React from 'react';
import style from 'styled-components'


class SizeTable extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      backGroundBlack: false
    }
  }

  render(){

    return (
      <Table>
       <tbody>
        <tr>
          <Cell>7</Cell>
          <Cell>7.5</Cell>
          <Cell>8</Cell>
          <Cell>8.5</Cell>      
        </tr>
        <tr>
          <Cell>9</Cell>
          <Cell>9.5</Cell>
          <Cell>10</Cell>
          <Cell>10.5</Cell>
        </tr>
        <tr>
          <Cell>11</Cell>
          <Cell>11.5</Cell>
          <Cell>12</Cell>
          <Cell>12.5</Cell>       
      </tr>
      </tbody>
     </Table>
      )
  }

}

const Table = style.table `
    border: 1px solid rgba(118, 121, 127, 0.5);
    table-layout: fixed;
    width: 20em;
    margin: 20px 20px 20px 0px;
`

const Cell = style.td `
    border:  1px solid rgba(118, 121, 127, 0.5);
    text-align: center;
    width: 10px;
    font-size: 25px;
    padding: 10px;

    &:hover{
      border: 1px solid black;
      opacity: 1;
    }
`



export default SizeTable;








