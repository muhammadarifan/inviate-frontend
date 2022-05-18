<script setup lang="ts">

</script>

<template>
  <router-view v-slot="{ Component, route }">
    <!-- Use any custom transition and fallback to `fade` -->
    <Transition :name="route.meta.transition || 'fade'" mode="out-in">
      <component :is="Component" />
    </Transition>
  </router-view>
</template>

<style>
</style>
