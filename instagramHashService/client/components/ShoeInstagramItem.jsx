import React from 'react';

class ShoeInstagramItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: []
    }
  }

  componentWillReceiveProps(nextProps) {
    //console.log(nextProps.item[0].image_url, 'image_url');
    this.setState({ item: nextProps.item[0]});
  }

  OverlayOff() {
    document.getElementById("overlay").style.display = "none";
  }

  render() {
    var time = new Date();
    time = Math.floor((time - this.state.item.created_at*1000)/(1000*3600*24));//time in days
    var unitTime = 'days';
    if(time>7){
      time = Math.floor(time/7);
      unitTime = 'weeks';
      if(time>4){
        time = Math.floor(time/4);
        unitTime = 'months';
        if(time>12){
          time = Math.floor(time/12);
          unitTime = 'years'
        }
      }
    }
    console.log(this, 'new time')
    return(
      this.state.item.image_url !== ''?<div>
        <div
          style={{
            'backgroundColor': 'White',
            'height': '500px',
            'width': '750px',
            'position': 'absolute',
            'top': '200px',
            'right': '550px'
          }}>
            <img style = {{
              'height': '450px',
              'width': '450px',
              'float': 'left',
              'margin': '20px',
            }} src={this.state.item.image_url}/>
          <div>
            <button type="button" style={{
              'backgroundColor': 'White',
              'height': '25px',
              'width': '25px',
              'fontSize': '20px',
              'float': 'right',
              'border':'none',
            }} aria-label="Close" onClick={this.OverlayOff}>
              <span aria-hidden="true">&times;</span>
            </button>
            <img style={{
              'height': '50px',
              'width': '50px',
              'float': 'left',
              'borderRadius': '50px',
              'marginTop': '20px',
            }} src={this.state.item.user_image_url}/>
            <div style={{
              'float':'left',
              'textAlign': 'left',
              'marginLeft': '2px',
              'textAlign': 'left',
            }}>
              <p style={{
                'fontFamily': 'Helvetica',
                'fontWeight': 'normal',
                'color':'#000000',
                'fontSize': '14px',
                'marginTop': '22px',
                'paddingBottom': '0.5px',
                'marginBottom': '1px',
              }}> {this.state.item.insta_user} </p>
              <p style={{
                'color':'gray',
                'fontSize': '12px',
                'fontFamily': 'Helvetica',
                'fontWeight': 'normal',
                'marginTop': '0.5px',
                'paddingBottom': '0.5px',
              }}>{time} {unitTime} ago </p>
            </div>
          </div>
            <div style={{
              'color':'#C0C0C0',
              'position': 'relative',
              'top': '80px',
              'left': '480px',
              'height': '100px',
              'zIndex': '2',
              'width': '230px',
              'borderTop': 'solid',
              'borderWidth': '1px',
              'textAlign': 'left',
              'verticalAlign': 'top',
              'borderColor': '#C0C0C0'
            }}>
              <p style={{
                'fontFamily': 'Helvetica',
                'fontWeight': 'bold',
                'color':'#000000',
                'fontSize': '15px',
                'textAlign': 'left',
                'zIndex': '1',
                'float': 'left',
                'position': 'relative',
                'bottom': '500px',
              }}> In this Look </p>
            </div>
        </div>
      </div>: <div>
        Loading...
      </div>
    );
  }
}

export default ShoeInstagramItem;
