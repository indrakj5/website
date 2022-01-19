<template>
  <div>
    <div class="topnav">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
      <a href="#contact">Destinasi</a>
      <div class="search-container">
        <form action="">
          <input type="text" placeholder="Search.." name="search" />
          <button type="submit"><font-awesome-icon icon="search"/></button>
          <a href="signup.html">Sign Up</a>
          <a href="signin.html">Sign In</a>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>

.topnav {
  overflow: hidden;
  background-color: #e9e9e9;
  position: sticky;
  top: 0;
  z-index: 0;
}

.topnav a {
  float: left;
  display: block;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}

.topnav a.active {
  background-color: #2196f3;
  color: white;
}

.topnav .search-container {
  float: right;
}

.topnav input[type="text"] {
  padding: 6px;
  margin-top: 8px;
  font-size: 17px;
  border: none;
}

.topnav .search-container button {
  float: right;
  padding: 6px 10px;
  margin-top: 8px;
  margin-right: 16px;
  background: #ddd;
  font-size: 17px;
  border: none;
  cursor: pointer;
}

.topnav .search-container button:hover {
  background: #ccc;
}
</style>
