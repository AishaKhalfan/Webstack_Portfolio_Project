import React from "react";
import "../styles.css";
import styled from "styled-components";
import AccountBox from "../components/accountBox/index";


const AppBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function AppContainerPage() {
  return (
  <AppBox>
    <AccountBox />
  </AppBox>
  );
}
export default AppContainerPage;