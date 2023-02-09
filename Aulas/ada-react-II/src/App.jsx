import {Header} from "./components/header";
import React, {useEffect} from "react";
import {Navbar} from "./components/navbar";
import {Highlights} from "./components/highlights/highlights";
import {Grid, GridItem} from "./ui/grid";
import {fetcher} from "./services";

function App() {
  useEffect(() => {

    const makeRequest = async () => {
      const response = await fetcher("photos");
    };
    makeRequest();
  }, []);


  return (
    <Grid>
      <GridItem>
        <Navbar />
      </GridItem>
      <GridItem>
        <Header />
        <Highlights />
      </GridItem>
    </Grid>
  );
}

export default App;