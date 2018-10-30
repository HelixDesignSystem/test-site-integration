// jshint esversion:6

export const state = () => ({
  counter: 0
});

export const mutations = {
  increment (state) {
    state.counter++;
  }
};
