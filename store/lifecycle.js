export const state = () => ({
  isCreated: false,
  messages: [],
});

export const mutations = {
  create(state) {
    state.isCreated = true;
  },
  remove(state) {
    state.isCreated = false;
  },
  showMsg(state, msg) {
    state.messages = msg;
  }
};
