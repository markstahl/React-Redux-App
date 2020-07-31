  import axios from "axios";

export const LOAD_DATA = "LOAD_DATA";
export const DATA_LOADED = "DATA_LOADED";

export const fetchHolidays = () => {
  return function(dispatch) {
    const key = 'b4f8d66c-ce43-47de-9e14-9d4a9b99569a';
    dispatch({ type: LOAD_DATA });
    axios
      .get(`https://holidayapi.com/v1/holidays?pretty&key=${key}&country=US&year=2019`)
      .then(res => {
        dispatch({ type: DATA_LOADED, payload: res.data.holidays });
      })
      .catch(err => {
        console.error(err)
      })
  };
};