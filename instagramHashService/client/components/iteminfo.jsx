import React from 'react';
import axios from 'axios';
import ShoeList from './ShoeList.jsx'
import ShoeItem from './ShoeItem.jsx'
import ShoeInstagramItem from './ShoeInstagramItem.jsx';
import Arrow from './Arrow.jsx';
import styled from 'styled-components';


const InfoStyle = styled.div  `
  float: 'left',
  width: '35%',
  height: '35%',
  borderWidth: '2px',
  textAlign: 'center'
`
const Title = styled.h3 `
  font: 'Helvetica';
  float:left;
  margin-bottom: 0.5px;
  margin-right: 300px;
  font-size:18px
`
const SubTitle = styled.h5 `
  font: 'Helvetica';
  font-weight: normal;
  float:left;
  margin-right: 1000px;
  margin-bottom: 1px;
  padding-bottom: 1px;
  font-size: 16px
`
const Overlay = styled.div `
  position: fixed; /* Sit on top of the page content */
  display: none; /* Hidden by default */
  width: 100%; /* Full width (cover the whole page) */
  height: 100%; /* Full height (cover the whole page) */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5); /* Black background with opacity */
  z-index: 2; /* Specify a stack order in case you're using a different order for other elements */
  cursor: pointer; /* Add a pointer on hover */
`
const LeftArrow = styled.div `
  position:absolute;
  top: 440px;
  right: 1310px;
  color: White;
`

const RightArrow = styled.div `
  position:absolute;
  top: 440px;
  right: 530px;
  color: White;
`

export default class Info extends React.Component {
  constructor() {
    super();
    this.state = {
      insta_stories: [],
      currentInstagramIndex: 0
    };
    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
    this.updateCurrentInstagram = this.updateCurrentInstagram.bind(this);
  }

  componentDidMount(){
    this.updateInstagram();
  }

  updateCurrentInstagram(newInstagram) {
    console.log(newInstagram, 'received instagram');
    this.setState({currentInstagramIndex:newInstagram}, () => {
      console.log(this.state.currentInstagramIndex)
      console.log(this.state.currentInstagramIndex+1)
    });
}

  getShoes(){
    axios.get('/instaShoe')
    .then( (response) => {
      //console.log(response.data);
      this.setState({insta_stories:response.data})
    })
    .catch( (error) => {
      console.log(error);
    });
    }

  updateInstagram(){
    axios.post('/instaShoe')
    .then((response) => {
    this.getShoes();
    })
    .catch( (error) => {
      console.log(error);
    });
  }

  previousSlide () {
    const lastIndex = this.state.insta_stories.length - 1;
    const currentImageIndex = this.state.currentInstagramIndex;
    const shouldResetIndex = currentImageIndex === 0;
    const index =  shouldResetIndex ? lastIndex : currentImageIndex - 1;

    this.setState({
      currentInstagramIndex: index
    });
    //console.log(this.state.currentInstagramIndex);
  }

  nextSlide () {
    const lastIndex = this.state.insta_stories.length - 1;
    const currentImageIndex = this.state.currentInstagramIndex;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index =  shouldResetIndex ? 0 : currentImageIndex + 1;

    this.setState({
      currentInstagramIndex: index
    });

    //console.log('slice',this.state.insta_stories.slice(this.state.currentInstagramIndex,this.state.currentInstagramIndex+1)[0]);
  }

  render() {
    return (
      <InfoStyle>
        <Title className='title'> HOW OTHERS ARE WEARING IT </Title>
        <SubTitle style={{float:'left'}} className='subtitle'>Mention @Nike on Instagram for a chance to have your look featured.</SubTitle>
        <ShoeList
          list1={this.state.insta_stories.slice(0,2)}
          list2={this.state.insta_stories.slice(2,4)}
          list3={this.state.insta_stories.slice(4,5)}
          list={this.state.insta_stories}
          updateCurrentInstagram = {this.updateCurrentInstagram.bind(this)}
        />
        <Overlay id="overlay">
          <div className='carousel'>
            <LeftArrow id='left_arrow'>
              <Arrow
                direction="left"
                clickFunction={ this.previousSlide }
                glyph="&#9664;" />
            </LeftArrow>
            <ShoeInstagramItem
              item={ this.state.insta_stories.slice(this.state.currentInstagramIndex, this.state.currentInstagramIndex+1) }
            />
            <RightArrow id='r_arrow'>
              <Arrow
                direction="right"
                clickFunction={ this.nextSlide }
                glyph="&#9654;" />
            </RightArrow>
          </div>
        </Overlay>
      </InfoStyle>
    );
  }
}
