import React, { Component } from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';

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
    API_URL: "http://" + window.location.host + "/api",
    articleProfiles: [
      
    ]
  }

  componentDidMount() {
    // this.setApiUrl();
    this.setArticleProfiles();
  }

  setApiUrl() {
    let apiUrl = "http://" + window.location.host + "/api";
    this.setState(
      {
        API_URL: apiUrl
      }
    )
  }

  async setArticleProfiles() {
    let articleProfiles = await fetchArticleProfiles(this.state.API_URL);
    this.setState(
      {
        articleProfiles: articleProfiles
      }
    );
  }


  renderHeader() {
    return(
      <header>
        <Navbar apiUrl={this.state.API_URL}/>
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
          <Route path='/articles/title/:title' element={
            <>
              <Feed apiUrl={this.state.API_URL} />
              <BackForwardLinks articles={this.state.articleProfiles}/>
            </>}
          />
          <Route exact path='/browse' element={<Browse articles={this.state.articleProfiles}/>}/>
          <Route path='*' element={<Navigate to='/browse' replace />} />
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
    console.log("API URL = " + window.location.host + "/api");
    console.log(this.state.API_URL);
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
