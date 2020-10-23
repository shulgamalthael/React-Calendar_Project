import React, { useState, useEffect } from 'react';
import Header from './components/header/Header';
import { getEventsList } from './services/gateway';
import { initialFormData } from './storage';
import Week from './components/week/Week';
import CalendarWeekHeader from './components/weekHeader/WeekHeader';
import Modal from './components/modal/Modal';
import EventForm from './components/eventForm/EventForm'

const App = () => {
  const [currentWeek, setCurrentWeek] = useState(0);
  const [events, updateEvents] = useState([]);
  const [isVisibleModal, toggleVisibleModal] = useState(false);
  const [newEventData, setNewEventData] = useState(initialFormData);

  const fetchEvents = () => getEventsList()
    .then(data => updateEvents(data))
    .catch(error => alert(error));

  useEffect(() => {
    fetchEvents()
  }, []);

  const reset = () => {
    toggleVisibleModal(false);
    setNewEventData(initialFormData)
  }

  return (
    <>
      <Header
        setCurrentWeek={setCurrentWeek}
        currentWeek={currentWeek}
        toggleVisibleModal={toggleVisibleModal}
      />
      <main className="calendar">
        <CalendarWeekHeader currentWeek={currentWeek} />
        <Week
          events={events}
          currentWeek={currentWeek}
          fetchEvents={fetchEvents}
          setNewEventData={setNewEventData}
          toggleVisibleModal={toggleVisibleModal}
        />
      </main>
      <Modal
        isVisibleModal={isVisibleModal}
        reset={reset}
      >
        <EventForm
            newEventData={newEventData}
            fetchEvents={fetchEvents}
            reset={reset}
          />
      </Modal>
    </>
  )
}
export default App
