import React from 'react';
import classNames from 'classnames';

class BarWidget extends React.Component {
  constructor(props) {
    super(props);
    // set up the classes for each bar widget
    var classesObject = {};
    classesObject[props.bar] = true
    classesObject[props.widgetAlignment] = true;

    if (props.nike !== undefined) {
      classesObject[props.nike] = 'nike';
    }

    if (props.id !== undefined) {
      classesObject[props.id] = props.id;
      console.log('this ran')
    }
    this.classes = classNames(classesObject);
    // functions that apply to all widgets
    if (props.specialhover !== undefined) {
      this.specialdehover = props.specialdehover;
      this.specialhover = props.specialhover;
      this.id = props.id;
    }
    this.hover = props.hover;
    this.dehover = props.dehover;
    this.toggled = false;
    this.componentNumber = props.componentNumber;
  }
  render() { 
    console.log(this.classes)

    let headerTopBarImageStyle = {
      'height': '15px',
      'paddingLeft': '28px',
      'paddingTop': '12px',
      'paddingBottom': '8px',
      'paddingRight': '28px'
    };
    if (this.classes.indexOf('nike') !== -1) {
      headerTopBarImageStyle = {
      'height': '55%',
      'paddingLeft': '28px',
      'paddingTop': '12px',
      'paddingBottom': '8px',
      'paddingRight': '28px'
      }
    }
    let helpStyle= {};
    if (this.classes.indexOf('help') !== -1) {
      helpStyle = {
      'height': '100%',
      'border-left': '1px solid lightgrey'
      }
    }
    if (this.props.specialhover !== undefined) {
      console.log(this.classes, 'line 41');
      let divStyle = {};
      if (this.classes === 'topBarWidget leftWidgets') {
        console.log('one ran');
        divStyle = {
          'borderRight': '1px solid #e5e5e5',
          'marginRight': '0px',
          'marginLeft': '0px'
        }
      } else if (this.classes === 'topBarWidget rightWidgets') {
        console.log('two ran');

        divStyle = {
          borderLeft: '1px solid #e5e5e5',
          borderRight: 'none',
          marginRight: '0px',
          marginLeft: 'auto'
        }
      }
      return (
        <div style = {helpStyle} className = {this.classes} onClick = {()=> {
          alert('Sorry, we have not built out that page yet');
        }} onMouseEnter = {(e) =>{
          console.log(this.props.componentNumber);
          this.props.specialhover(e, this.props.componentNumber);
          // this.hover(this.componentNumber);
        }} onMouseLeave = {()=> {
          this.specialdehover(this.id);
          // this.specialdehover(this.props.componentNumber)
          // console.log(this);
          // this.specialdehover();
          // this.dehover();
        }}>
          <img style = {headerTopBarImageStyle} src={this.props.img}  className = 'headerTopBarImage'/>
        </div>
      );
    }


     else {
      console.log(this.classes, 'line 41');
      let divStyle = {};
      if (this.classes === 'topBarWidget leftWidgets') {
        console.log('one ran');
        divStyle = {
          'borderRight': '1px solid #e5e5e5',
          'marginRight': '0px',
          'marginLeft': '0px'
        }
      } else if (this.classes === 'topBarWidget rightWidgets') {
        console.log('two ran');

        divStyle = {
          borderLeft: '1px solid #e5e5e5',
          borderRight: 'none',
          marginRight: '0px',
          marginLeft: 'auto'
        }
      }
      return (
      <div  className = {this.classes} style = {divStyle} onClick = {()=> {
        alert('Sorry, we have not built out that page yet');
      }} onMouseEnter = {() =>{
        this.hover(this.componentNumber);
        return;
      }} onMouseLeave = {this.dehover}>
        <img style = {headerTopBarImageStyle} src={this.props.img} className = 'headerTopBarImage'/>
      </div>
    );
    } 
  }
}

export default BarWidget;