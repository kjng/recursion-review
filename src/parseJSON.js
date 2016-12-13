// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(obj) {


  // Iterate through JSON object
  var index = 0;
  var c = obj.charAt(0);
  if (c === "0" || c === "1" || c === "2" || c === "3" || c === "4" || c === "5" || c === "6" || c === "7" || c === "8" || c === "9") {
    // ITERATE UNTIL WE REACH THE END
  }
       // Store the index of the char in unique variable/flag
       // And the actual char in another...
       // If the char is 0..9...
        //  Keep reading until string terminates
        //  Return the entire sequence cast as integer
       // If we see double quote...
        // Iterate through string until second quote is reached
        // Return result
       // If has '['...
        // Check for empty array
        // Initialize empry
        // Push result of recursive call PARSEJSON for first char onto array.
        // Iterate through loop for all of them.
        // Return array
       // If has '{'...
        // If '}'
          // Return empty object
        // store current key, current value in variable

};
