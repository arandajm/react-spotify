export const initialState = {
  user: null,
  playlist: [],
  playing: false,
  item: null,
  token:
    'BQBUDL_l43EiPD2OXgxgHt7wcTodYUUHSmSNnSBfWnc2R01HPBHdJZvgmmshFHAdca4u-eGAm05ThDjztFVbBjrLCsPxdE-ROHzUOfvAf2eym7scSQdzje1yEMJhDaT_iyiegwdnFKMO4ReE8lI',
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
      };
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
