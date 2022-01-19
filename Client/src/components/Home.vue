<template>
  <div>
    <div v-for="(list,idx) in data" :key="idx" id="home">
      <div class="text-home">
        <h1>Home</h1>
        <h2>Butuh Liburan?</h2>
        <p>{{ list.home1 }}</p>
        <p>{{ list.home2 }}</p>
      </div>
      <div class="iframe-container">
        <iframe
          width="720"
          height="480"
          src="https://www.youtube.com/embed/3SsK-cxlj_w"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
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

<style>
.iframe-container {
  display: flex;
  justify-content: center;
}
</style>
