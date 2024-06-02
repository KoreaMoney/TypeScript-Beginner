"use client";
import { createContext, useReducer } from "react";
/**
 * useReducer에서 state같은 경우 state항목에 들어가는 부분에 대해 type을 정의하면 됩니다.
 * 그리고 dispatch같은 경우 action을 행하기 때문에 React.Dispatch에서 ActionType을 정의하여 해당 부분에 대한 type을 정의합니다.
 */
interface StateType {
    theme: string;
    fontSize: number;
}

// type ActionType = {
//   type: "CHANGE_THEME" | "CHANGE_FONTSIZE";
//   payload?: number;
// };

//Discriminated Unions
interface ColorActionType {
    type: "CHANGE_THEME";
}
type SizeActionType = {
    type: "CHANGE_FONTSIZE";
    payload: number;
};

type ActionType = ColorActionType | SizeActionType;

const INITIAL_STATE = {
    theme: "dark",
    fontSize: 20,
};

export const ThemeContext = createContext<{
    state: StateType;
    dispatch: React.Dispatch<ActionType>;
}>({
    state: INITIAL_STATE,
    dispatch: () => {},
});

const reducer = (state: StateType, action: ActionType) => {
    switch (action.type) {
        case "CHANGE_THEME":
            return {
                ...state,
                theme: state.theme === "dark" ? "light" : "dark",
            };
        case "CHANGE_FONTSIZE":
            return {
                ...state,
                fontSize: action.payload,
            };

        default:
            return state;
    }
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

    return <ThemeContext.Provider value={{ state, dispatch }}>{children}</ThemeContext.Provider>;
};
