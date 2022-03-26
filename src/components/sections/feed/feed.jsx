import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import './feed.css';

import fetchArticleByTitle from '../../../api/fetchArticleByTitle/fetchArticleByTitle';

function Feed(props) {

    const location = useLocation();
    const { title } = useParams();

    const [article, setArticle] = useState();
    const [isLoading, setLoading] = useState();

    // Fetch and set article on update.
    useEffect(() => {
        const getArticle = async () => {
            setLoading(true);
            let article = await fetchArticleByTitle(props.apiUrl, title);
            if (article.title) {
                setArticle(article);
            }
            setLoading(false);
        };
        if ((!article && title) || (article.title !== title)) {
            getArticle();
        }
    }, [article, props.apiUrl, title, location]);

    const renderLoading = function() {
        return(
            <div className='article'>
                <h2>Loading...</h2>
            </div>
        )
    }

    const renderNoFound = function() {
        return(
            <div className='article'>
                <h2>No article found!</h2>
            </div>
        );
    }

    const renderArticle = function() {
        return(
            <div className='article'>
                <h2>{article.title}</h2>
                <h3>{article.subTitle}</h3>
                <p className='article-body'>{article.body}</p>
            </div>
        );
    }

    if (isLoading) {
        return renderLoading();
    }

    if (!article) {
        return renderNoFound();
    }

    return(
        <>
        {renderArticle()}
        </>
    );
}
 
export default Feed;