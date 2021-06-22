import React from 'react';
import {useSelector} from "react-redux";
import ArticleList from '../articleList';
import {Article} from "../../types";

const MainView = () => {
  const { articles } = useSelector((state: { articles: Article[] }) => state)
  const ulNav = 'nav nav-pills outline-active';
  const navLink = 'nav-link active';

  return (
    <div className={'col-mg-9'}>
      <div className={'feed-toggle'}>
        <ul className={ulNav}>
          <li className={'nav-item'}>
            <a href={''} className={navLink}>
              Global Feed
            </a>
          </li>
        </ul>
      </div>
      <ArticleList articles={articles} />
    </div>
  );
};

export default MainView;