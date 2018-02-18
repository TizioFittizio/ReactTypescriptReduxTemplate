import * as React from 'react';
import "./StartPage.css";

export interface Props {
  phrase: string;
  shuffle: () => void;
}

function StartPage({shuffle, phrase}: Props) {

  return (
    <div className="page">
        <h1>React Typescript Template</h1>
        <hr/>
        <p>{phrase}</p>
        <div className="buttons">
          <button>Change font</button>
          <button onClick={shuffle}>Change Phrase</button>
        </div>
    </div>
  );
}

export default StartPage;

