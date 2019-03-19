const calculateStylePoints = ( styleNotes ) => {
    // sum all notes
    const result = styleNotes.reduce(( sum, current ) => sum + current, 0 );

    // define min and max note and remove from result
    const maxResult = Math.max( ...styleNotes );
    const minResult = Math.min( ...styleNotes );
    return result - maxResult - minResult;
  };
  
  module.exports = calculateStylePoints;