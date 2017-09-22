import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    testPro: {
      name: 'testPro',
      id: 1
    },
    todos: [
      {id: 1, text: '吃饭', done: true},
      {id: 2, text: '跳舞', done: false},
      {id: 3, text: '逛街', done: true}
    ]
  },
  mutations: {
    setTestPro(state, opt) {
      console.log('set')
      state.testPro = {
        name: opt.name,
        id: opt.id
      }
    }
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    doneTodosCount: (state, getters) => {
      return getters.doneTodos.length
    }
  }
})

export default store;
