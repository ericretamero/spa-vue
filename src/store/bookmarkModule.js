
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

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}