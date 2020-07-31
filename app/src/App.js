import React from 'react';
import { connect } from 'react-redux';
import { fetchHolidays } from './actions';
import './App.css';
import { Card } from 'semantic-ui-react';

import HolidayCard from './components/HolidayCard';

const App = props => {
  const { fetchHolidays, holidays } = props;
  return (
    <div className="App">
      <p>US Holidays 2019</p>
      <button onClick={fetchHolidays}>Fetch Holidays</button>
      <Card.Group centered>
        {holidays.map(holiday=> (
          <HolidayCard holiday={holiday} />
        ))}
      </Card.Group>
    </div>
  );
}

const mapStateToProps = state => ({
  holidays: state.holidaysReducer.holidays,
  isLoading: state.holidaysReducer.isLoading,
})

export default connect(mapStateToProps, { fetchHolidays })(App);
