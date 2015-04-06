var styles = require('./Button.scss')
var ButtonStore = require('../../stores/ButtonPressStore.js')
var ButtonAction = require('../../actions/ButtonPressedAction.js')

class HelloMessage extends React.Component {

	constructor(props) {
    	super(props)
    	this.state = {
  			clickedNum: 0
    	}

    	this.buttonClicksChanged = this.buttonClicksChanged.bind(this);
  		
  	}

  	render() {
    	return <div onClick={this.clicked}>This has been pressed : { this.state.clickedNum } times</div>
  	}

  	clicked(ev) {
  		console.log('Thing was clicked')
  		ButtonAction()
  	}

  	buttonClicksChanged() {
  		console.log(ButtonStore.number)
  		this.setState({clickedNum: this.state.clickedNum + 1})
  	}

  	componentDidMount() {
        this.unsubscribe = ButtonStore.listen(this.buttonClicksChanged)
    }
	componentWillUnmount() {
	    this.unsubscribe()
	}
}

module.exports = HelloMessage