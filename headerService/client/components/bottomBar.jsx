import React from 'react';
import BarWidget from './barWidget.jsx';
import $ from 'jquery';


class BottomBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'imgs': ['https://s3-us-west-1.amazonaws.com/ggrd-imgs/Header+Service/moveLeft.png', 'https://s3-us-west-1.amazonaws.com/ggrd-imgs/Header+Service/returns.png', 'https://s3-us-west-1.amazonaws.com/ggrd-imgs/Header+Service/nikePlus.png', 'https://s3-us-west-1.amazonaws.com/ggrd-imgs/Header+Service/moveRight.png'],
      'selected': 0
    };
  } //
  moveRight() {

    var context = this;
    if (context.state.selected <= 2) {
      context.setState({
        'imgs': context.state.imgs,
        'selected': ++context.state.selected
      });
    }
    // setTimeout(()=> {
    //   if (context.state.selected <= 2) {
    //   context.setState({
    //     'imgs': context.state.imgs,
    //     'selected': ++context.state.selected
    //   });
    // }
    // }, 4000)
  }
  moveLeft () {
    if (this.state.selected > 0) {
      this.setState({
        'imgs': this.state.imgs,
        'selected': this.state.selected-1
      })
    }
  }
  render () { // set state with numbers instead images because cleaner and not always 1 image per thing
    let bottomBarStyle = {
      'display': 'flex',
      'paddingTop': '102px',
      'height': '60px',
      'width': '100%',
      'backgroundColor': '#f7f7f7',
      'borderBottom': '1px solid lightgrey',
      'justifyContent': 'center'
    };
    let bottomBarsliderStyle = {
      'width': '45%',
      'display': 'flex',
      'flexDirection': 'row'
    }
    let bottomBarsliderMoveLeftStyle = {
      'width': '60px'
    }
    let bottomBarSliderMainContentStyle = {
      'width': '84%',
      'display': 'flex',
      'flexDirection': 'row',
      'justifyContent': 'center'
    };
    let bottomBarsliderMainContentIconHolderStyle = {
      'width': '60px',
      'display': 'flex'
    };
    let returnsIconStyle = {
      'marginLeft': 'auto',
      'marginTop': 'auto',
      'marginBottom': 'auto',
      'height': '60%',
      'width': '65%'
    };  
    let bottomBarSliderMainContentTextHolderStyle = {
      'display': 'flex',
      'marginRight': '10px'
    };
    let bottomBarsliderMainContentTextStyle = {
      'marginTop': 'auto',
      'marginBottom': 'auto',
      'fontFamily': 'Helvetica',
      'fontSize': '14px',
      'fontWeight': 'bold',
      'fontStyle': 'normal',
      'color': '#222222'
    };
    let bottomBarSliderMainContentSubtitleHolderStyle = {
      'display':'flex',
      'marginRight': '5px'
    };
    let bottomBarsliderMainContentSubtitleStyle = {
      'marginTop': 'auto',
      'marginBottom': 'auto',
      'fontFamily': 'Helvetica',
      'fontSize': '11px',
      'fontWeight': 'lighter',
      'color': '#323232'
    };
    let bottomBarSliderMainContentMoreHolderStyle = {
      'display': 'flex',
      'marginRight': '5px'
    };
    let bottomBarsliderMainContentMoreStyle = {
      'marginTop': 'auto',
      'marginBottom': 'auto',
      'fontFamily': 'Helvetica',
      'fontSize': '11px',
      'fontWeight': 'lighter',
      'textDecoration': 'underline',
      'color': 'black'
    };
    let bottomBarsliderMoveRightStyle = {
      'width': '60px'
    };
    let bottomBarsliderMoveImageStyle = {
      'width': '16px',
      'height': '16px',
      'marginTop': '22px',
      'marginLeft': '22px'
    }
    let nikePlusIconStyle = {
      'marginLeft': 'auto',
      'marginTop': 'auto',
      'marginBottom': 'auto',
      'height': '40%',
      'width': '70%'
    }

    if (this.state.selected === 0) { //done
      return (
        <div id= 'bottomBar' style = {bottomBarStyle}>
          <div id = 'bottomBarslider' style = {bottomBarsliderStyle}>
            <div id = 'bottomBarsliderMoveLeft' style = {bottomBarsliderMoveLeftStyle} onClick = {this.moveLeft.bind(this)}>
            </div>
            <div id = 'bottomBarSliderMainContent' style = {bottomBarSliderMainContentStyle} className = 'differentClass'>
              <div id = 'bottomBarsliderMainContentIconHolder' style = {bottomBarsliderMainContentIconHolderStyle} >
              </div>
              <div id = 'bottomBarSliderMainContentTextHolder' style = {bottomBarSliderMainContentTextHolderStyle}>
                <p id = 'bottomBarsliderMainContentText' style = {bottomBarsliderMainContentTextStyle}> $5 TWO DAY SHIPPING NOW AVAILABLE </p>
              </div>
              <div id = 'bottomBarSliderMainContentMoreHolder' style = {bottomBarSliderMainContentMoreHolderStyle}> 
                <p id = 'bottomBarsliderMainContentMore' style = {bottomBarsliderMainContentMoreStyle}> See details </p>
              </div>
            </div>
            <div id = 'bottomBarsliderMoveRight' style = {bottomBarsliderMoveRightStyle} onClick = {this.moveRight.bind(this)}>
              <img src = {this.state.imgs[3]} style = {bottomBarsliderMoveImageStyle}/>
            </div>
          </div>
        </div>
      );
    } else if (this.state.selected === 1) { // done
      return(
        <div id= 'bottomBar'  style = {bottomBarStyle}>
          <div id = 'bottomBarslider' style = {bottomBarsliderStyle}>
            <div id = 'bottomBarsliderMoveLeft' style = {bottomBarsliderMoveLeftStyle} onClick = {this.moveLeft.bind(this)}>
              <img src = {this.state.imgs[0]} style = {bottomBarsliderMoveImageStyle} style = {bottomBarsliderMoveImageStyle}/>
            </div>
            <div id = 'bottomBarSliderMainContent' style = {bottomBarSliderMainContentStyle}>
                <div id = 'bottomBarsliderMainContentIconHolder' style = {bottomBarsliderMainContentIconHolderStyle}>
                  <img id = 'returnsIcon' src = {this.state.imgs[1]} style = {returnsIconStyle}/>
                </div>
                <div id = 'bottomBarSliderMainContentTextHolder' style = {bottomBarSliderMainContentTextHolderStyle}>
                  <p id = 'bottomBarsliderMainContentText' style = {bottomBarsliderMainContentTextStyle}> 30-DAY FREE RETURNS </p>
                </div>
                <div id = 'bottomBarSliderMainContentSubtitleHolder' style = {bottomBarSliderMainContentSubtitleHolderStyle}> 
                  <p id = 'bottomBarsliderMainContentSubtitle' style = {bottomBarsliderMainContentSubtitleStyle}> Wear it, test it, keep what you like. </p>
                </div>
                <div id = 'bottomBarSliderMainContentMoreHolder' style = {bottomBarSliderMainContentMoreHolderStyle}> 
                  <p id = 'bottomBarsliderMainContentMore' style = {bottomBarsliderMainContentMoreStyle}> See details </p>
                </div>
              </div>            
            <div id = 'bottomBarsliderMoveRight' style = {bottomBarsliderMoveRightStyle} onClick = {this.moveRight.bind(this)}>
              <img src = {this.state.imgs[3]} style = {bottomBarsliderMoveImageStyle}/>
            </div>
          </div>
        </div>
      );
    } else if (this.state.selected === 2) {
      return(
        <div id= 'bottomBar'  style = {bottomBarStyle}>
          <div id = 'bottomBarslider' style = {bottomBarsliderStyle}>
            <div id = 'bottomBarsliderMoveLeft' style = {bottomBarsliderMoveLeftStyle} onClick = {this.moveLeft.bind(this)}>
                <img src = {this.state.imgs[0]} style = {bottomBarsliderMoveImageStyle}/>
            </div>
            <div id = 'bottomBarSliderMainContent' style = {bottomBarSliderMainContentStyle}>
              <div id = 'bottomBarsliderMainContentIconHolder' style = {bottomBarsliderMainContentIconHolderStyle}>
                <img id = 'nikePlusIcon' src = {this.state.imgs[2]} style = {nikePlusIconStyle}/>
              </div>
              <div id = 'bottomBarSliderMainContentTextHolder' style = {bottomBarSliderMainContentTextHolderStyle}>
                <p id = 'bottomBarsliderMainContentText' style = {bottomBarsliderMainContentTextStyle} > DOWNLOAD THE NIKE APP</p>
              </div>
              <div id = 'bottomBarSliderMainContentMoreHolder' style = {bottomBarSliderMainContentMoreHolderStyle}> 
                <p id = 'bottomBarsliderMainContentMore' style = {bottomBarsliderMainContentMoreStyle}> Learn more </p>
              </div>
            </div>
            <div id = 'bottomBarsliderMoveRight' style = {bottomBarsliderMoveRightStyle} onClick = {this.moveRight.bind(this)}>
              <img src = {this.state.imgs[3]} style = {bottomBarsliderMoveImageStyle}/>
            </div>
          </div>
        </div>
      );

    } else if (this.state.selected === 3) {
      return(
        <div id= 'bottomBar'  style = {bottomBarStyle}>
          <div id = 'bottomBarslider' style = {bottomBarsliderStyle}>
            <div id = 'bottomBarsliderMoveLeft' style = {bottomBarsliderMoveLeftStyle} onClick = {this.moveLeft.bind(this)}>
              <img src = {this.state.imgs[0]} style = {bottomBarsliderMoveImageStyle}/>              
            </div>
            <div id = 'bottomBarSliderMainContent' style = {bottomBarSliderMainContentStyle}>
              <div id = 'bottomBarsliderMainContentIconHolder' style = {bottomBarsliderMainContentIconHolderStyle}>
              </div>
              <div id = 'bottomBarSliderMainContentTextHolder' style = {bottomBarSliderMainContentTextHolderStyle}>
                <p id = 'bottomBarsliderMainContentText' style = {bottomBarsliderMainContentTextStyle}> $5 TWO DAY SHIPPING NOW AVAILABLE </p>
              </div>
              <div id = 'bottomBarSliderMainContentMoreHolder' style = {bottomBarSliderMainContentMoreHolderStyle}> 
                <p id = 'bottomBarsliderMainContentMore' style = {bottomBarsliderMainContentMoreStyle}> See details </p>
              </div>
            </div>
            <div id = 'bottomBarsliderMoveRight' style = {bottomBarsliderMoveRightStyle} onClick = {this.moveRight.bind(this)}>
            </div>
          </div>
        </div>
      );

    }
    
  }
}

export default BottomBar;