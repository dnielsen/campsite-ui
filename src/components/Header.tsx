import React, { useState } from "react";
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

const ROUTES: { text: string; href: string }[] = [
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
  },
];

function Header() {
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
            {ROUTES.map((r) => (
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
            {ROUTES.map((r) => (
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
