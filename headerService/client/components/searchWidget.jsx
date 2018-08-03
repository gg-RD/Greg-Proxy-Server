import React from 'react';
import classNames from 'classnames';

class SearchWidget extends React.Component {
  constructor(props) {
    super(props);
    // set up the classes for each bar widget
    var classesObject = {};
    classesObject[props.bar] = true
    classesObject[props.widgetAlignment] = true;
    classesObject['search'] = true;
    this.classes = classNames(classesObject);
    // functions that apply to all widgets
    
    this.hover = props.hover;
    this.dehover = props.dehover;
    this.toggled = false;
    this.componentNumber = props.componentNumber;
    this.state = {
      searchTerm: 'Search'
    }
  }
  onChange(e) { //
    this.setState({
      'searchTerm': e.target.value
    })
  }
  render() { 
    // if (this.state.searchTerm !== 'Search' && this.state.searchTerm !== '') {
    //   //implement rendering that darkens the lower segments of the page
    // } else {
      let sImageStyle = {
        'height': '100%',
        'width': '40px'
      };
      let divStyle = {
        'display': 'flex',
        'height': '40px',
        'marginTop': '15px',
        'marginBottom': '15px',
        'border': '1px solid lightgrey',
        'width': '200px',
        'marginRight': '5px'
      };
      let inputFieldStyle = {
        'marginLeft': '5px',
        'marginTop': '2px',
        'height': '90%',
        'width': '145px',
        'display': 'inlineBlock',
        'border': 'none',
        'fontSize': '14px',
        'fontFamily': 'Helvetica',
        'color': 'lightgrey'
      }
      return (
      <div  className = {this.classes} style = {divStyle}>
          <img src= {this.props.img} style = {sImageStyle} className = 'sImage' onClick = {()=> {
            this.setState({
              'searchTerm': ''
            });
            alert('sorry, we cant search yet.');
          }}/>
          <input style = {inputFieldStyle} type='text' className ='inputField' value = {this.state.searchTerm} onChange = {this.onChange.bind(this)} onClick = {()=>{this.setState({'searchTerm': ''})}}/>
      </div>
    );
//    }
     
  }
}

export default SearchWidget;