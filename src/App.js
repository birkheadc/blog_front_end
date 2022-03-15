import React, { Component } from 'react';
import './App.css';
import Navbar from './components/sections/navbar/navbar';
import Feed from './components/sections/feed/feed';
import NavColumn from './components/sections/navcolumn/navcolumn';
import Footer from './components/sections/footer/footer';
import fetchArticles from './api/fetchArticles/fetchArticles';

class App extends Component {

  state = {
    articles: [
      
    ]
  }

  componentDidMount() {
    this.setArticles();
    // this.setState(
    //   {
    //     articles: articles
    //   }
    // );
  }

  async setArticles() {
    let articles = await fetchArticles()
    this.setState(
      {
        articles: articles
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
      <NavColumn />
    );
  }

  renderBody() {
    return(
      <main>
        <Feed articles={this.state.articles}/>
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
      <>
      {this.renderHeader()}
      {this.renderNavColumn()}
      {this.renderBody()}
      {this.renderFooter()}
      </>
    );
  }
}

export default App;
