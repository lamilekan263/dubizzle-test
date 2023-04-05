import React, { useEffect } from "react";
import {  useDispatch, useSelector } from 'react-redux';
import styled from "styled-components";


import GistList from "./components/GistList";
import Header from "./components/Header";
import GlobalStyles from "./GlobalStyle";

import { fetchGist } from "./Redux/slice/gistSlice";
import InfoComponent from "./components/InfoComponent";





function App () {



    const {loading, gistList } = useSelector((state) => state.gistList);
 
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchGist())
  },[dispatch])

 

  return (
    <Wrapper className="App" data-testid="app">
      <Header
      />
      { loading ? (
       <InfoComponent textLabel="Loading..."/>
      ) : gistList?.length <= 0 ? (
          <InfoComponent textLabel="No Gist found."/>
      ) : (
        <GistList gists={ gistList } />
      ) }
      <GlobalStyles />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-size: 14px;
  line-height: 1.5;
`;

export default App;