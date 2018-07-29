import initialState from './initialState';
import { BOARD_RESET, BOARD_CLICK, CHANGE_DISPLAY_MESSAGE } from './actions';
import { PLAYER1, PLAYER2, BOX_EMPTY } from '../constants';
import { checkWinner } from '../utils';

const tictactoeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case BOARD_CLICK:
      const i = payload;
      const { game, games, gamer, finished, message } = state;
      if (game[i] === BOX_EMPTY && !finished) {
        let newGame = game;
        newGame[i] = gamer;
        let newFinished = false;
        let newGames = games;
        const winner = checkWinner(newGame);
        if (newGame.filter(box => box > 0).length > 8 || winner > 0) {
          newFinished = true;
          newGames.push(newGame);
        }
        let newGamer = gamer === PLAYER1 ? PLAYER2 : PLAYER1;

        let newMessage = message;
        if (newFinished) {
          if (winner) newMessage = 'Winner Player ' + winner;
          else newMessage = 'No winner, reset to start a new game';
        } else newMessage = 'Player ' + newGamer + ' turn';

        return {
          game: newGame,
          gamer: newGamer,
          finished: newFinished,
          games: newGames,
          message: newMessage,
        };
      } else {
        return state;
      }

    case BOARD_RESET:
      return {
        ...state,
        game: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        gamer: 1,
        finished: false,
        message: 'Player 1 turn',
      };

    case CHANGE_DISPLAY_MESSAGE:
      return { ...state, message: payload };

    default:
      return state;
  }
};

export default tictactoeReducer;
