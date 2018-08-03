import React from 'react';
import BarWidget from './barWidget.jsx';
import SearchWidget from './SearchWidget.jsx';
import TextWidget from './textWidget.jsx';

class MiddleBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'imgs': ['https://s3-us-west-1.amazonaws.com/ggrd-imgs/Header+Service/nike.png', 'MEN', 'WOMEN', 'KIDS', 'CUSTOMIZE', 'FAVORITES', 'https://s3-us-west-1.amazonaws.com/ggrd-imgs/Header+Service/search.png'],
      'selected': null
    }
  }
  specialhover(e) {
    let el = e.target;
    while (el.classList.contains('WidgetText') || el.classList.contains('parent')) {
      el = el.parentElement;
    }
    el.style.borderBottom = '4px solid black';
    this.setState({
      imgs: this.state.imgs,
      selected: e.target.textContent
    })
  }
  specialdehover(className) {
    var el = document.getElementsByClassName(className)[0];
    while (el.classList.contains('WidgetText') || el.classList.contains('parent')) {
      el = el.parentElement;
    }
    el.style.borderBottom = 'none';
    this.setState({
      imgs: this.state.imgs,
      selected: null
    })
  }
  hover(componentNumber) { // examples of component number: 0 || 1 || 2 || 3 ...
    this.setState({
      imgs: this.state.imgs,
      selected: (componentNumber*2)+1 
    })
  }
  dehover () {
    this.setState({
      'imgs': this.state.imgs,
      'selected': null
    })
  }
  render () {
    let middleBarStyle = {
      'display': 'flex',
      'flex-direction': 'row',
      'height': '70px',
      'background-color': 'white',
      'border-bottom': '1px solid lightgrey'
    };
    let middleSpacingBarStyle = {
      width: '25%'
    };
    return (
      <div id ='middleBar' style = {middleBarStyle}>
        <BarWidget  nike = 'nike' bar = {this.props.bar} widgetAlignment = 'leftWidgets' img={this.state.imgs[0]} dehover = {this.dehover.bind(this)} hover = {this.hover.bind(this)} componentNumber = {0}/>
        <div id = 'leftMiddleSpacingBar' style = {middleSpacingBarStyle}> </div>
        <TextWidget bar = {this.props.bar} widgetAlignment = 'middleWidgets' specialdehover = {this.specialdehover.bind(this)} specialhover = {this.specialhover.bind(this)} text = 'MEN'/>
        <TextWidget bar = {this.props.bar} widgetAlignment = 'middleWidgets' specialdehover = {this.specialdehover.bind(this)} specialhover = {this.specialhover.bind(this)} text = 'WOMEN'/>
        <TextWidget bar = {this.props.bar} widgetAlignment = 'middleWidgets' specialdehover = {this.specialdehover.bind(this)} specialhover = {this.specialhover.bind(this)} text = 'KIDS'/>
        <TextWidget bar = {this.props.bar} widgetAlignment = 'middleWidgets' specialdehover = {this.specialdehover.bind(this)} specialhover = {this.specialhover.bind(this)} text = 'CUSTOMIZE'/>
        <TextWidget bar = {this.props.bar} widgetAlignment = 'middleWidgets' specialdehover = {this.specialdehover.bind(this)} specialhover = {this.specialhover.bind(this)} text = 'FAVORITES'/>
        <div id = 'rightMiddleSpacingBar' style = {middleSpacingBarStyle}> </div>
        <SearchWidget bar = {this.props.bar} widgetAlignment = 'rightWidgets' img= {this.state.imgs[6]}/>

      </div>
    )
  }
}
//        // <TopBarWidget widgetAlignment = 'leftWidgets' img={this.state.imgs[0]} dehover = {this.dehover.bind(this)} hover = {this.hover.bind(this)} componentNumber = {0}/>
export default MiddleBar;