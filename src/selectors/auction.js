import {createSelector} from 'reselect';

const getRules = (rules, ruleID)=>rules;
const getRuleID = (rules, ruleID)=>ruleID
export const getRule = ()=> {
    return createSelector([getRules, getRuleID], (rules, ruleID)=> {
        return rules.find(r=>r.ruleID === ruleID);
    });
};

