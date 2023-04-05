import React, { useEffect } from "react";
import {  useDispatch, useSelector } from 'react-redux';
import styled from "styled-components";


import GistList from "./components/GistList";
import Header from "./components/Header";
import GlobalStyles from "./GlobalStyle";

import { fetchGist, fetchGistListForUser } from "./Redux/slice/gistSlice";
import InfoComponent from "./components/InfoComponent";
import _ from "lodash";


function App () {

  // gist list data
  const {loading, gistList } = useSelector((state) => state.gistList);
 
  const dispatch = useDispatch();

  // dispatching fetch gist
  useEffect(() => {
    dispatch(fetchGist())
  },[dispatch])


  // create a debounce while on pressing each letters
  const delayedQuery = _.debounce(q => dispatch(fetchGistListForUser(q)), 500, {
    trailing:true
  });

// handle user search input that dispatch the fetchGist
  const handleSearch = async (e) => {
    const { value } = e.target;
    try {
      if (value === '') {
        dispatch(fetchGist());
      } else {
        delayedQuery(value);
      }
      
    } catch (err) { console.log("err"); }
  };

  return (
    <Wrapper className="App" data-testid="app">
      <Header
        handleSearch={handleSearch}
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