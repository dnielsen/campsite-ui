import styled from "styled-components";

export const StyledNav = styled.nav`
  width: 100%;
  display: flex;
`;

export const StyledNavItemsWrapper = styled.div`
  display: flex;
  justify-self: flex-end;
  align-items: center;
  @media (max-width: 767px) {
    display: none;
  }
`;

export const StyledNavItem = styled.li`
  margin-right: 1em;
  font-weight: 500;
`;

export const StyledUl = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 2em;

  @media (max-width: 767px) {
    display: block;
  }
`;

export const StyledHeader = styled.header`
  border-bottom: 1px solid #ccc;
`;

export const StyledNavLogoWrapper = styled.div`
  display: flex;
  margin: 0;
  align-self: flex-start;
  img {
    width: 150px;
  }
`;

export const StyledBurgerButton = styled.button`
  display: none;
  @media (max-width: 767px) {
    display: flex;
    background: #1bf;
    &:hover {
      background: #1af;
    }
    outline: none;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    align-self: center;
    border: none;
    cursor: pointer;
    padding: 1em;
    width: 3.5em;
    height: 3.5em;
    i {
      font-size: 1.5em;
      width: 1em;
      height: 1em;
      color: white;
    }
    margin-right: 1.5em;
  }
`;

export const StyledMobileNav = styled.nav`
  display: none;
  @media (max-width: 767px) {
    display: flex;
    width: 100%;
    align-self: center;
    justify-content: center;
  }
`;

export const StyledMobileItem = styled.li`
  display: block;
  width: 100%;
  text-align: center;
  text-transform: capitalize;
  font-weight: 500;
  font-size: 1.3em;
  margin: 0 auto 0.7em;
  a {
    padding: 0.35em;
  }
`;

export const StyledMobileUl = styled.ul`
  margin-top: 1em;
  padding: 0;
`;
