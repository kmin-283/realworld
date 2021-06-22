import React from 'react';
import ArticlePreview from "./articlePreview";
import {Article} from "../types";


const ArticleList = ({articles} : {articles: Article[]}) => {
  if (!articles) {
    return <div className={'article-preview'}>Loading...</div>
  }

  if (articles.length === 0) {
    return <div className={'article-preview'}>No articles are here... yet.</div>
  }

  console.log(articles);
  return (
    <div>
      {
        articles.map(article => {
          return (
            <ArticlePreview article={article} key={article.slug}/>
          );
        })
      }
    </div>
  );
}

export default ArticleList;