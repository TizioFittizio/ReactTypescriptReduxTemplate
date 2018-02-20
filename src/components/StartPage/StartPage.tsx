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
      phrase: {
        fontFamily: this.props.font
      },
    };

    return (
      <div>
          <p style={style.phrase}>{this.props.phrase}</p>
          <div className="row">
            <div className="col-12 col-sm-4 col-md-3 col-lg-2">
              <button 
                type="button" 
                className="btn btn-outline-primary btn-block" 
                onClick={this.props.changeFont}
              >
                Change font
              </button>
            </div>
            <div className="col-12 col-sm-4 col-md-3 col-lg-2">
              <button 
                type="button" 
                className="btn btn-outline-primary btn-block" 
                onClick={this.props.shuffle}
              >
                Change Phrase
              </button>
            </div>
            <div className="col-12 col-sm-4 col-md-3 col-lg-2">
              <Link 
                to='/newPage/strawberry'
                className="btn btn-outline-primary btn-block" 
              >
                Change Page
              </Link>
            </div>
          </div>
      </div>
    );
    
  }
  
}
