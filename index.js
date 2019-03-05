const formatDate = (timeInSeconds) => {
    if (!timeInSeconds) {
      return `0s`
    }
    else if (timeInSeconds<60) {
      return `${timeInSeconds}s`
    }
    else if (timeInSeconds<3600) {
      const minutes = Math.floor(timeInSeconds/60);
      const seconds = timeInSeconds%60;
      if (seconds===0) {
        return `${minutes}m`
      }
      return `${minutes}m ${seconds}s`
    }
    else {
      const hours = Math.floor(timeInSeconds/3600);
      const secondsLeft = timeInSeconds-hours*3600;
      const minutes = Math.floor(secondsLeft/60);
      const seconds = secondsLeft%60;
      if (seconds==0 && minutes==0) {
        return `${hours}h`
      }
      else if (seconds==0) {
        return `${hours}h ${minutes}m`
      }
      else if (minutes==0) {
        return `${hours}h ${seconds}s`
      }
      return `${hours}h ${minutes}m ${seconds}s`
    }
  }
  
  module.exports = formatDate;