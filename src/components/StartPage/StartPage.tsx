import * as React from 'react';
import "./StartPage.css";

export interface Props {
  phrase: string;
  font: string;
  shuffle: () => void;
  changeFont: () => void;
}

function StartPage({shuffle, changeFont, phrase, font}: Props) {

  const stylesheet = {
    page: {
      fontFamily: font
    },
    title: {
      fontSize: 40
    }
  };

  return (
    <div style={stylesheet.page} className="page">
        <h1 style={stylesheet.title}>React Typescript Template</h1>
        <hr/>
        <p>{phrase}</p>
        <div className="buttons">
          <button onClick={changeFont}>Change font</button>
          <button onClick={shuffle}>Change Phrase</button>
        </div>
    </div>
  );
}



export default StartPage;

