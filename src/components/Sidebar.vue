<template>
    <div class="lg:w-1/5 border-r border-lighter px-2 lg:px-6 py-2 flex flex-col justify-between">
        <div>
            <button class="h-12 w-12 hover:bg-lightblue text-3xl rounded-full text-blue">
            <i class="fab fa-twitter"></i>
            </button>
            <div>
            <button class="`focus:outline-none hover:text-blue flex items-center py-2 px-4 hover:bg-lightblue rounded-full mr-auto mb-3 ${ id === tab.id ? 'text-blue' : ''}`">
                <i :class="`${ tab.icon } text-2xl mr-4 text-left`"></i>
                <p class="text-lg font-semibold text-left hidden lg:block"> {{ tab.title }} </p>
            </button>
            </div>
            <button class="text-white bg-blue rounded-full font-semibold focus:outline-none w-12 h-12 lg:h-auto lg:w-full p-3 hover:bg-darkblue">
            <p class="hidden lg:block">Tweet</p>
            <i class="fas fa-plus lg:hidden"></i>
            </button>
        </div>
        <div class="lg:w-full relative">
            <button @click="dropdown = true" class="flex items-center w-full hover:bg-lightblue rounded-full p-2 focus:outline-none">
            <img src="profile.png" class="w-10 h-10 rounded-full border border-lighter" />
            <div class="hidden lg:block ml-4">
                <p class="text-sm font-bold leading-tight"> Steph Dietz </p>
                <p class="text-sm leading-tight"> @SaaSyEth </p>
            </div>
            <i class="hidden lg:block fas fa-angle-down ml-auto text-lg"></i>
            </button>
            <div v-if="dropdown === true" class="absolute bottom-0 left-0 w-64 rounded-lg shadow-md border-lightest bg-white mb-16">
            <button @click="dropdown = false" class="p-3 flex items-center w-full hover:bg-lightest p-2 focus:outline-none">
                <img src="profile.png" class="w-10 h-10 rounded-full border border-lighter" />
                <div class="ml-4">
                <p class="text-sm font-bold leading-tight"> Steph Dietz </p>
                <p class="text-sm leading-tight"> @SaaSyEth </p>
                </div>
                <i class="fas fa-check ml-auto test-blue"></i>
            </button>
            <button @click="dropdown = false" class="w-full text-left hover:bg-lightest border-t border-lighter p-3 test-sm focus:outline-none">
                Add an existing account
            </button>
            <button @click="dropdown = false" class="w-full text-left hover:bg-lightest border-t border-lighter p-3 test-sm focus:outline-none">
                Log out @SaaSyEth
            </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Sidebar"
}
</script>

<style>

</style>