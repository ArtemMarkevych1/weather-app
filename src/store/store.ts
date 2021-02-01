import { applyMiddleware, createStore } from 'redux';
import * as fromRoot from './index.reducer';
import thunk from 'redux-thunk';
import { composeEnhancers } from './utils'

function configureStore() {
    const enhancer = composeEnhancers(applyMiddleware(thunk));
    return createStore(fromRoot.reducers, enhancer);
}

export const store = configureStore();
