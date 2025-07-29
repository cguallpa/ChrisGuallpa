import { Children, ReactElement } from "react";
import { ContentLayout } from "./components/Layouts/content-layout";
import ListGroup from "./components/ListGroup";

const handleSelctItem = (item: string) => {
  console.log(item);
};

function App() {
  return <ContentLayout children="" title="Chris Guallpa" />;
}
export default App;

/*
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/
