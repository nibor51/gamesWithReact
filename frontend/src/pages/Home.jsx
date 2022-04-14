import logo from "@assets/logo.svg";
import Case from "@components/ticTacToe/Case";

export default function Home() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Tic-Tac-Toe</h1>
      <div className="flex">
        <Case />
        <Case />
        <Case />
        <Case />
        <Case />
        <Case />
        <Case />
        <Case />
        <Case />
      </div>
    </header>
  );
}
