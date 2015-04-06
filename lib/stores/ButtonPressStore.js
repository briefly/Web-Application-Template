var buttonPressed = require('../actions/ButtonPressedAction.js')
var Reflux = require('reflux')

module.exports = Reflux.createStore({

    // Initial setup
    init: function() {
    	this.number = 0
        // Register statusUpdate action
        this.listenTo(buttonPressed, this.onButtonPressed);
    },

    // Callback
    onButtonPressed: function() {
        
    	this.number += 1
        // Pass on to listeners
        this.trigger();
    }

});