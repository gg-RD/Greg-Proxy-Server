import React from 'react';
import styled from 'styled-components';
import ShoeItem from './ShoeItem.jsx';

const FlexContainer = styled.div `
  display: flex;
  flex-flow:column;
  float: left;
`

//hi
const FlexContainer1 = styled.div `
  display: flex;
  flex-flow:row;
  float: left;
  height: 450px;
`

export default class ShoeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show_remaining: false,
    };
  }

  render(){

    var flexStyle1 = !this.state.show_remaining?{display:'none'}:{
      display: 'flex',
      flow:'row',
      float: 'left',
      height: '450px'
      };

    return(
      <FlexContainer className = 'flex-container'>
            <FlexContainer1 id ='flex-container1'>
            {this.props.list1.map((i) =>
              <ShoeItem key={i.id} item={i} id='article' updateCurrentInstagram = {this.props.updateCurrentInstagram.bind(this)}/>
            )}
          </FlexContainer1>
          <div style = {flexStyle1}
            >
            {this.props.list2.map((i) =>
              <ShoeItem key={i.id} item={i} id='article' updateCurrentInstagram = {this.props.updateCurrentInstagram.bind(this)}/>
            )}
          </div>
            <div style = {flexStyle1}>
            {this.props.list3.map((i) =>
              <ShoeItem key={i.id} item={i} id='article' updateCurrentInstagram = {this.props.updateCurrentInstagram.bind(this)}/>
            )}
          </div>
        <div className='show-remaining' style={{
          float:'left',
          'fontSize': '14px',
          'paddingRight': '10px'}} onClick={() => {
          var newState = !this.state.show_remaining;
          this.setState({show_remaining:newState});
        }}>
          {!this.state.show_remaining ?
            <div className='show-remaining_underline' style={{
              'float':'left',
              'fontSize': '16px',
              'textDecoration': 'underline',
              'marginTop': '50px',
            }}>
              <a>Load More ({this.props.list2.length +
              this.props.list3.length})</a><a>∨</a>
            </div>
            :
            <div className='show-remaining_underline' style={{
              'float':'left',
              'fontSize': '16px',
              'textDecoration': 'underline',
              'marginTop': '50px',
            }}>
              <a>Hide</a> <a>∧</a>
            </div>
          }
        </div>
    </FlexContainer>);
  };

}
