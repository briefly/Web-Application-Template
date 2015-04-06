// Export React to global context so that DevTools pop
require('expose?React!react')

var AppComponent = require('./components/Button/Button.jsx')

React.render(
  <div>
  	<h1>Welcome to React!</h1>
  	<AppComponent />
  </div>,
  document.body
);