import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Types from './components/Types'
import Path from './components/Path'
import Section from './components/Section'
import Footer from './components/Footer';
import {DataProvider} from './components/Context'


class App extends React.Component{
  render(){
    return(
      <DataProvider>
        <div className="app">
          <Router>
            <Header />
            <Navbar />
            <Types />
            <Path />
            <Section />
            <Footer />
          </Router>
        </div>
      </DataProvider>
    );
  }
}

export default App;
