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
        console.log(this.props, this.state);
        this.state = {
            value: props.match.params.value
        };
    }
    
    onTextChange(event: any){
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <div className="page">
                <input type="text" onChange={e => this.onTextChange(e)} value={this.state.value}/>
                <span> 🡠 The initial value was received as an argument from router!</span>
                <p>Field updated in state 🡢 {this.state.value}</p>
            </div>
        );
    }
}