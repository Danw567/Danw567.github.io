import React, { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg'
import Navigation from "./components/nav/Navigation";
import Footer from './components/nav/nav/nav_bottom';

import { onPageLoad } from './utilites';
import './App.css'

const user = {
  name: "Daniel Widdup",
  imageUrl: reactLogo,
  imageSize: 90
}

const products = [
  {title: 'Cabbage', isFruit: false, id: 1},
  {title: 'Garlic', isFruit: false, id: 1},
  {title: 'Apple', isFruit: true, id: 1}  
]

const listItems = products.map(prod => 
  <li 
    key={prod.id}
    style={{
      color: prod.isFruit ? "red" : "lightgreen"
    }}
  >
    {prod.title}
  </li>
);

export function ProductList() {
  return (
    <>
      <ul>{listItems}</ul>
    </>
  )
}

function UserProfile() {
  return(
    <>
      <h1>{user.name}</h1>
      <img 
        src={user.imageUrl} 
        alt={`photo of ${user.name}`} 
        style={{
          width: user.imageSize,
          height: user.imageSize
        }} />
    </>
  )
}


function MyButton({count, onClick}) {
  return (
    <button onClick={onClick}>Times Clicked {count}</button>    
  )
}

function MyButtonSeparateUpdate() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>Times Clicked {count}. Update singular</button>    
  )
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {      
      return squares[a];
    }
  }
  return null;
}

function Square ({value, onSquareClick}) {

  const handleClick = () => {    
    onSquareClick();    
  }

  return (
    <button className="square" onClick={handleClick}>
      {value} 
    </button>
  )
}

function ScoreBoard({scores}) {
  return(
    <div className="win-lose-cont">
      <div>
        <span>X Wins</span> 
        {scores.x}
      </div>
      <div>
        <span>O wins</span> 
        {scores.o}
      </div>
      <div>
        <span>Draws</span> 
        {scores.d}
      </div>
    </div>
  )
}

function Board({xIsNext, squares, onPlay}) {
  // the below constant initialises the squares variable and the set squares function
  // the value of squares creates an array of 9 boxes and assigns null to all array entries  
  //const [squares, setSquares] = useState(Array(9).fill(null));
  

  function handleClick(i) {  
    if (squares[i] || calculateWinner(squares)) return;
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";
    onPlay(nextSquares)
  }

  const allSquaresFilled = squares.filter(x => x == null).length == 0 ? true : false;

  const winner = calculateWinner(squares);  
  let status;
  if (winner) {
    status = `WINNER: ${winner}`;
  } else if (!winner && allSquaresFilled == true) {
    status = `DRAW - Click 'Restart' to play again`;
  } 
  else {
    status = `Next Player: ${xIsNext ? "X" : "O"}`;
  }

  return(
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />        
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>          
    </>
  )
}

function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  const [xWins, setXWins] = useState(0);
  const [oWins, setOWins] = useState(0);
  const [draws, setDraws] = useState(0);

  const scores = {
    x: xWins,
    o: oWins,
    d: draws
  }

  function updateScores(squares) {    
    const winner = calculateWinner(squares);   

    const allSquaresFilled = squares.filter(x => x == null).length == 0 ? true : false;

    if (winner == "X") {
      setXWins(xWins + 1);         
    } else if (winner == "O") {
      setOWins(oWins + 1);           
    } else if (winner == null && allSquaresFilled == true) {
      setDraws(draws + 1);      
    }
  }

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory); // creates new array of both
    setCurrentMove(nextHistory.length - 1);
    updateScores(nextSquares)
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Restart';
    }

    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    )
  })

  return(
    <div className="game">
      <ScoreBoard scores={scores} /> 
      <div className="game-main">
        <div className="game-board">
          <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
        </div>
        <div className="game-info">
          <ol>{moves}</ol>
        </div>
      </div>
    </div>
  )
}

function TicTacToe() {
  return(
    <section>
      <h2>Tic-Tac-Toe</h2>
      <p>This was the first React tutorial I tackled. Following along with the official docs, I built a Tic-Tac-Toe game (or noughts and crosses, for the Brits out there). I didn’t stop at the basics though, I added a score counter to keep things interesting.</p>
      <p>Got someone nearby? Jump in and play a round!</p>      
      <Game />
    </section>    
  )
}

function Playground() {
  const [count, setCount] = useState(0);
  function handleClick(evt) {
    setCount(count + 1);
  }

  useEffect(() => {
      if (document.readyState === 'complete') {
      onPageLoad();
      } else {
      window.addEventListener('load', onPageLoad, false);
      return () => window.removeEventListener('load', onPageLoad);
      }    
  })

  return (
    <>
      <Navigation activePage="Playground" />
      <main>
        <section>
          <h1>My Playground</h1>
          <p>This page is my little React playground — a space for tinkering, following tutorials, and messing around with new ideas as I learn.</p>
        </section>

        <TicTacToe />
      </main>
      <Footer />
    </>
  )
}

export default Playground;
