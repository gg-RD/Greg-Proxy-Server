import React from 'react';

export default class ShoeItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      is_hovered: false
    };
    this.handleHover = this.handleHover.bind(this)
  }

  componentDidMount(){
  }

  handleHover(){
    this.setState({
      is_hovered: !this.state.is_hovered
    });
  }

  OverlayOn() {
    console.log(this.props.item.id, 'props id');
    this.props.updateCurrentInstagram(this.props.item.id-1);
    document.getElementById("overlay").style.display = "block";
  }

  OverlayOff() {
    document.getElementById("overlay").style.display = "none";
  }

  render(){
    var div2 = this.state.is_hovered?{
      'background':'rgba(255,255,255,0.75)',
      'width': '150px',
      'height': '50px',
      'borderRadius': '6px',
      'position':'relative',
      'top':'220px',
      'right':'-100px',
      'textAlign': 'center',
      'lineHeight': '50px',
      }:
      {
        'background':'rgba(255,255,255,0)',
        'width': '150px',
        'height': '50px',
        'borderRadius': '6px',
        'position':'relative',
        'top':'220px',
        'right':'-100px',
        'textAlign': 'center',
        'lineHeight': '50px',
        };

      var image_shoe = {
        height: '350px',
        width: '350px',
        'marginTop': '0px',
        'paddingTop': '0px',
      }

      var insta_user = {
        'textAlign': 'left'
      }

    return(
      <div style={{
        'marginBottom': '140px',
        'verticalAlign':'top',
        'marginRight': '10px',
      }}>
          <div style={div2}>
            {this.state.is_hovered? 'Shop the look' : ''}
          </div>
          <img src={this.props.item.image_url} style={image_shoe}
            onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}
            onClick={() => {this.OverlayOn();
            }}
          />
          <p style={insta_user}>{this.props.item.insta_user}</p>
          <p style={{'color':'gray',
          'textAlign': 'left'}}>{this.props.item.likes} Likes</p>
      </div>
      );
  }

};
