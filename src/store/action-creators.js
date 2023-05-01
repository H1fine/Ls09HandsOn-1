import { TYPE_DECREMENT, TYPE_INCREMENT } from "./action-types";

export const decrement = () => ({
    type: TYPE_DECREMENT,
});

export const increment = () => ({
    type: TYPE_INCREMENT,
});