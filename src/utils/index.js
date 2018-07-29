export const checkWinner = game => {
  if (game[0] === game[1] && game[1] === game[2]) {
    return game[0];
  }
  if (game[3] === game[4] && game[4] === game[5]) {
    return game[3];
  }
  if (game[6] === game[7] && game[7] === game[8]) {
    return game[6];
  }

  if (game[0] === game[3] && game[3] === game[6]) {
    return game[0];
  }
  if (game[1] === game[4] && game[4] === game[7]) {
    return game[1];
  }
  if (game[2] === game[5] && game[5] === game[8]) {
    return game[2];
  }

  if (game[0] === game[4] && game[4] === game[8]) {
    return game[0];
  }
  if (game[2] === game[4] && game[4] === game[6]) {
    return game[2];
  }
  return null;
};
