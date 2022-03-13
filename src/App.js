import React, { Component } from 'react';
import './App.css';
import Navbar from './components/sections/navbar/navbar';
import Feed from './components/sections/feed/feed';
import NavColumn from './components/sections/navcolumn/navcolumn';
import Footer from './components/sections/footer/footer';

class App extends Component {

  state = {
    articles: [
      {
        id: 0,
        title: "The places I've been",
        body: "I've been to a few places."
      },
      {
        id: 1,
        title: "The people I've seen",
        body: "I've seen quite a few people!"
      },
      {
        id: 2,
        title: "The food I've eaten",
        body: "I'm lactose intolerant."
      }
    ]
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
