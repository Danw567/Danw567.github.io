import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navigation from "./components/nav/Navigation";
import viteLogo from '/vite.svg'
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

let content;
var flag = true;
// if (flag) {
//   content = <UserProfile />
// } else {
//   content = <AboutPage />
// }



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

function AboutPage() {
  return (
    <>
      <h1 className={flag ? "green_text" : "red_text"}>About React</h1>
      <p>Hello, I'm Daniel.<br />I am learning react.</p>
    </>
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

  const winner = calculateWinner(squares);  
  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else {
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

  const [winsSoFar, setWinArr] = useState(Array())  
  const [xWins, setXWins] = useState(0);
  const [oWins, setOWins] = useState(0);
  const [draws, setDraws] = useState(0);

  const scores = {
    x: xWins,
    o: oWins,
    d: draws
  }

  function updateScores(squares) {    
    console.log("squares: ", squares);
    const winner = calculateWinner(squares);   

    const allSquaresFilled = squares.filter(x => x == null).length == 0 ? true : false;
    console.log("allSquaresFilled: ", allSquaresFilled);

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
      description = 'Go to start';
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

function Playground() {
  const [count, setCount] = useState(0);
  function handleClick(evt) {
    setCount(count + 1);
  }

  return (
    <div>
      <Navigation activePage="Playground" />
      <h1>Tic-tac-toe</h1>

      {/* TEST COMPONENTS */}
      {/* <MyButton />
      <AboutPage />
      <UserProfile />
      <ProductList />
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
      <MyButtonSeparateUpdate /> */}
      {/* END TEST COMPONENTS */}

      {/* TIC-TAC-TOE GAME */}
      <Game />

      {/* END TIC TAC TOE GAME */}
    </div>
  )
}

export default Playground;
