import React from 'react';
import PropTypes from 'prop-types'; 
import Navigation from '../navigation/Navigation'
import './header.scss';

const Header = ({ setCurrentWeek, currentWeek, toggleVisibleModal }) => {
  return (
    <header className="header">
      <button
        className="create-event-button"
        onClick={() => toggleVisibleModal(true)}
      >
          <i className="fas fa-plus create-event-btn__icon"></i>
          Create
      </button>
      <Navigation setCurrentWeek={setCurrentWeek} currentWeek={currentWeek} />
    </header>
  )
}

Header.propTypes = {
  setCurrentWeek: PropTypes.func.isRequired,
  currentWeek: PropTypes.number.isRequired,
  toggleVisibleModal: PropTypes.func.isRequired,
}

export default Header