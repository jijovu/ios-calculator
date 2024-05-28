function input(value) {
    document.getElementById("output").value += value;
  }
  function clearOutput() {
    document.getElementById("output").value = "";
  }

  function calculate() {
    try {
      document.getElementById("output").value = eval(document.getElementById("output").value);
    } catch (error) {
      document.getElementById("output").value = "Error";
    }
  }


  
  function deleteLast() {
    var display = document.getElementById('output');
    var currentValue = display.value;
  
    // Check if there is anything to delete
    if (currentValue.length > 0) {
      // Remove the last character from the string
      var newValue = currentValue.slice(0, -1);
  
      // Update the display with the new value
      display.value = newValue;
    }
  }
  
  function appendToDisplay(value) {
    var display = document.getElementById('output');
    display.value += value;
  }
  