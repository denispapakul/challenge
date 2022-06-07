const initialState = {
  cards: [
    {title: 'My first food style'},
    {title: 'My first food style'},
    {title: 'Very much eating that vegan thingie today'},
    {title: 'My first food style'},
    {title: 'My first food style'},
    {title: 'Very much eating that vegan thingie today'},
  ],
};

const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};

export default cardsReducer;
