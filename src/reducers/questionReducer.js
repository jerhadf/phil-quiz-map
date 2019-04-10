const INITIAL_STATE = {
  questions: [
    { id: '0', title: 'Do you think God is a womens?', url: 'https://www.google.com' },
    { id: '1', title: 'How many tootsie rolls does it take to pop lock and drop?', url: 'https://www.google.com' },
    { id: '2', title: 'Who spaked Zoroaster?', url: 'https://www.google.com' },
    { id: '3', title: 'Philosophy?', url: 'https://www.google.com' },
  ],
};

function questionReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    default: return state;
  }
}

export default questionReducer;
