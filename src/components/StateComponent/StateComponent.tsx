import * as React from "react";
import './StateComponent.css';

interface Props {
    value: string;
}

interface State {
    value: string;
}

export default class StateComponent extends React.Component<Props, State> {

    constructor(props: Props){
        super(props);
        this.state = {
            value: props.value
        };
    }
    
    onTextChange(event: any){
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <div>
                <input type="text" onChange={e => this.onTextChange(e)} value={this.state.value}/>
            </div>
        );
    }
}