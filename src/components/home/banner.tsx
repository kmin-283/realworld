import React from 'react';

const Banner = ({appName}: {appName: string}) => {
  return (
    <div className={'banner'}>
      <div className={'container'}>
        <h1 className={'logo-font'}>
          {appName.toLowerCase()}
        </h1>
        <p>A place to share your knowledges.</p>
      </div>
    </div>
  );
};

export default Banner;