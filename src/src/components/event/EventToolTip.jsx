import React, { useEffect } from 'react';
import PropTypes from 'prop-types'; 
import { deleteEvent } from '../../services/gateway'

const EvetTooltip = ({ id, fetchEvents, toggleVisibleTooltip }) => {
  useEffect(() => {
    const deleteEventHandler = () => {
      deleteEvent(id)
        .then(() => fetchEvents())
        .catch(error => alert(error))
    }

    const eventDelEl = document.querySelector('.event__delete-tooltip');
    eventDelEl.addEventListener('click', deleteEventHandler);

    return () => eventDelEl.removeEventListener('click', deleteEventHandler);
  });

  return (
    <div
      className="event__delete-tooltip"
      onMouseOut={() => toggleVisibleTooltip(false)}
    >Delete</div>
  )
}

EvetTooltip.propTypes = {
  id: PropTypes.string, 
  fetchEvents: PropTypes.func.isRequired, 
  toggleVisibleTooltip: PropTypes.func.isRequired,
}

EvetTooltip.defaultProps = {
  id: Math.random() + ''
}

export default EvetTooltip
