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

function App() {
  const { loading } = useSelector((state: RootState) => state.auth);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authenticate());
  }, [dispatch]);

  if (loading) return null;
  return (
    <div>
      <Header />
      <main>
        <StyledContainer>
          <Switch>
            {/* TODO: add private routes */}
            <Route exact path="/speakers">
              <AllSpeakers />
            </Route>
            <Route exact path="/speakers/create">
              <CreateSpeaker />
            </Route>
            <Route exact path="/speakers/:id">
              <FullSpeaker />
            </Route>
            <Route exact path="/speakers/:id/edit">
              <EditSpeaker />
            </Route>
            <Route exact path="/sessions/create">
              <CreateSession />
            </Route>
            <Route exact path="/events/:eventId/sessions/:sessionId">
              <FullSession />
            </Route>
            <Route exact path="/events/:eventId/sessions/:sessionId/edit">
              <EditSession />
            </Route>
            <Route exact path="/events/create">
              <CreateEvent />
            </Route>
            <Route exact path="/events/:id">
              <FullEvent />
            </Route>
            <Route exact path="/events/:id/edit">
              <EditEvent />
            </Route>
            <Route exact path="/auth/sign-in">
              <SignIn />
            </Route>
            <Route exact path="/auth/sign-out">
              <SignOut />
            </Route>
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
