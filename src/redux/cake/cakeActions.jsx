import { BUY_CAKE } from "./cakeTypes"

//Action creator is a function that returns action as an obj
export const buyCake = (number = 1) => {
    //below is an action which is an obj
    return {
        type: BUY_CAKE,
        payload: number
    }
}