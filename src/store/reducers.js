import initialState from './initialState';
import { BOARD_RESET, BOARD_CLICK, CHANGE_DISPLAY_MESSAGE  } from './actions';
import { PLAYER1, PLAYER2, BOX_EMPTY } from '../constants';
import { checkWinner } from '../utils';

const tictactoeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case BOARD_CLICK:
      const i = payload;
      const { game, games, gamer, finished } = state;
      if (game[i] === BOX_EMPTY && !finished) {
        let newGame = game;
        newGame[i] = gamer;
        let newFinished = false;
        let newGames = games;
        if (
          newGame.filter(box => box > 0).length > 8 ||
          checkWinner(newGame) > 0
        ) {
          newFinished = true;
          newGames.push(newGame);
        }
        let newGamer = gamer === PLAYER1 ? PLAYER2 : PLAYER1;

        return { game: newGame, gamer: newGamer, finished: newFinished, games: newGames };
      } else {
        return state;
      }

    case BOARD_RESET:
      return { ...state,
        game: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        gamer: 1,
        finished: false,
        message: ''
      };

    case CHANGE_DISPLAY_MESSAGE :
    return {...state, message: payload };

    default:
      return state;
  }
};

export default tictactoeReducer;
