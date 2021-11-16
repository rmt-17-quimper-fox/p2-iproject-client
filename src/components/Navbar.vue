<template>
   <nav class="py-3 bg-gray-900 navbar-color">
      <div class="flex-1 flex items-center justify-center">
        <div class="flex-shrink-0 flex items-center">
          <span class="text-white opacity-80 text-2xl uppercase">Find Me App</span>
        </div>
        <div class="hidden sm:block sm:ml-6">
          <div class="flex space-x-4 align-middle">
            <a href="#" class="text-white opacity-80 text-md uppercase hover:opacity-100 px-3 py-2" @click="changePage('Home')">Home</a>
            <a href="#" class="text-white opacity-80 text-md uppercase hover:opacity-100 px-3 py-2" @click="changePage('ListRoom')">List Room</a>
            <a href="#" class="text-white opacity-80 text-md uppercase hover:opacity-100 px-3 py-2" @click="changePage('FormCreate')">Create Room</a>
            <a href="#" class="text-white opacity-80 text-md uppercase hover:opacity-100 px-3 py-2" >Log out</a>
          </div>
        </div>
      </div>
    </nav>
</template>

<script>
export default {
    name : 'Navbar',
    methods : {
        changePage(value){
            this.$router.push({name : value})
        }
    }
}
</script>

<style>

</style>