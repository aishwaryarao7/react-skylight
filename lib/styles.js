'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var styles = {
  overlayStyles: {
    position: 'fixed',
    top: '0px',
    left: '0px',
    width: '100%',
    height: '100%',
    zIndex: '99',
    backgroundColor: 'rgba(0,0,0,0.3)',
    transitionProperty: 'all',
    transitionTimingFunction: 'ease',
    display: 'none'
  },
  animationBase: {
    transform: 'scale(0)',
    transitionProperty: 'transform',
    transitionTimingFunction: 'ease'
  },
  animationOpen: {
    transform: 'scale(1)',
    transitionProperty: 'transform',
    transitionTimingFunction: 'ease'
  },
  title: {
    marginTop: '0px'
  },
  closeButtonStyle: {
    cursor: 'pointer',
    position: 'absolute',
    fontSize: '1.8em',
    right: '10px',
    top: '0px'
  }
};

exports.default = styles;