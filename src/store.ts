import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import sessionReducer from "./store/session/sessionReducer";
import commentsReducer from "./store/comments/commentsReducer";
import authReducer from "./store/auth/authReducer";
import eventReducer from "./store/event/eventReducer";
import eventsReducer from "./store/events/eventsReducer";

const rootReducer = combineReducers({
  session: sessionReducer,
  comments: commentsReducer,
  auth: authReducer,
  event: eventReducer,
  events: eventsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
