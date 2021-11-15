import * as Actions from './../actions/index';

export interface User {
  firstname: string;
  lastname: string;
  username: string;
  email: string;
}

export interface UserAction {
  type: string;
  payload: {
    token: string;
    user: User;
  };
}

type ActionType = UserAction;

export interface InitialState {
  user: User | null;
  token: string | null;
}

const initialState: InitialState = {
  user: null,
  token: null,
};

const reducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case Actions.AuthAction.SIGNUP:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
      };
    case Actions.AuthAction.LOGIN:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
      };
    default:
      return state;
  }
};

export default reducer;
