import react from "react";
import Navbar from "./components/Navbar/navbar";
import Footer from "./components/Footer/footer";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, useParams, } from "react-router-dom"
import Home from "../src/pages/Home";
import Movie from "./pages/SingleData/SingleData";
import Shows from "./pages/MultiData/MultiData";
import About from "./pages/About/About";
import Contact from "./pages/Contact/contact";



function App(props) {

  // const MovieInfo = () =>{
  //   let id = useParams()
  //   return <Movie id={id}/>
  // }


  return (
    <div>
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route  path="/movieInfo/:select/:id"  >
            <Movie />
          </Route>
          <Route  path="/popular">
            <Shows type="movie" name="Popular Movies" para="popular" />
          </Route>
          <Route  path="/now_playing">
            <Shows type="movie" name="Now Playing Movies" para="now_playing"/>
          </Route>
          <Route  path="/upcoming">
            <Shows type="movie" name="Up Coming Movies" para="upcoming"/>
          </Route>
          <Route  path="/top_rated">
            <Shows type="movie" name="Top Rated Movies" para="top_rated"/>
          </Route>
          <Route  path="/popular">
            <Shows type="tv" name="Popular TV Shows" para="popular"/>
          </Route>
          <Route  path="/top_rated">
            <Shows type="tv" name="Top Rated Tv Shows" para="top_rated"/>
          </Route>
          <Route  path="/on_the_air">
            <Shows type="tv" name="On Air Tv Shows" para="on_the_air" />
          </Route>
          <Route  path="/about">
            <About/>
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
        </Switch> 
      </Router>
      <Footer />
    </div>

  );
}

export default App;
