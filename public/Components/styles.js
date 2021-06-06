import styled from 'styled-components';

// HEADER
export const HeaderTitle = styled.h1`
  font-size: 1.6em;
  text-align: left;
  color: rgb(165, 1, 19);
  margin: 10px 19px;
`;

export const TabContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0px 8px;
`;

export const Tab = styled.h3`
  font-size: 1.2em;
  text-align; center;
  color: white;
  margin: 0 10px;
  padding: 2px 6px;
`;

export const TabActive = styled.h3`
  font-size: 1.2em;
  text-align; center;
  color: rgb(227, 0, 4);
  margin: 0 10px;
  border: solid;
  border-color: white;
  border-width: 1px;
  padding: 0px 6px;
`;

// MAIN
export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 80%;
  padding: 5px 20px;
`;

// CONTENT
export const DisplayContent = styled.div`
  font-size: 1em;
  color: white;
  margin: -1px 10px 10px 10px;
  border: solid;
  border-color: white;
  border-width: 2px;
  padding: 10px;
  display: flex;
  flex-direction: row;
`;

// SIDEBAR
export const SideLine = styled.div`
  background-image: linear-gradient(to bottom, rgba(227, 0, 4, 1), rgba(227, 0, 4, 0) );
  height: 1000px;
  width: 30px;
  position: absolute;
  left: 0px;
  top: 0px;
`;

// FOOTER
export const FooterContainer = styled.div`
  display: flex;
  margin: 0px 10px;
`;

export const FooterText = styled.div`
  font-size: 16px;
  color: lightblue;
  margin: 5px;
`;

export const FooterTextActive = styled.div`
  font-size: 16px;
  color: lightgreen;
  margin: 5px;
`;