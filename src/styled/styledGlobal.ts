import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  body {
    font-family: 'San Francisco', 'Raleway', 'Helvetica', sans-serif;
    margin: 0;
    background: #ffffff;
  }
  
  a {
    text-decoration: none;
    color: inherit;
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
  
  form {
    width: 100%;
    max-width: 500px;
    justify-content: center;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 1em;
    & > * {
    box-sizing: border-box;
    }
  }
`;
