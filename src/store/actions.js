export const BOARD_RESET = 'BOARD/RESET';
export const BOARD_CLICK = 'BOARD/CLICK';

export const CHANGE_DISPLAY_MESSAGE = 'CHANGE/DISPLAY/MESSAGE';

export const boardReset = () => ({
  type: BOARD_RESET,
});

export const boardClick = payload => ({
  type: BOARD_CLICK,
  payload,
});

export const changeMessageDisplay = payload => ({
  type: CHANGE_DISPLAY_MESSAGE,
  payload,
});
