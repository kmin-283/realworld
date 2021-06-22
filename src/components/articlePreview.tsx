import React from 'react';
import { Article } from '../types';

const ArticlePreview = ({article} : {article: Article}) => {
  const pullButton = 'btn btn-sm btn-outline-primary';
  const tagAttr = 'tag-default tag-pill tag-outline';

  return (
    <div className={'article-preview'}>
      <div className={'article-meta'}>
        <a>
          <img src={article.author.image} />
        </a>
        <div className={'info'}>
          <a className={'author'}>
            {article.author.username}
          </a>
          <span className={'date'}>
            {new Date(article.createdAt).toDateString()}
          </span>
        </div>
        <div className={'pull-xs-right'}>
          <button className={pullButton} >
            <i className={'ion-heart'}></i>
            {article.favoritesCount}
          </button>
        </div>
      </div>

      <a href={`/article/${article.slug}`} className={'preview-link'}>
        <h1>{article.title}</h1>
        <p>{article.description}</p>
        <span>Read more...</span>
        <ul className={'tag-list'}>
          {
            article.tagList.map((tag: string)  => {
              return (
                <li className={tagAttr} key={tag}>
                  {tag}
                </li>
              )
            })
          }
        </ul>
      </a>
    </div>
  );
};

export default ArticlePreview;