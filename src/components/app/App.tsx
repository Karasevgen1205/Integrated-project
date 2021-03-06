import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Game from "../appTicTacToe/game/Game";
import AppChess from "../appChess/AppChess";
import AppMarvel from "../appMarvel/main/AppMarvel";
import AppEmployeesList from "../appEmployeesList/appEmployeesList/AppEmployeesList";
import Home from "../home/Home";
import "./app.scss";

const App = () => {
  return (
    <Router>
      <div className="all-works">
        <Header />
        <main className="app">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tic-tac-toe" element={<Game />} />
            <Route path="/chess" element={<AppChess />} />
            <Route path="/marvel" element={<AppMarvel />} />
            <Route path="/employees-list" element={<AppEmployeesList />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
