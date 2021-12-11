import { playerInfoActions } from "../Actions/players";

export const PlayerInfoAdd = () => {
  return (dispatch) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => dispatch(playerInfoActions(json)));
  };
};
