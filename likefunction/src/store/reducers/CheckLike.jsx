const initailState = {
  isClick: []
};

const CheckLike = (state = initailState, action) => {
  switch (action.type) {
    case "True":
      return {
        ...state,
        isClick: [...state.isClick, action.id]
      };

    case "False":
      return {
        ...state,
        isClick: state.isClick.filter((id) => id !== action.id)
      };

    default:
      return {
        ...state
      };
  }
};

export default CheckLike;
