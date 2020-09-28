import React, { useState } from "react";
import * as g from "../styled/globalStyles";
import { Link } from "react-router-dom";

function LinkList() {
  return (
    <ul>
      <li>
        <Link to={`/`}>Home</Link>
      </li>
      <li>
        <Link to={`/speakers`}>All Speakers</Link>
      </li>
      <li>
        <Link to={`/sessions/create`}>Create Session</Link>
      </li>
      <li>
        <Link to={`/events/create`}>Create Event</Link>
      </li>
      <li>
        <Link to={`/speakers/create`}>Create Speaker</Link>
      </li>
    </ul>
  );
}

function Header() {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <g.HeaderWrapperContainer>
      <g.Container>
        <g.Nav>
          <g.Logo>
            <Link to={`/`}>
              <img
                src="http://www.campsite.org/bundles/spoutlet/images/logo-campsite.png?v=dev"
                className="img-fluid"
                width="150"
                alt={"Campsite"}
              />
            </Link>
          </g.Logo>
          <LinkList />
        </g.Nav>
        <g.Toggle>
          <g.Logo>
            <Link to={`/`}>
              <img
                src="http://www.campsite.org/bundles/spoutlet/images/logo-campsite.png?v=dev"
                className="img-fluid"
                width="150"
              />
            </Link>
          </g.Logo>
          <i
            onClick={() => setIsMobile(!isMobile)}
            className={isMobile ? "fa fa-times" : "fa fa-bars"}
            aria-hidden="true"
          />
        </g.Toggle>
        {isMobile && (
          <g.NavMobile>
            <LinkList />
          </g.NavMobile>
        )}
      </g.Container>
    </g.HeaderWrapperContainer>
  );
}

export default Header;
