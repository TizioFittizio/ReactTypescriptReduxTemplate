import * as React from "react";
import './RoutePage.css';
import { RouteComponentProps } from "react-router";

interface Props extends RouteComponentProps<StateComponent> {
    value: string;
    match: any;
}

interface State {
    value: string;
}

export default class StateComponent extends React.Component<Props, State> {
    
    constructor(props: Props){
        super(props);
        this.state = {
            value: props.match.params.value
        };
    }
    
    onTextChange(event: any){
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col form-group">
                        <input type="text" className="formControl" onChange={e => this.onTextChange(e)} value={this.state.value}/>
                        <span> 🡠 The initial value was received as an argument from router! Check the URL!</span>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <span>Field updated in state 🡢 {this.state.value}</span>
                    </div>
                </div>
            </div>
        );
    }
}