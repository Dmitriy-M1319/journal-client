<template>
    <div v-if="!token" class="vertical_align row align-items-center">
        <div class="col-12">
            <div class="text-black text-center">
                <h3>Добро пожаловать в "Электронный журнал для ВУЦ при ВГУ"</h3>
                <p>Для начала работы войдите в систему</p>
            </div>
        </div>
    </div>
    <StudentProfile v-else-if="is_student" v-bind:profile="profile_local" />
    <TeacherProfile v-else v-bind:profile="profile_local" />
</template>

<script>
import TeacherProfile from './teachers/TeacherProfile.vue';
import StudentProfile from './students/StudentProfile.vue';

export default {
    name: 'Home',
    props: ['is_student', 'profile', 'token'],
    mounted() {
        this.profile_local = JSON.parse(localStorage.getItem('profile'));
        console.log(this.profile_local);
    },
    components: {
        TeacherProfile,
        StudentProfile
    },
    data() {
        return {
            profile_local: {}
        }
    },
}
</script>

<style>
.profile {
    background-color: #4d8bc3;
    color: aliceblue;
    border-radius: 5px;
    padding: 10px;
    min-width: 70%;
    float: left;
    margin-right: 5px;
}
.vertical_align {
    width: 100%;
    height: 100vh;
}
</style>