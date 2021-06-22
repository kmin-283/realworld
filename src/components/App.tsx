import React from 'react';
import { useSelector } from "react-redux";
import './App.css';
import Header from "./header";
import Home from './home';

function App() {
  const { appName } = useSelector((state: { appName: string }) => state);
  
  return (
    <div>
      <Header appName={appName} />
      <Home />
    </div>
  );
}

export default App;
// export default connect(mapStateToProps, () => ({}))(App);
