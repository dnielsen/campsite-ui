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

interface Route {
  text: string;
  href: string;
  // true: visible only when authenticated
  // false: visible only when unauthenticated
  // null: visible always
  auth?: boolean;
}

const ROUTES: Route[] = [
  {
    text: "Speakers",
    href: "/speakers",
  },
  {
    text: "Create session",
    href: "/sessions/create",
  },
  {
    text: "Create event",
    href: "/events/create",
  },
  {
    text: "Create speaker",
    href: "/speakers/create",
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

function Header() {
  const [routes, setRoutes] = useState<Route[]>(ROUTES);
  const { data: authData } = useSelector((state: RootState) => state.auth);

  // TODO: refactor, currently there are 2 navigations for styling purposes,
  // although there should be just 1. We don't know how to style the navigation
  // in CSS correctly so that it's responsive.
  useEffect(() => {
    setRoutes(
      ROUTES.filter(
        (r) =>
          r.auth === undefined ||
          (r.auth && authData) ||
          (!r.auth && !authData),
      ),
    );
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
