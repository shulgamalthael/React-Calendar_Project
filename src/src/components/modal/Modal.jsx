import React from 'react';
import PropTypes from 'prop-types';
import './modal.scss';


const Modal = ({ children, reset, isVisibleModal }) => {

  const modalClassName = !isVisibleModal
    ? 'modal overlay hidden'
    : 'modal overlay';

  return (
    <div className={modalClassName}>
      <div className="modal__content">
        <div className="create-event">
          <button className="close-btn" onClick={() => reset()}>+</button>
          {children}
        </div>
      </div>
    </div>
  )
}

Modal.propTypes = {
  children: PropTypes.element,
  isVisibleModal: PropTypes.bool.isRequired,
  reset: PropTypes.func.isRequired,
}

Modal.defaultProps = {
  children: null
}

export default Modal
