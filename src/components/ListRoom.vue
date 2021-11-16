<template>
  <div>
    <h1 @click="$router.push({name: 'Room'})">ListRoom</h1>
    <div >
        <table  class="table">
          <thead  class="table-list">
            <tr>
              <th scope="col">No.</th>
              <th scope="col">Room Name</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody v-for="(room,index) in rooms" :key="index">
            <tr>
              <th scope="row">{{index+1}}</th>
              <td>{{room.name}}</td>
              <td>
                  <button>Join Room</button>
                  <button>Delete Room</button>
              </td>
            </tr>
          </tbody>
      </table>
    </div>
   
  </div>
  
</template>

<script>
export default {
    name : 'ListRoom',
    computed : {
      rooms(){
        return this.$store.state.listRoom
      }
    },
    // methods : {
    //   changePage(value){
    //     this.$router
    //   }
    // }
    created(){
      this.$store.dispatch('fetchRoom')
    }
}
</script>

<style>
.table-list{
  background-color: #055052;
}

</style>