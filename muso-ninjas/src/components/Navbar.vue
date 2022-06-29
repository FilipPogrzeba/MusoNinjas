<template>
    <div class="navbar">
        <nav>
            <img src="@/assets/ninja.png">
            <h1>
                <router-link :to="{ name: 'Home' }">Muso Ninjas</router-link>
            </h1>
            <div class="links">
                <div v-if="user">
                    <button @click="handleSubmit">Logout</button>
                </div>
                <div v-if="!user">
                    <router-link class="btn" :to="{ name: 'Signup' }">Signup</router-link>
                    <router-link class="btn" :to="{ name: 'Login' }">Login</router-link>
                </div>
            </div>
        </nav>
    </div>
</template>
<script>
import useLogout from '../composables/useLogout'
import getUser from '../composables/getUser';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
    setup() {
        const { error, logout, isPending } = useLogout()
        const router = useRouter()
        const handleSubmit = async () => {
            const res = await logout()
            if (!error.value) {
                console.log("user logout");
                router.push({ name: 'Login' })
            }
        }
        const { user } = getUser()

        return { handleSubmit, user }
    }
}
</script>
<style scoped>
.navbar {
    padding: 16px 10px;
    margin-bottom: 60px;
    background: white;
}

nav {
    display: flex;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
}

nav img {
    max-height: 60px;
}

nav h1 {
    margin-left: 20px;
}

nav .links {
    margin-left: auto;
}

nav .links a,
button {
    margin-left: 16px;
    font-size: 14px;
}
</style>