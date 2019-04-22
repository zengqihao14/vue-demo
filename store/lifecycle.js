export const state = () => ({
  isCreated: false,
  isUpdated: false,
  messages: [],
});

export const mutations = {
  create(state) {
    state.isCreated = true;
  },
  remove(state) {
    state.isCreated = false;
  },
  setUpdated(state) {
    state.isUpdated = true;
  },
  init(state) {
    state.isUpdated = false;
    state.messages = [];
  },
  pushMessage(state, msg) {
    state.messages.push(msg);
  }
};
