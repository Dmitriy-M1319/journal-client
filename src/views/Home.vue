<template>
   <StudentProfile v-if="is_student" 
   v-bind:profile="profile"/>
   <TeacherProfile v-else v-bind:profile="profile_local"/>
</template>

<script>
import TeacherProfile from './teachers/TeacherProfile.vue';
import StudentProfile from './students/StudentProfile.vue';

const local_profile = {
    type: 'student',
    profile : {
        surname: 'Фамилия',
        name: 'Имя',
        patronymic: 'Отчество',
        platoon: '451',
        military_post: 'студент'
    }
}

export default {
    name: 'Home',
    props: ['is_student', 'profile'],
    mounted() {
        this.profile_local = JSON.parse(localStorage.getItem('profile'));
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
</style>