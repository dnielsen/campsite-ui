import React from "react";
import { Link } from "react-router-dom";
import { StyledContainer, StyledFooter } from "../styled/styledCommon";

function Footer() {
  return (
    <StyledContainer>
      <StyledFooter>
        <p>
          {"Copyright © "}
          <Link to="/">Campsite.org</Link> {new Date().getFullYear()}
          {"."}
        </p>
      </StyledFooter>
    </StyledContainer>
  );
}

export default Footer;
