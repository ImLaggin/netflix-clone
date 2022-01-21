import React from "react";
import "./App.css";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";

//aws
import Amplify from "aws-amplify";

import awsconfig from "./aws-exports";
import { Auth } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

Amplify.configure(awsconfig);
Auth.configure(awsconfig);

function App() {
  return (
    <div>
      <Authenticator>
        {({ signOut, user }) => (
          <div className="App">
            <Nav signOut={signOut} />
            <Banner />

            <Row
              title="NETFLIX ORIGINALS"
              fetchUrl={requests.fetchNetFlixOriginals}
              isLargeRow={true}
            />
            <Row title="Trending Now" fetchUrl={requests.fetchTreding} />
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
            <Row title="Horror Movies" fetchUrl={requests.fetchHorroMovies} />
            <Row
              title="Romance Movies"
              fetchUrl={requests.fetchRomanticMovies}
            />
            <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
          </div>
        )}
      </Authenticator>
    </div>
  );
}

export default App;
