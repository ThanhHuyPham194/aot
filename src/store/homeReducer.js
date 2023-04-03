const initialValue = {
    data: [],
};

const homeReducer = (state = initialValue, action) => {
    switch (action.type) {
        case 'GET_HOME':
            return {
                ...state,
                data: action.payload
            };
            default:
                return state;
    }
 
};

export default homeReducer;