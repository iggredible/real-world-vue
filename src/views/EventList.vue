<template>
  <router-link
    class="event-link"
    v-bind:to="{ name: 'event-show', params: { id: 'some-event' } }"
  >
    <EventCard />
    <BaseIcon />
  </router-link>
</template>

<script>
import EventCard from '@/components/EventCard.vue'

export default {
  components: {
    EventCard
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
