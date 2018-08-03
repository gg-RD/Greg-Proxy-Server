import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

class TextWidget extends React.Component {
  constructor(props) {
    super(props);
    // setup the clsses for each bar widget
    let classesObject = {};
    classesObject[props.bar] = true
    classesObject[props.widgetAlignment] = true;
    classesObject['parent'] = true;
    this.classes = classNames(classesObject);
    let classesObjectP = {};
    classesObjectP['WidgetText'] = true;
    classesObjectP[props.text] = true;
    this.classesp = classNames(classesObjectP);
  }

  render () {
    let holderStyle = {
      'marginLeft': '20px',
      'marginRight': '20px' 
    }
    let widgetTextStyle = {
      'height': '50%',
      alignContent: 'center',
      fontWeight: 'bold',
      fontSize: '14px',
      fontFamily: 'Helvetica',
      fontStyle: 'normal'
    };
    // let 
    let parentStyle = {
      'display': 'flex',
      'marginTop': '10px',
      'marginBottom': '10px'
    }
    return(
      <div className = 'holder' style = {holderStyle}>
        <div className = {this.classes} style = {parentStyle} onClick = {()=> {alert('sorry haven\'t implemented this yet')}} onMouseEnter = {(e)=> {this.props.specialhover(e);}} onMouseLeave = {()=> {this.props.specialdehover(this.props.text);}}> 
          <p className = {this.classesp} style = {widgetTextStyle}>{this.props.text}</p>
        </div>
      </div>
    );
  }
}
export default TextWidget;

 