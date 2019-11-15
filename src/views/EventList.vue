<template>
  <div class="event-link">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
    <BaseIcon />
    <template v-if="page != 1">
      <router-link
        :to="{ name: 'event-list', query: { page: page - 1 } }"
        rel="prev"
        >Previous</router-link
      >
    </template>
    |
    <template v-if="page < totalAvailablePage">
      <router-link
        :to="{ name: 'event-list', query: { page: page + 1 } }"
        rel="prev"
        >Next</router-link
      >
    </template>
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
import { mapState } from 'vuex'

export default {
  computed: {
    page() {
      return parseInt(this.$route.query.page) || 1
    },
    totalAvailablePage() {
      return Math.ceil(this.$store.state.totalPageCount / 3)
    },
    ...mapState(['events', 'totalPageCount'])
  },
  components: {
    EventCard
  },
  created() {
    this.$store.dispatch('fetchEvents', {
      perPage: 3,
      page: this.page
    })
  }
}
</script>

<style>
.event-link {
  color: black;
  text-decoration: none;
  font-weight: 100;
}
</style>
