const INITIAL_STATE = {
  statePersonal: '',
  stateProfessional: '',
};

const myReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'PERSONAL_ACTION':
    return {
      ...state,
      statePersonal: action.state,
    };
  case 'PROFESSIONAL_ACTION':
    return {
      ...state,
      stateProfessional: action.state,
    };
  default:
    return state;
  }
};

export default myReducer;
