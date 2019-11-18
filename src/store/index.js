import Vue from 'vue'
import Vuex from 'vuex'
import EventService from '@/services/EventService.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: { id: 'abc123', name: 'Adam Jahr' },
    categories: [
      'sustainability',
      'nature',
      'animal welfare',
      'housing',
      'education',
      'food',
      'community'
    ],
    events: [],
    event: {},
    totalPageCount: 100
  },
  mutations: {
    ADD_EVENT(state, event) {
      state.events.push(event)
    },
    SET_EVENTS(state, events) {
      state.events = events
    },
    SET_EVENT(state, event) {
      state.event = event
    },
    UPDATE_TOTAL_PAGE_COUNT(state, totalPageCount) {
      state.totalPageCount = totalPageCount
    }
  },
  actions: {
    createEvent({ commit }, event) {
      return EventService.postEvent(event)
        .then(() => {
          commit('ADD_EVENT', event)
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchEvents({ commit }, { perPage, page }) {
      return EventService.getEvents(perPage, page)
        .then(res => {
          commit('UPDATE_TOTAL_PAGE_COUNT', res.headers['x-total-count'])
          commit('SET_EVENTS', res.data)
        })
        .catch(err => console.log(`error: ${err}`))
    },
    fetchEvent({ commit, getters }, eventId) {
      const event = getters.getEventById(eventId)
      if (event) {
        commit('SET_EVENT', event)
      } else {
        return EventService.getEvent(eventId)
          .then(res => {
            commit('SET_EVENT', res.data)
          })
          .catch(err => console.log(`error: ${err}`))
      }
    }
  },
  modules: {},
  getters: {
    getEventById: state => id => state.events.filter(event => event.id === id)
  }
})
