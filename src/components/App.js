/*import React from 'react'
import Button from './1-atoms/button/Button'
import FormField from './2-molecules/form-field/FormField'

// TESTING
import TestComponent from './1-atoms/test/TestComponent'

const App = () => {
	return (
		<React.Fragment>
			<FormField labelFor='firstname' labelValue='First name' name='firstname' />
			<FormField labelFor='lastname' labelValue='Last name' name='lastname' />
			<FormField labelFor='email' labelValue='Email' type='email' placeholder='Email' name='email' />
			<Button type='submit' theme='primary'>Submit</Button>
			<TestComponent /> 
		</React.Fragment>
	)
}

export default App*/

import React, { Component } from 'react';
import Modal from './1-atoms/modal/ModalComponent'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };

    // ES6 React.Component doesn't auto bind methods to itself. You need to bind them yourself in constructor.
    // https://reactjs.org/docs/handling-events.html
    this.toggleModal = this.toggleModal.bind(this)
  }

  toggleModal() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.toggleModal}>
          Open the modal
        </button>

        <Modal show={this.state.isOpen}
          onClose={this.toggleModal}>
          Here's some content for the modal
        </Modal>
      </div>
    );
  }
}

export default App;