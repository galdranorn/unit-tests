const Math = require('Math');

const calculateDistancePoints = (distance, hillSize, kPoint) => {
    let hill_description, initial_points, calculated_points;

    // calculate initial points
    if (kPoint >= 185) {
        initial_points = 120; // mammoth
    } else {
        initial_points = 60; // normal and large
    }
  
    // calculate additional points
    if ( distance % 2 > 0.5 ) {
      final_distance = Math.floor(distance) + 0.5;
    } else {
      final_distance = Math.floor(distance) - 0.5;
    };
  
    calculated_points = final_distance - kPoint;
    
    // normal
    if ( hillSize >= 85 && hillSize < 110 ) {
      hill_description = "Normal hill";
      calculated_points = calculated_points * 2;
    }
  
    // large
    if ( hillSize >= 110 && hillSize < 185 ) {
      hill_description = "Large hill";
      calculated_points = calculated_points * 1.8;
    }
  
    // mammoth
    if ( hillSize >= 185 ) {
      hill_description = "Ski flying hill";
      calculated_points = calculated_points * 1.2;
    }
  
    return initial_points + calculated_points;
  };
  
  module.exports = calculateDistancePoints;