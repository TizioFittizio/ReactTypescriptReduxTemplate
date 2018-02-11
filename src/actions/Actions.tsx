import * as constants from "../constants";

export interface ShuffleAction {
    type: constants.SHUFFLE;
    payload: string;
}

export function shuffle(): ShuffleAction {
    console.log("!");
    return {
        type: constants.SHUFFLE,
        payload: "!"
    };
}

export interface ChangeFontAction {
    type: constants.CHANGE_FONT;
    payload: string;
}

export function changeFont(): ChangeFontAction {
    return {
        type: constants.CHANGE_FONT,
        payload: "!!!"
    };
}

export type ContainerAction = ShuffleAction | ChangeFontAction;