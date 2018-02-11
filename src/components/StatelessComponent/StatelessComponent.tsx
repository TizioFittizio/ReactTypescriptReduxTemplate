import * as React from "react";
import './StatelessComponent.css';

interface Props {
    name: string;
}

export default function Hello({name}: Props){

    return (
        <div>
            <p>{name}</p>
        </div>
    );

}
