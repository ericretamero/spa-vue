import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const ADD_BOOKMARKS = 'ADD_BOOKMARKS';

const state = {
    bookmarks: []
}

const getters = {
    bookmarks: state => state.bookmarks
}

const mutations = {
    ADD_BOOKMARKS(state, { bookmark }) {
        state.bookmarks.push(bookmark)
    }
}

const actions = {
    modify({ commit, state }, bookmark) {
        commit(ADD_BOOKMARKS, { bookmark })
    }
}

const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
});

export default store;