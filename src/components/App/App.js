import React, { Component } from 'react';
import Container from '../Container';
import Searchbar from '../Searchbar';
import Modal from '../Modal';

import s from './App.module.css';

class App extends Component {
  state = {
    showModal: false,
  };
  // componentDidMount() {
  //   console.log('Modal component did Mount');
  // }
  // componentWillUnmount() {
  //   console.log('Modal component will UnMount');
  // }
  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
  render() {
    const { showModal } = this.state;
    return (
      <Container>
        <Searchbar />
        <button type="button" onClick={this.toggleModal}>
          Open modal
        </button>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src="" alt="" />
          </Modal>
        )}
      </Container>
    );
  }
}

export default App;
