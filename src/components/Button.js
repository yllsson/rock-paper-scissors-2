import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '../stitches.config';

const Button = styled('button', {
  padding: '30px',
  margin: '10px',

  variants: {
    theme: {
      blue: {
        backgroundColor: 'cadetblue',
        color: 'white'
      },
      orange: {
        backgroundColor: 'orangered',
        color: 'white'
      },
      violet: {
        backgroundColor: 'blueviolet',
        color: 'white'
      }
    },
    size: {
      small: {
        fontSize: '0.5em'
      },
      large: {
        fontSize: '1.5em'
      }
    }
  }
});

export const StyledButton = ({ theme, size, value, id, onClick, children }) => (
  <Button theme={theme} size={size} value={value} id={id} onClick={onClick}>
    {children}
  </Button>
);

StyledButton.propTypes = {
  className: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};
