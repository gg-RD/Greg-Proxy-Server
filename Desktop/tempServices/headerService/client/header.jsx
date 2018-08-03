import React from 'react';
import ReactDOM from 'react-dom';
import TopBar from './components/topBar.jsx';
import MiddleBar from './components/middleBar.jsx';
import BottomBar from './components/bottomBar.jsx';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    let navBarStyle = {
      width: '100%',
      position: 'fixed',
      top: '0px'
    }
    return (
      <div>
        <div id= 'navBar' style = {navBarStyle}>
          <TopBar bar = 'topBarWidget'/>
          <MiddleBar bar = 'middleBarWidget'/>
        </div>
        <BottomBar bar = 'bottomBarWidget'/>
      </div>
    );
  }
}

  ReactDOM.render(
      React.createElement(Header),
      document.getElementById('header')
  );
