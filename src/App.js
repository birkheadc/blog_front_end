import React, { Component } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import './App.css';

import Navbar from './components/sections/navbar/navbar';
import Feed from './components/sections/feed/feed';
import NavColumn from './components/sections/navcolumn/navcolumn';
import Footer from './components/sections/footer/footer';

import fetchArticleProfiles from './api/fetchArticleProfiles/fetchArticleProfiles';
import BackForwardLinks from './components/backForwardLinks/backForwardLinks';
import Browse from './components/sections/browse/browse';

class App extends Component {

  state = {
    articleProfiles: [
      
    ]
  }

  componentDidMount() {
    this.setArticleProfiles();
  }

  async setArticleProfiles() {
    let articleProfiles = await fetchArticleProfiles(process.env.REACT_APP_API_URL);
    this.setState(
      {
        articleProfiles: articleProfiles
      }
    );
  }


  renderHeader() {
    return(
      <header>
        <Navbar />
      </header>
    );
  }

  renderNavColumn() {
    return(
      <NavColumn articles={this.state.articleProfiles}/>
    );
  }

  renderBody() {
    return(
      <main>
        <Routes>
          <Route exact path='/' element={<Feed apiUrl={process.env.REACT_APP_API_URL}/>}/>
          <Route path='/articles/title/:title' element={
            <>
              <Feed apiUrl={process.env.REACT_APP_API_URL} />
              <BackForwardLinks articles={this.state.articleProfiles}/>
            </>}
          />
          <Route exact path='/browse' element={<Browse articles={this.state.articleProfiles}/>}/>
        </Routes>
      </main>
    )
  }

  renderFooter() {
    return (
      <Footer />
    )
  }

  render() {
    return (
      <BrowserRouter>
        {this.renderHeader()}
        {this.renderNavColumn()}
        {this.renderBody()}
        {this.renderFooter()}
      </BrowserRouter>
    );
  }
}

export default App;
