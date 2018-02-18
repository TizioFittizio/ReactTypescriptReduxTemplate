import * as React from 'react';
import "./StartPage.css";
import { Link } from 'react-router-dom';

interface Props {
  phrase: string;
  font: string;
  shuffle: () => void;
  changeFont: () => void;
}

export default function StartPage({ phrase, font, shuffle, changeFont }: Props) {


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
      <hr />
      <p>{phrase}</p>
      <div className="buttons">
        <button onClick={changeFont}>Change font</button>
        <button onClick={shuffle}>Change Phrase</button>
        <Link to='/newPage/newPage'>Change Page</Link>
      </div>
    </div>
  );

}
