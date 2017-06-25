/**
 * Created by lenovo on 2017/6/15.
 */

export const moduleA = {
  state: {
    stateA: 'STATE-A',
    countA: 2
  },
  mutations: {
    incrementA (state) {       // 传入参数 state
      state.countA += 10;      // 变更状态
      console.log('moduleA: ', state.countA);
    }
  },
  actions: {
    incrementIfOddOnRootSum ({ state, commit, rootState }) {
      if (state.countA + rootState.count > 1) {
        console.log('moduleA:actions');
        console.log('rootState:', rootState);
        commit('incrementA')
      };
    }
  },
  getters: {
    sumWithRootCount(state, getters, rootState) {
      return state.countA + rootState.count
    }
  }
}
