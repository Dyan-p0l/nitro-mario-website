//canvas elements for the main mario game

var GameUI = (function() {
  var instance;

  function GameUI() {
    var canvas = document.getElementsByClassName('game-screen')[0];
    var ctx = canvas.getContext('2d');

    var popUpText = " ";
    var popUpVisible = false;
    var popUpTimeout;

    var that = this;

    this.setWidth = function(width) {
      canvas.width = width;
    };

    this.setHeight = function(height) {
      canvas.height = height;
    };

    this.getWidth = function() {
      return canvas.width;
    };

    this.getHeight = function() {
      return canvas.height;
    };

    this.getCanvas = function() {
      return canvas;
    };

    this.show = function() {
      canvas.style.display = 'block';
    };

    this.hide = function() {
      canvas.style.display = 'none';
    };

    this.clear = function(x, y, width, height) {
      ctx.clearRect(x, y, width, height);
    };

    this.scrollWindow = function(x, y) {
      ctx.translate(x, y);
    };

    this.draw = function(image, sx, sy, width, height, x, y, width, height) {
      ctx.drawImage(image, sx, sy, width, height, x, y, width, height);
    };

    this.makeBox = function(x, y, width, height) {
      ctx.rect(x, y, width, height);
      ctx.fillStyle = 'black';
      ctx.fill();
    };

    this.writeText = function(text, x, y) {
      ctx.font = '20px Courier';
      ctx.fillStyle = 'black';
      ctx.fillText(text, x, y);
    };


    /*
    this.displayPopUp = function(message) {
      popUpText = message;
      popUpVisible = true;
      clearTimeout(popUpTimeout); // Clear any existing timeout
      popUpTimeout = setTimeout(function() {
        popUpVisible = false; // Hide the pop-up after a delay (e.g., 3 seconds)
      }, 3000); // Adjust the delay as needed
    };

    // Method to render the pop-up message on the canvas
    this.renderPopUp = function() {
      if (popUpVisible) {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)'; // Semi-transparent background
        ctx.fillRect(100, 100, 200, 100); // Position and size of the pop-up box
        ctx.font = '24px Arial';
        ctx.fillStyle = 'black';
        ctx.textAlign = 'center';
        ctx.fillText(popUpText, 200, 150); // Center the text
      }
    };    */
  }




GameUI.prototype.displayPopUp = function(message) {
  // Create a div element for the pop-up
  var popUpDiv = document.createElement('div');
  popUpDiv.className = 'pop-up';
  
  // Create a paragraph element to display the message
  var messageParagraph = document.createElement('p');
  messageParagraph.textContent = message;
  
  // Append the message paragraph to the pop-up div
  popUpDiv.appendChild(messageParagraph);
  
  // Append the pop-up div to the document body
  document.body.appendChild(popUpDiv);
  
  // Remove the pop-up after a certain time (e.g., 3 seconds)
  setTimeout(function() {
      document.body.removeChild(popUpDiv);
  }, 6000); // Adjust the timeout value as needed
};

  return {
    getInstance: function() {
      if (instance == null) {
        instance = new GameUI();
      }

      return instance;
    }
  };
})();
