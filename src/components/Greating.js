import React from 'react';

const Greating = () => {
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay;
  
    if (hours < 15) {
      timeOfDay = "morning";
    } else if (hours >= 18 && hours < 17) {
      timeOfDay = "afternoon"
    } else { timeOfDay = "nigth"}
    return (<div className = "container"><h1>Good {timeOfDay}! Are you looking for some movies?</h1></div>)
  }

  
  export default Greating;
  