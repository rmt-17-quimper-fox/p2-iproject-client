<template>
<div>
    <div class="card-body bg-dark p-5 text-left">
    <form method="post" @submit.prevent="addOrder">
    <h1 class="text-left mb-3"><i>Personal Information</i></h1>
        <label><h3 class="text-white">Sender ID (PT/Personal)</h3></label><br>
        <input type="text" class="form-control" placeholder="Insert full name.." required=""
        v-model="sender"><br>
        <label><h3 class="text-white">Address</h3></label><br>
        <textarea row="3" class="form-control" placeholder="Sender address.." required=""
        v-model="address"></textarea><br>
    <h1 class="text-left my-4"><i>Product Details</i></h1>
        <label><h3 class="text-white">Product Name</h3></label><br>
        <input type="text" class="form-control" placeholder="e.g botol, kardus.." required=""
        v-model="itemName"><br>
        <label><h3 class="text-white">Description</h3></label><br>
        <textarea row="3" class="form-control" placeholder="Kondisi produk.." required=""
        v-model="description"></textarea><br>
        <label class="form-label"><h3 class="text-white">Category</h3></label><br>
        <select class="form-control"
        v-model="CategoryId">
        <option>--- SELECT ---</option>
        <option
        v-for="category in categories" 
        :key="category.id"
        :value="category.id"
        >
        {{category.name}}
        </option>
        </select><br>
        <div class=row>
            <div class="col">
                <label><h3 class="text-white">Weight</h3></label><br>
                <input type="integer" placeholder="Berat dalam kilogram.." required=""
                v-model="weight"> <span class="text-white">Kg</span><br>
            </div>
            <div class="col">
                <label><h3 class="text-white">Kondisi</h3></label><br>
                <div class="custom-control custom-radio custom-control-inline">
                <input type="radio" id="customRadioInline1" name="customRadioInline1" class="custom-control-input"
                v-model="isCleaned"
                :value="true">
                <label class="custom-control-label" for="customRadioInline1"><span class="text-white">Bersih</span></label>
                </div>
                <div class="custom-control custom-radio custom-control-inline">
                <input type="radio" id="customRadioInline2" name="customRadioInline1" class="custom-control-input"
                v-model="isCleaned"
                :value="false">
                <label class="custom-control-label" for="customRadioInline2"><span class="text-white">Kotor</span></label>
                </div>
            </div>
        </div><br>
        <label><h3 class="text-white">Upload Photos</h3></label><br>
        <div class="input-group">
        <div class="custom-file">
            <input type="file" class="custom-file-input"
            @change="uploadImg"
            ref="file">
            <label class="custom-file-label">Choose File</label>
        </div>
        </div><br>
        <button class="btn btn-light btn-lg" type="submit"><h1 class="text-dark">Submit</h1></button>
        </form>
        </div>
 </div>
</template>

<script>
export default {
    name: "FormOrder",
    data(){
        return{
            sender: '',
            address: '',
            itemName: '',
            weight: '',
            CategoryId: '',
            description: '',
            isCleaned: null,
            photo: '',
        }
    },
    methods: {
        async addOrder(){
            const formData = new FormData ()
                formData.append("sender", this.sender)
                formData.append("address", this.address)
                formData.append("itemName", this.itemName)
                formData.append("weight", this.weight)
                formData.append("CategoryId", this.CategoryId)
                formData.append("description", this.description)
                formData.append("isCleaned", this.isCleaned)
                formData.append("photo", this.photo)
            await this.$store.dispatch('postOrder', formData)
            await this.$router.push(`/order/${this.orderId}`)
        },
        uploadImg(){
            this.photo = this.$refs.file.files[0]
        }
    },
    computed: {
        categories(){
            return this.$store.state.categories
        },
        orderId(){
            return this.$store.state.orderId
        }
    },
    created(){
        this.$store.dispatch('getCategories')
    }
}
</script>

<style scoped>
h1 { font-family: "Acme"; color: white; font-size: 36px; font-style: normal; font-variant: normal; font-weight: 700; letter-spacing: 2px; margin-bottom: 0}
h2 { font-family: "Acme"; color: white; font-size: 32px; font-style: normal; font-variant: normal; font-weight: 700; letter-spacing: 2px; margin-bottom: 0}
h3 { font-family: "Acme"; color: white; font-size: 24px; font-style: normal; font-variant: normal; font-weight: 700; letter-spacing: 2px; margin-bottom: 0}
span { font-family: "Acme"; color: white; font-size: 20px; font-style: normal; font-variant: normal; font-weight: 700; letter-spacing: 2px; margin-bottom: 0}
</style>