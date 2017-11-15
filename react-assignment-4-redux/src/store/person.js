import * as actionType from "../actionType";

const initialState = {
  person: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ADD_PERSON:
      return {
        ...state,
        person: state.person.concat({
          id: Math.random(),
          name: "Tanaya",
          age: Math.floor(Math.random() * 40)
        })
      };

    case actionType.DELETE_PERSON:
      const updatedArray = state.person.filter(
        person => person.id !== action.personId
      );
      return {
        ...state,
        person: updatedArray
      };
    default:
      return state;
  }
};

export default reducer;
