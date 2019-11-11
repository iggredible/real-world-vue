<template>
  <div class="event-link">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
    <BaseIcon />
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
import EventService from '../services/EventService.js'

export default {
  components: {
    EventCard
  },
  data() {
    return {
      events: []
    }
  },
  created() {
    EventService.getEvents()
      .then(res => (this.events = res.data))
      .catch(err => console.log(`error: ${err}`))
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
