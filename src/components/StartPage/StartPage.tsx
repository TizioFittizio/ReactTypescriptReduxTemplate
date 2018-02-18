import * as React from 'react';
import "./StartPage.css";
import { Link } from 'react-router-dom';

interface Props {
  phrase: string;
  font: string;
  shuffle: () => void;
  changeFont: () => void;
}

export default class StartPage extends React.Component<Props, null>{

  constructor(props: Props){
    super(props);
  }

  

  render(){

    const style = {
      page: {
        fontFamily: this.props.font
      },
      title: {
        fontSize: 40
      }
    };

    return (
      <div style={style.page} className="page">
          <h1 style={style.title}>React Typescript Template</h1>
          <hr/>
          <p>{this.props.phrase}</p>
          <div className="buttons">
            <button onClick={this.props.changeFont}>Change font</button>
            <button onClick={this.props.shuffle}>Change Phrase</button>
            <Link to='/newPage/newPage'>Change Page</Link>
          </div>
      </div>
    );
    
  }
  
}
