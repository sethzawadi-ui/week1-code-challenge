function checkSpeed() {
      const speed = document.getElementById('speedInput').value; 
      // Get the value entered in the input box with id='speedInput' and store it in the variable 'speed'
      const speedLimit = 70;                                            
      // Allowed speed limit
      const kmPerPoint = 5;                                            
      // Each 5 km/h above the limit = 1 demerit point
      let outputMessage;

      if (speed === 0 || isNaN(speed)) {                                
        //true value is returned if speed is entered as 0 or is not a number
        outputMessage = "Please enter a valid speed.";
        return;
      }

      if (speed < speedLimit) {                                        
         // Case 1: speed below limit
        outputMessage = "Ok";
      } else {
        const points = Math.floor((speed - speedLimit) / kmPerPoint);  
         // Calculate demerit points

        if (points > 12) {                                             
           // Case 2: More than 12 points
          outputMessage = "License suspended";
        } else {                                                       
           // Case 3: Within limits
          outputMessage = `Points: ${points}`;
        }
      }
      document.getElementById("output").innerHTML = outputMessage;
    }