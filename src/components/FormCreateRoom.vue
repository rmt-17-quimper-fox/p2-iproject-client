<template>
  <div>
    <h1>Ini create Room</h1>
    <div class="card border-primary mb-3" style="max-width: 18rem;">
      <form @submit.prevent="createRoom">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Room Name</label>
          <input v-model="name" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">

        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Total Member</label>
          <input v-model="member" type="text" class="form-control" id="exampleInputPassword1">
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password Room</label>
          <input v-model="password" type="text" class="form-control" id="exampleInputPassword1">
        </div>
      
        <button type="submit" class="btn btn-primary">Create Now</button>
      </form>
    </div>
   
  </div>
</template>

<script>
import Swal from 'sweetalert2'

export default {
    name : 'CreateRoom',
    data : function(){
      return{
        name : '',
        member : '',
        password : ''
      }
    },
    methods : {
      createRoom(){
        const room = {
          name : this.name,
          member : this.member,
          passwordRoom : this.password
        }
        this.$store.commit('CREATEROOM', room)
        this.$store.dispatch('createRoom')
          .then(response => {
            console.log(response.data);
            Swal.fire('Success add new room')
            this.$router.push({name : 'ListRoom'})
          })
          .catch(err => {
            Swal.fire(err.response.data.message)
            
            console.log(err.response.data.message);
          })
      }
    }
}
</script>

<style>

</style>