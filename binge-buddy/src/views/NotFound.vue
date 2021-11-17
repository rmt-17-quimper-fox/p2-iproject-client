<template>
   <div class="error-area">
    <div class="d-table">
      <div class="d-table-cell">
        <div class="container">
          <div class="error-content">
            <h1>404</h1>
            <h2>Here Is Some Problem</h2>
            <p>The page you are looking for it maybe deleted</p>
            <div class="button">
             <router-link to="/">Go Back To Home</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name:"NotFound"
}
</script>

<style>

</style>