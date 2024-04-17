import { createSlice } from "@reduxjs/toolkit";

const AddUsers = createSlice({
    name: "user",
    initialState: [],
    reducers: {
        AddMode: (state, action) => {
            state.push(action.payload);
        },
        DeleteMode: (state, action) => {
            const {id} = action.payload;
            const Uuser = state.find(user=>user.id==id);
            if(Uuser){
               return state.filter(user=>user.id !==id);
            }
            
        },
        UpdateMode: (state, action) => {
           
            const {id,first,last,mobile,address} = action.payload;
            const Uuser = state.find(user=>user.id==id);
            // console.log(Uuser);
            if(Uuser){
                Uuser.first = first;
                Uuser.last = last;
                Uuser.mobile = mobile;
                Uuser.address = address;
            }
        },
    }
});

export const { AddMode, DeleteMode, UpdateMode } = AddUsers.actions;
export default AddUsers.reducer;