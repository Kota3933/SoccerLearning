'use client';
import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <p>&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
        <Links>
          <StyledLink href="#">Privacy Policy</StyledLink>
          <StyledLink href="#">Terms of Service</StyledLink>
        </Links>
      </Container>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px 0;
  text-align: center;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Links = styled.div`
  margin-top: 10px;
`;

const StyledLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin: 0 15px;
`;

export default Footer;
