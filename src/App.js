import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
// components
import Header from "./components/Header";
import FilmList from "./components/FilmeList";
import FilmPage from './components/FilmePage';

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <Switch>
          <Route exact path="/" component={FilmList} />
          <Route exact path="/film/:title" component={FilmPage} />
        </Switch>
      </Container>
      <p className="cpr">Developed by Munir Saffur | <a className="fw-bold text-primary" target='_blank' href="https://github.com/MunirSaffur">GitHub</a></p>
    </div>
  );
}

export default App;
