<template>
<tr style="font-size: 20px;">
    <td scope="row">{{ position+1 }}</td>
    <td>{{ username }}</td>
    <td>{{ point }}</td>
</tr>
</template>

<script>
export default {
    name: 'LeaderBoardColumn',
    props: ['position', 'username', 'star'],
    computed: {
        point: function() {
            return this.star * 10
        }
    }
}
</script>

<style>

</style>