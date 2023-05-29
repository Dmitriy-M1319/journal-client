<template>
    <!-- <StudentProfile v-if="is_student && token" v-bind:profile="profile" /> -->
    <!-- <TeacherProfile v-else-if="token" v-bind:profile="profile_local" /> -->
    <div class="row">
        <div v-if="!token" class="col-12">
            <div class="text-white text-center">
                <h3>Добро пожаловать в "Электронный журнал для ВУЦ при ВГУ"</h3>
                <p>Для начала работы войдите в систему</p>
            </div>
        </div>
        <div v-else class="col-12">
            <div class="text-white text-center">
                <h3>Вы вошли в систему</h3>
            </div>
        </div>
    </div>
</template>

<script>
import TeacherProfile from './teachers/TeacherProfile.vue';
import StudentProfile from './students/StudentProfile.vue';

const local_profile = {
    type: 'student',
    profile: {
        surname: 'Фамилия',
        name: 'Имя',
        patronymic: 'Отчество',
        platoon: '451',
        military_post: 'студент'
    }
}

export default {
    name: 'Home',
    props: ['is_student', 'profile', 'token'],
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