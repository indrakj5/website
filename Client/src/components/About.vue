<template>
  <div>
    <div v-for="(list,idx) in data" :key="idx" id="about">
      <div class="text-aboutus">
        <h1>About Us</h1>
        <h3>
          {{ list.about1 }}
         </h3>
        <p>
          {{ list.about2 }}
        </p>
        <h3>
          {{ list.about3 }}
        </h3>
        <p>
          {{ list.about4 }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style></style>
