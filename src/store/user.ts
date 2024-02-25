import { defineStore } from "pinia";

export interface IState {
    loggedin: boolean;
}

export const useUserStore = defineStore("user", {
    state: (): IState => ({
        loggedin: false
    }),
    actions: {
        setState(isLoggedin: boolean) {
            this.loggedin = isLoggedin;
        }
    }
});