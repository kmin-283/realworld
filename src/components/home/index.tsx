import React, {useEffect} from 'react';
import Banner from './banner';
import {useDispatch, useSelector} from "react-redux";
import MainView from './mainView';
import agent from "../../agent";

const Promise = global.Promise;



const Home = () => {
  const { appName } = useSelector((state: { appName: string }) => state);
  const dispatch = useDispatch();
  const containerPage = 'container page';
  const onLoad = (payload: any) => dispatch({
    type: 'HOME_PAGE_LOADED',
    payload
  });
  useEffect(() => {
    onLoad(agent.Articles.all());
  }, []);
  return (
    <div className={'home-page'}>
      <Banner appName={appName} />
      <div className={containerPage}>
        <div className={'row'}>
          <MainView />
          <div className={'col-md-3'}>
            <div className={'sidebar'}>
              <p>Popular Tags</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;