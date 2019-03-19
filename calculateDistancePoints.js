const calculateDistancePoints = (distance, hillSize, kPoint) => {
    let initial_points, additional_points;

    // calculate initial points
    if (kPoint >= 185) {
        initial_points = 120; // mammoth
    } else {
        initial_points = 60; // normal and large
    }
  
    additional_points = distance - kPoint;
    
    // normal
    if ( hillSize < 110 ) {
      additional_points = additional_points * 2;
    }
    // large
    if ( hillSize >= 110 && hillSize < 185 ) {
      additional_points = additional_points * 1.8;
    }
    // mammoth
    if ( hillSize >= 185 ) {
      additional_points = additional_points * 1.2;
    }
  
    return initial_points + additional_points;
  };
  
  module.exports = calculateDistancePoints;