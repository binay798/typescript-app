import { ReactChildren, ReactChild } from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import authReducer, {
  InitialState as AuthState,
} from './reducers/auth.reducer';

export interface RootState {
  auth: AuthState;
}
const rootReducer = combineReducers<RootState>({
  auth: authReducer,
});
interface StoreProps {
  children: ReactChild | ReactChildren;
}
const store = createStore(rootReducer, applyMiddleware(thunk));

function Store(props: StoreProps): JSX.Element {
  return <Provider store={store}>{props.children}</Provider>;
}

export default Store;
