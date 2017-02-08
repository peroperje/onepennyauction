/**
 * Created by petar on 2/5/17.
 */
import {SET_CUSER} from '../constants/cUserActions'

const cUser = (cUser=null,action)=>{
        switch (action.type){
            case SET_CUSER:
                return action.payload.cUser;
            default:
                return cUser;
        }
}

export default cUser;