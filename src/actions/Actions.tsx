import * as constants from "../constants";
import axios from "axios";

export interface ShuffleAction {
    type: constants.SHUFFLE;
    payload: string;
}

export function shuffle(): ShuffleAction {
    return {
        type: constants.SHUFFLE,
        payload: Math.random() * 100 + ""
    };
}

export interface ChangeFontAction {
    type: constants.CHANGE_FONT;
    payload: string;
}

export function changeFont(): ChangeFontAction {
    return {
        type: constants.CHANGE_FONT,
        payload: constants.FONTS[~~(Math.random() * constants.FONTS.length)]
    };
}

export interface FetchDataAction {
    type: constants.FETCH_DATA;
    payload: any;
}


export function fetchData(): any {
    return async (dispatch: any) => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
        console.log(response);
        dispatch({
            type: constants.FETCH_DATA,
            payload: response
        });
    };
}

export type ContainerAction = ShuffleAction | ChangeFontAction | any;