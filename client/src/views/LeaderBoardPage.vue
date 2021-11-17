<template>
<!-- Leader Board Page -->
<div class="container-fluid">
    <navbar></navbar>
    <div class="row mt-5">
        <div class="d-flex justify-content-center">
            <div class="form-floating me-3">
                <input class="form-control" id="floatingInput" placeholder="Search you and your friend position" style="width: 600px; height: 55px;">
                <label for="floatingInput">Search you and your friend position</label>
            </div>
            <button class="btn btn-primary" style="width: 100px;">Search</button>
        </div>
    </div>
    <div class="container mt-5">
        <div class="container">
            <table class="table table-hover">
                <thead class="text-light" style="background-color: #32C1CD;">
                    <tr style="font-size: 20px;">
                        <th scope="col">Position</th>
                        <th scope="col">Username</th>
                        <th scope="col">Point</th>
                    </tr>
                    </thead>
                    <tbody>
                        <leader-board-column
                        v-for="(data, idx) in leaderBoardData" :key="idx"></leader-board-column>
                    </tbody>
            </table>
        </div>
        <div class="d-flex justify-content-center">
            <nav class="row mt-5" aria-label="Page navigation example">
                <ul class="pagination pagination-lg">
                    <li class="btn page-link">Previos</li>
                    <li class="page-item active"><span class="btn page-link" style="background-color: #6166B3;">1</span></li>
                    <li class=""><span class="btn page-link">2</span></li>
                    <li class=""><span class="btn page-link">3</span></li>
                    <li class="btn page-link">Next</li>
                </ul>
            </nav>
        </div>
    </div>
</div>
<!-- Leader Board Page -->  
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import LeaderBoardColumn from '@/components/LeaderBoardColumn.vue'
export default {
    name: 'Leader-Board-Page',
    components: { 
        Navbar,
        LeaderBoardColumn 
    },
    data: function() {
        return {
            leaderBoardData: ['1', '2', '3']
        }
    }
}
</script>

<style>

</style>