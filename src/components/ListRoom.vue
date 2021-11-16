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
                  <button @click="joinRoom(room.id)">Join Room</button>
                  <button>Delete Room</button>
              </td>
            </tr>
          </tbody>
      </table>
    </div>
   
  </div>
  
</template>

<script>
import Swal from 'sweetalert2'
export default {
    name : 'ListRoom',
    computed : {
      rooms(){
        return this.$store.state.listRoom
      }
    },
    methods : {
      joinRoom(value){
        Swal.fire({
          title: 'Password Room',
          html: `<input type="password" id="password" class="swal2-input" placeholder="Password">`,
          confirmButtonText: 'Input Password',
          focusConfirm: false,
          preConfirm: () => {
            const password = Swal.getPopup().querySelector('#password').value
            const roomData = {value,password}
            this.$store.commit('JOINROOM', roomData)
            this.$store.dispatch('joinRoom')
              .then(response => {
                console.log('masuk fetch')
                console.log(response);
                Swal.fire('Valid Password!')
                this.$router.push({name: 'Room'})
              })
              .catch(err => {
                console.log(err.response.data.message);
                Swal.fire(err.response.data.message)
              })
            return {password: password }
          }
        })



       
      }
    },
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