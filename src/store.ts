import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import sessionReducer from "./store/session/sessionReducer";
import authReducer from "./store/auth/authReducer";
import eventReducer from "./store/event/eventReducer";
import speakerReducer from "./store/speaker/speakerReducer";

const rootReducer = combineReducers({
  session: sessionReducer,
  auth: authReducer,
  event: eventReducer,
  speaker: speakerReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
