import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';
import SelectedBeast from './SelectedBeast';
import data from '../data.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beastData: data,
      isModalShown: false,
      selectedBeast: null,
    };
  };
  
  handleCloseModal = () => {
    this.setState({
      isModalShown: false
    });
  };
  
  handleOpenModal= (beast) => {
    this.setState({
      isModalShown: true,
      selectedBeast: beast
    });
  };


  render () {
    return (
      <>
        <Header/>
        <Main 
          beastData={this.state.beastData}
          handleOpenModal={(this.handleOpenModal)}
        />
        { this.state.selectedBeast &&
          <SelectedBeast
            show={this.state.isModalShown}
            onHide={this.handleCloseModal}
            selectedBeast={this.state.selectedBeast}
          />
        }
        <Footer/>
      </>
    );
  }
};

export default App;
