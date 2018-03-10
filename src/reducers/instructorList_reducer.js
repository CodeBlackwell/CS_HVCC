//@TODO: FETCH_INSTRUCTORS
import { FETCH_INSTRUCTORS } from '../constants/instructorPage_constants'
//@TODO: initial State
const initialState = {
    instructors: [{ name: 'Mr. Stenard' }, { name: 'Mr. Palace'}]
};

const actionHandlers = {
    [FETCH_INSTRUCTORS] (state, action) {
        const {
            payload: {
                //@TODO: look at what the payload will look like
                data: instructors
            }
        }  = action;

        return Object.assign({}, state, {
            instructors
        });
    }
};


// Setting up the reducer this way is an optimization for constant time lookup on action handlers
const instructorPageReducer = function (state = initialState, action) {
    if (actionHandlers[action.type] != null) {
        return actionHandlers[action.type] (state, action)
    }
    return state
};
export default instructorPageReducer
