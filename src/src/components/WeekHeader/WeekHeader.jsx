import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types'; 
import { generateWeek } from '../../utils';
import './calendarWeekHeader.scss';



const CalendarWeekHeader = ({ currentWeek }) => {
  const week = generateWeek(currentWeek);

  return (
    <header className="calendar__header ">
      {week.map((day, idx) => {
        const dayLableClassNamemoment = day === moment().format('YYYY-MM-DD')
        ? 'calendar__day-label today'
        : 'calendar__day-label';

        return (
          <div key={idx} className={dayLableClassNamemoment}>
            <span className="calendar__day-name">
              {moment(day, 'YYYY MM DD').format("dddd")}
            </span>
            <span className="calendar__day-number">
              {moment(day, 'YYYY MM DD').format("DD")}
            </span>
          </div>
        )
      }
      )}
    </header>
  )
}

CalendarWeekHeader.propTypes = {
  currentWeek: PropTypes.number.isRequired
}

export default CalendarWeekHeader