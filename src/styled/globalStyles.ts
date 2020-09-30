// import styled component
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    background: #ffffff;
  }
  
  a {
    text-decoration: none;
  }
  
  a:hover {
    text-decoration: underline;
  }
  
  a:visited {
    color: inherit;
  }
  
  ul {
    list-style: none;
  }
`;

export const Container = styled.div`
  @media (min-width: 767px) {
    max-width: 1140px;
    padding: 0 3em;
    margin: 0 auto;
  }
`;
