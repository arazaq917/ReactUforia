import {createStore} from 'vuex';

const store = createStore({
  state(){
    return {
      data: []
    };
  },
  getters:{
    data(state){
      return state.data;
    },
    smallCount(state){
      return (state.data.filter(item => item.id === 's')).length;
    },
    mediumCount(state){
      return (state.data.filter(item => item.id === 'm')).length;
    },
    largeCount(state){
      return (state.data.filter(item => item.id === 'l')).length;
    }
  },
  actions:{
    addData(context, payload){
      context.commit('addData', payload);
    },
    clearSmall(context){
      context.commit('clearSmall');
    },
    clearMedium(context){
      context.commit('clearMedium');
    },
    clearLarge(context){
      context.commit('clearLarge');
    }
  },
  mutations:{
    addData(state, payload){
      state.data.push(payload);
      state.stack.push(payload);
    },
    
    clearSmall(state){
      console.log("deleting medium...");
      state.data = state.data.filter(item => item.id !== 's');
    },
    clearMedium(state){
      console.log("deleting medium...");
      state.data = state.data.filter(item => item.id !== 'm');
    },
    clearLarge(state){
      console.log("deleting...");
      console.log("deleting large...");
      state.data = state.data.filter(item => item.id !== 'l');
    }
  }
});

export default store;