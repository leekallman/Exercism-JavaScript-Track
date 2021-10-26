//Given a moment, determine the moment that would be after a gigasecond has passed.
//A gigasecond is 10^9 (1,000,000,000) seconds.

export const gigasecond = (moment) => {
  //convert moment into milliseconds
  const momentMs = moment.getTime();

  // add gigasecond in milliseconds to moment, convert to date format
  const newDate = momentMs + Math.pow(10, 12)


  return new Date(newDate)
};

// export const gigasecond = (date) => new Date(+date + 1e12)
