<template>
  <div>
    <div id="destinasi">
      <div class="text-destinasi">
        <h1>Destinasi</h1>
        <h3>Silahkan pilih destinasi wisata Anda</h3>
        <div class="image-flex-container">
          <div class="image-flex"><img src="../assets/asia.png" /></div>
          <div class="image-flex"><img src="../assets/australia.png" /></div>
          <div class="image-flex"><img src="../assets/africa.png" /></div>
          <div class="image-flex"><img src="../assets/america.png" /></div>
          <div class="image-flex"><img src="../assets/europe.png" /></div>
        </div>
        <div class="text-flex-container">
          <div class="text-flex">Asia</div>
          <div class="text-flex">Australia</div>
          <div class="text-flex">Afrika</div>
          <div class="text-flex">Amerika</div>
          <div class="text-flex">Eropa</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.image-flex-container {
  display: flex;
  justify-content: space-around;
}

.image-flex-container > div > img {
  background-color: #f1f1f1;
  margin: 20px;
  padding: 30px;
  font-size: 30px;
  height: 100px;
  width: 100px;
}

.text-flex-container {
  display: flex;
  justify-content: space-around;
}

.text-flex-container > div {
  text-align: center;
}
</style>
