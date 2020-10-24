import React from 'react';
import PropTypes from 'prop-types'; 
import { initialFormData } from '../../storage';
import { createEvent } from '../../services/gateway';
import './createEventForm.scss';

class CreateEventForm extends React.Component {
  state = {
    formData: initialFormData
  }

  handleChangeFormInput = e => {
    const { name, value } = e.target;
    this.setState({
      formData: {
        ...this.state.formData,
        [name]: value
      }
    })
  }

  componentDidMount() {
    const formEl = document.querySelector('.create-event__form');
    formEl.addEventListener('submit', this.handleCreateEvent);
  }

  componentDidUpdate(prevProps) {
    if (this.props.newEventData !== prevProps.newEventData) {
      this.setState({ formData: this.props.newEventData })
    }
  }

  componentWillUnmount() {
    const formEl = document.querySelector('.create-event__form');
    formEl.removeEventListener('submit', this.handleCreateEvent);
  }

  handleCreateEvent = e => {
    e.preventDefault();
    const { fetchEvents, reset } = this.props;

    createEvent(this.state.formData)
      .then(() => {
        fetchEvents();
        reset();
        this.setState({ formData: initialFormData })
      })
      .catch(error => alert(error))
  }

  render() {
    const { title, date, timeStart, timeEnd, description } = this.state.formData;

    return (
      <form className='create-event__form'>
        <input
          type="text"
          name="title"
          className="create-event__field"
          placeholder="Title"
          value={title}
          onChange={this.handleChangeFormInput}
        />
        <div className="create-event__time-block">
          <input
            type="date"
            name="date"
            className="create-event__date-field"
            value={date}
            onChange={this.handleChangeFormInput}
          />
          <input
            type="time"
            name="timeStart"
            className="create-event__date-field"
            step='900'
            value={timeStart}
            onChange={this.handleChangeFormInput}
          />
          <span></span>
          <input
            type="time"
            name="timeEnd"
            className="create-event__date-field"
            step='900'
            value={timeEnd}
            onChange={this.handleChangeFormInput}
          />
        </div>
        <textarea
          name="description"
          id="" placeholder="Description"
          className="create-event-form__field"
          value={description}
          onChange={this.handleChangeFormInput}
        />
        <button className="create-event__submit-btn" type='submit'>Save</button>
      </form>
    )
  }
}

CreateEventForm.propTypes = {
  reset: PropTypes.func.isRequired,
  fetchEvents: PropTypes.func.isRequired,
  newEventData: PropTypes.object.isRequired,
}

export default CreateEventForm