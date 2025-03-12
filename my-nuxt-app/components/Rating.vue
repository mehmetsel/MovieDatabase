<template>
  <div class="flex items-center">
    <span class="text-yellow-400 text-lg mr-2">★</span>
    <span>{{ rating.toFixed(1) }}</span>
  </div>
</template>

<script>
export default {
  props: {
    rating: Number,
  },
};
</script>