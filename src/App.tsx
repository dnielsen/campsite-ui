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
import SignUp from "./pages/SignUp";

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
            {/* EVENT ROUTES */}
            <PrivateRoute exact path="/events/create">
              <CreateEvent />
            </PrivateRoute>
            <PrivateRoute exact path="/events/:id/edit">
              <EditEvent />
            </PrivateRoute>
            <Route exact path="/events/:id">
              <FullEvent />
            </Route>
            {/* SESSION ROUTES*/}
            <Route exact path="/events/:eventId/sessions/:sessionId">
              <FullSession />
            </Route>
            <PrivateRoute exact path="/sessions/create">
              <CreateSession />
            </PrivateRoute>
            <PrivateRoute
              exact
              path="/events/:eventId/sessions/:sessionId/edit"
            >
              <EditSession />
            </PrivateRoute>
            {/* SPEAKER ROUTES */}
            <PrivateRoute exact path="/speakers/create">
              <CreateSpeaker />
            </PrivateRoute>
            <PrivateRoute exact path="/speakers/:id/edit">
              <EditSpeaker />
            </PrivateRoute>
            <Route exact path="/speakers">
              <AllSpeakers />
            </Route>
            <Route exact path="/speakers/:id">
              <FullSpeaker />
            </Route>
            {/* AUTH ROUTES */}
            <PrivateRoute exact path="/auth/sign-out">
              <SignOut />
            </PrivateRoute>
            <Route exact path="/auth/sign-in">
              <SignIn />
            </Route>
            <Route exact path="/auth/sign-up">
              <SignUp />
            </Route>
            {/* HOME ROUTE */}
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </StyledContainer>
      </main>
      <Footer />
    </div>
  );
}

export default App;
