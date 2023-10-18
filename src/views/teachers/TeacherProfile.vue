<template>
    <div class="row justify-content-center p-3">
        <div class="col-10 bg-header-color p-2">
            <div class="card">
                <div class="card-header">
                    <p class="fw-bold text-center mb-0">Личная информация</p>
                </div>
                <div class="card-body">
                    <p>Фамилия Имя Отчество: {{ profile.surname }} {{ profile.name }} {{ profile.patronymic }} </p>
                    <p>Воинское звание: {{ profile.military_rank }} </p>
                    <p>Воинская должность: {{ profile.military_post }}</p>
                    <p>Цикл на кафедре: {{ profile.cycle }}</p>
                </div>
                <div class="card-footer">
                    <div class="row">
                        <div class="col">
                            <router-link v-if="profile.teacher_role == 1" class="btn btn-primary"
                                to="/register">Зарегистрировать пользователя</router-link>
                        </div>
                        <div class="col d-flex justify-content-end">
                            <router-link class="btn btn-success" to="/change_password">Сменить пароль</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TeacherProfile',
    props: ['profile'],
}
</script>

<style>
.bg-header-color {
    background-color: #0067b4;
    border-radius: 5px;
}
</style>