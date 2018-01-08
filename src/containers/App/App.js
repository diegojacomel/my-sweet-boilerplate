import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Container } from 'reactstrap'

import Header from '../../components/Header/Header'
import Sidebar from '../../components/Sidebar/Sidebar'
import Content from '../../components/Content/Content'
import Footer from '../../components/Footer/Footer'

import './App.scss'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Container fluid>
           <div className="App-content">
              <Sidebar />
              <Content />
          </div>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default App;