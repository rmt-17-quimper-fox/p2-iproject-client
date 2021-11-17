<template>
    <section class="bg_custom">
        <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-12 col-md-8 col-lg-6 col-xl-5">
            <div class="card bg-login-box .text-dark" style="border-radius: 1rem">
                <div class="card-body p-5 text-center">
                <div class="mb-md-5 mt-md-4 pb-5">
                    <h2 class="fw-bold mb-2 text-uppercase form__title">
                    Register
                    </h2>
                    <p class=".text-dark-50 mb-5">
                    Please register to join Our community !
                    </p>

                    <div class="form-outline mb-4">
                    <input
                        v-model="firstName"
                        type="text"
                        id="firstName"
                        class="form-control form-control-lg"
                    />
                    <label class="form-label" for="firstName"
                        >First Name</label
                    >
                    </div>

                    <div class="form-outline mb-4">
                    <input
                        v-model="lastName"
                        type="text"
                        id="lastName"
                        class="form-control form-control-lg"
                    />
                    <label class="form-label" for="lastName"
                        >Last Name</label
                    >
                    </div>

                    <div class="form-outline mb-4">
                    <input
                        v-model="username"
                        type="text"
                        id="username"
                        class="form-control form-control-lg"
                    />
                    <label class="form-label" for="username"
                        >Username</label
                    >
                    </div>
                    
                    <div class="form-outline mb-4">
                    <input
                        v-model="email"
                        type="email"
                        id="email"
                        class="form-control form-control-lg"
                    />
                    <label class="form-label" for="email">Email</label>
                    </div>
                    <div class="form-outline mb-4">
                    <input
                        v-model="password"
                        type="password"
                        id="password"
                        class="form-control form-control-lg"
                    />
                    <label class="form-label" for="password"
                        >Password</label
                    >
                    </div>
                    <div class="form-outline mb-4">
                    <!-- <input
                        v-model="profilePic"
                        type="text"
                        id="profilePic"
                        class="form-control form-control-lg"
                    />
                    <label class="form-label" for="profilePic"
                        >Photo Profile</label
                    > -->
                    </div>
                    
                    <button
                        @click.prevent="doRegister"    
                        class="btn btn-outline-danger btn-lg px-5 loi"
                        type="submit"
                    >
                    Register
                    </button>
                </div>

                <div>
                    <p class="mb-0">
                    Already have an Account?
                    <router-link style="color: #393f81;" to="/Login"><b>Login</b></router-link>
                    </p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </section>
</template>

<script>

export default {
    name: "Register",
    data: function() {
        return {
            firstName: "",
            lastName: "",
            username: "",
            email: "",
            password: "",
            profilePic: "",
        }
    },
    methods: {
        doRegister: function () {
            const payload = {
                firstName: this.firstName,
                lastName: this.lastName,
                username: this.username,
                email: this.email,
                password: this.password,
            };
            this.$store.dispatch('doRegister', payload)
            .then(({data}) => {
                console.log(data, "==== masuk data doRegister");
                this.$router.push('/login')
                this.$store.commit('SET_ISLOGIN', false)
            })
            .catch ((err) => {
                console.log(err);
            })
        }
    }

};
</script>

<style>
.form-outline .form-control {
    min-height: auto;
    padding: 0.33;
    border: 0;
    background: #eee;
    -webkit-transition: all .2s linear;
    transition: all .2s linear;
}
</style>