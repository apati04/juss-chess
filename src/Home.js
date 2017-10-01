import React from 'react';
import firebase from 'firebase';

const Home = function() {
  return (
    <div className="view row">
      <div className="column column-50 column-offset-25" style={{textAlign: 'center'}}>
        <h3>Create a new Game</h3>
        <button onClick={createGame}>Create a new Game</button>
      </div>
    </div>
  )
}
const newGame = {
  p1_token: Utils.token(),
  p2_token: Utils.token()
}
const game = firebase.database().ref('games');
game.set(newGame).then(()=>{
  window.location = `/${newGame.p1_token}`
}, err => {
  throw err;
});

export default Home;
