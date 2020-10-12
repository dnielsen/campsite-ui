import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import FullSpeaker from "./pages/FullSpeaker";
import FullSession from "./pages/FullSession";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AllSpeakers from "./pages/AllSpeakers";
import CreateSpeaker from "./pages/CreateSpeaker";
import CreateSession from "./pages/CreateSession";
import CreateEvent from "./pages/CreateEvent";
import Home from "./pages/Home";
import FullEvent from "./pages/FullEvent";
import EditEvent from "./pages/EditEvent";
import EditSpeaker from "./pages/EditSpeaker";
import EditSession from "./pages/EditSession";
import { StyledContainer } from "./styled/styledCommon";
import SignIn from "./pages/SignIn";
import SignOut from "./pages/SignOut";
import { useDispatch, useSelector } from "react-redux";
import { authenticate } from "./store/auth/authActions";
import { RootState } from "./store";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const { loading } = useSelector((state: RootState) => state.auth);

  const dispatch = useDispatch();
  useEffect(() => {
    if (!loading) dispatch(authenticate());
  }, [loading, dispatch]);

  if (loading) return null;
  return (
    <div>
      <Header />
      <main>
        <StyledContainer>
          <Switch>
            {/* PUBLIC ROUTES (besides auth routes) */}
            <Route exact path="/speakers">
              <AllSpeakers />
            </Route>
            <Route exact path="/speakers/:id">
              <FullSpeaker />
            </Route>
            <Route exact path="/events/:eventId/sessions/:sessionId">
              <FullSession />
            </Route>
            <Route exact path="/events/:id">
              <FullEvent />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            {/* PRIVATE ROUTES (besides auth routes) */}
            <PrivateRoute exact path="/speakers/create">
              <CreateSpeaker />
            </PrivateRoute>
            <PrivateRoute exact path="/speakers/:id/edit">
              <EditSpeaker />
            </PrivateRoute>
            <PrivateRoute exact path="/sessions/create">
              <CreateSession />
            </PrivateRoute>
            <PrivateRoute
              exact
              path="/events/:eventId/sessions/:sessionId/edit"
            >
              <EditSession />
            </PrivateRoute>
            <PrivateRoute exact path="/events/create">
              <CreateEvent />
            </PrivateRoute>
            <PrivateRoute exact path="/events/:id/edit">
              <EditEvent />
            </PrivateRoute>
            {/* AUTH ROUTES */}
            <PrivateRoute exact path="/auth/sign-out">
              <SignOut />
            </PrivateRoute>
            <Route exact path="/auth/sign-in">
              <SignIn />
            </Route>
          </Switch>
        </StyledContainer>
      </main>
      <Footer />
    </div>
  );
}

export default App;
