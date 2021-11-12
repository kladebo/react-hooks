const speakersReducer = (state, action) => {
  function updateFavorite(favoriteValue) {
    return state.map((x) => {
      if (x.id === action.sessionId) {
        x.favorite = favoriteValue;
        return x;
      }
      return x;
    });
  }
  switch (action.type) {
    case 'setSpeakerList': {
      return action.data;
    }
    case 'favorite': {
      return updateFavorite(true);
    }
    case 'unfavorite': {
      return updateFavorite(false);
    }
    default:
      return state;
  }
};

export default speakersReducer;
