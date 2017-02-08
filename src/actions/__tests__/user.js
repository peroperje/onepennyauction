/**
 * Created by peroperje on 27.1.17..
 */
import {accountDecrease} from '../user'
import {ACCONT_DECREASE} from '../../constants/UserAction'

describe('User actions test',()=>{
    it('should create an action to decrease',()=>{
        let userID = 46654658;
        let amount= 15;
        let returnOBJ = {
            type : ACCONT_DECREASE,
            payload : {
                userID:userID,
                amount: amount
            }
        };

        expect(accountDecrease(userID,amount)).toEqual(returnOBJ);
    });
});
