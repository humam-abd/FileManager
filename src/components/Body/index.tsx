import React, { FC, Fragment, ReactNode } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { BasicBreadcrumbs } from "../Breadcrumb";
import { StyledBox } from "./index.styled";

interface BodyProps {
  children: ReactNode;
}

export const Body: FC<BodyProps> = ({ children }) => (
  <Fragment>
    <CssBaseline />
    <Container>
      <StyledBox>
        <BasicBreadcrumbs />
        {children}
      </StyledBox>
    </Container>
  </Fragment>
);
