import { createSlice} from '@reduxjs/toolkit';

const initialComposeState={
    message: [],
    RecieveMessage: [],
    showCompose: true,
    count: 0,
    RecieveCount: 0,
    showEmail: true,
    openMessage: null,
    SentShow: false,
    RecieveShow: false,
    sendEmail: '',
}

const composeSlice=createSlice({
    name: 'compose',
    initialState: initialComposeState,
    reducers: {
        RecieveMessage(state,action){
           state.RecieveMessage.push(...action.payload);
           console.log("RecieveMessage",action.payload);
           state.RecieveCount=action.payload.length;
           state.RecieveShow=true;
        },
        setRecieve(state,action){
           state.RecieveMessage=action.payload;
           const ReCount=action.payload.length;
           state.RecieveCount=ReCount;
        },
        setCompose(state,action){
            state.message=action.payload;
            const getCount=action.payload.length;
             state.count=getCount;
        },
        Showcompose(state,action){
            state.showCompose=!state.showCompose;
        },
        sendMessage(state,action){
           //console.log("sendSlice",action.payload)
           state.message.push(action.payload);
           state.sendEmail=action.payload.reciept;
           console.log("sendEmail",action.payload.reciept);
           state.count=action.payload.length;
        },
        deleteCompose(state,action){
            const id=action.payload.id;
            const reqindex=state.message.findIndex((item)=>item.id===id);
            state.count=state.count-1;
            state.message.splice(reqindex,1);
        },
        deleteRecieveCompose(state,action){
           const id=action.payload.id;
           const reqindex=state.RecieveMessage.findIndex((item)=>item.id);
           state.RecieveCount=state.RecieveCount-1;
           state.RecieveMessage.splice(reqindex,1);
        },
        ShowEmail(state,action){
           state.showEmail=!state.showEmail
        },
        openMessage(state,action){
            console.log("openMessage",action.payload);
          state.openMessage=action.payload;
        },
        SentShowMessage(state,action){
           state.SentShow=true;
           state.RecieveShow=false;
        },
        RecieveShowMessage(state,action){
            state.RecieveShow=true;
            state.SentShow=false;
        }

    }
})
export const composeAction=composeSlice.actions;

export default composeSlice.reducer;