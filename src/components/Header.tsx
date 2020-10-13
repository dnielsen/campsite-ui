import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  StyledBurgerButton,
  StyledHeader,
  StyledMobileItem,
  StyledMobileNav,
  StyledMobileUl,
  StyledNav,
  StyledNavItem,
  StyledNavItemsWrapper,
  StyledNavLogoWrapper,
  StyledUl,
} from "../styled/styledHeader";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { AuthData } from "../store/auth/authReducer";

interface Route {
  text: string;
  href: string;
  // true: visible only when authenticated
  // false: visible only when unauthenticated
  // null: visible always
  auth: boolean | null;
}

const ROUTES: Route[] = [
  {
    text: "Speakers",
    href: "/speakers",
    auth: null,
  },
  {
    text: "Create session",
    href: "/sessions/create",
    auth: null,
  },
  {
    text: "Create event",
    href: "/events/create",
    auth: null,
  },
  {
    text: "Create speaker",
    href: "/speakers/create",
    auth: null,
  },
  {
    text: "Sign in",
    href: "/auth/sign-in",
    auth: false,
  },
  {
    text: "Sign out",
    href: "/auth/sign-out",
    auth: true,
  },
];

const UNAUTHENTICATED_ROUTES = ROUTES.filter(
  (r) => r.auth === null || r.auth === false,
);
const AUTHENTICATED_ROUTES = ROUTES.filter(
  (r) => r.auth === null || r.auth === true,
);

function getRoutes(authData: AuthData) {
  return authData ? AUTHENTICATED_ROUTES : UNAUTHENTICATED_ROUTES;
}

function Header() {
  const { data: authData } = useSelector((state: RootState) => state.auth);
  const [routes, setRoutes] = useState<Route[]>(getRoutes(authData));

  // TODO: refactor, currently there are 2 navigations for styling purposes,
  // although there should be just 1. We don't know how to style the navigation
  // in CSS correctly so that it's responsive.
  useEffect(() => {
    setRoutes(getRoutes(authData));
  }, [authData]);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <StyledHeader>
      <StyledNav>
        <StyledUl>
          <StyledNavLogoWrapper>
            <li>
              <Link to={`/`}>
                <img
                  src="http://www.campsite.org/bundles/spoutlet/images/logo-campsite.png?v=dev"
                  alt={"Campsite"}
                />
              </Link>
            </li>
          </StyledNavLogoWrapper>
          <StyledNavItemsWrapper>
            {routes.map((r) => (
              <StyledNavItem key={r.href}>
                <Link to={r.href}>{r.text}</Link>
              </StyledNavItem>
            ))}
          </StyledNavItemsWrapper>
        </StyledUl>
        <StyledBurgerButton
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <i className={`fa ${isMobileMenuOpen ? "fa-times" : "fa-bars"}`} />
        </StyledBurgerButton>
      </StyledNav>
      {isMobileMenuOpen && (
        <StyledMobileNav>
          <StyledMobileUl>
            {routes.map((r) => (
              <StyledMobileItem key={r.href}>
                <Link to={r.href}>{r.text}</Link>
              </StyledMobileItem>
            ))}
          </StyledMobileUl>
        </StyledMobileNav>
      )}
    </StyledHeader>
  );
}

export default Header;
