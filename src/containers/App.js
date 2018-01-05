import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Container } from 'reactstrap'

import Header from '../components/Header/Header'
import Sidebar from '../components/Sidebar/Sidebar'
import Content from '../components/Content/Content'

import './App.scss'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Container>
           <div className="App-content">
              <div className="row">
                  <div className="col-4">
                      <Sidebar />
                  </div>
                  <div className="col-8">
                      <Content />
                  </div>
              </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default App;