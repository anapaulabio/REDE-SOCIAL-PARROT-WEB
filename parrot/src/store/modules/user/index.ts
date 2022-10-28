import {createSlice} from "@reduxjs/toolkit"

interface UserState{
    token?:string;
    IndexId?: number;
    name?: string;
    email?: string;
    apartment?: number;
    isLogged: boolean;
}

const useReduce = createSlice({
    name: "user",
    initialState:{
        isLogged: false,
    } as UserState,
    reducers:{
        setUser(state, action){
            Object.assign(state,{
                token: action.payload.token,
                email: action.payload.email,
                IndexId: action.payload.IndexId,
                name: action.payload.name,
                apartment: action.payload.apartment,

                isLogged: true,
            });
        },

        removeUser(state, action){
            Object.assign(state,{
                token: undefined,
                email: undefined,
                IndexId: undefined,
                name: undefined,
                apartment: undefined,

                isLogged: false,
            });
        },
    },

});

export const {setUser, removeUser} = useReduce.actions;

export default useReduce.reducer;