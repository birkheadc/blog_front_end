import React, { Component } from 'react';
import './feed.css';

class Feed extends Component {

    renderNoArticles() {
        return(
            <h2>No articles found!</h2>
        ); 
    }

    renderSubtitle(subtitle) {
        if (subtitle === "") {
            return null;
        }
        return <h3>{subtitle}</h3>
    }

    renderArticles(articles) {
        return (
            articles.map(
                article =>
                <section key={article.id}>
                    <h2>{article.title}</h2>
                    {this.renderSubtitle(article.subtitle)}
                    <p>{article.body}</p>
                </section>
            )
        );
    }
    
    render() { 
        if (this.props.articles && this.props.articles.length > 0) {
            return this.renderArticles(this.props.articles);
        }
        return this.renderNoArticles();
    }
}
 
export default Feed;