<template>
    <li class="mb-2 d-flex justify-content-center">
        <div class="col-md-8 col-sm-12 bg-header-color p-2">
            <div class="card">
                <div class="card-header">
                    <h4 class="text-center">{{ teacher.surname }} {{ teacher.name }} {{ teacher.patronymic }} </h4>
                </div>
                <div class="card-body">
                    <p>Воинское звание: {{ teacher.military_rank }} </p>
                    <p>Воинская должность: {{ teacher.military_post }} </p>
                    <p>Цикл: {{ teacher.cycle }} </p>
                    <div class="row">
                        <div class="col d-flex justify-content-end">
                            <router-link class="btn btn-secondary"
                                :to="'/teachers/' + teacher.id + '/subjects'">Предметы</router-link>
                        </div>
                        <div class="col">
                        <router-link class="btn btn-primary" v-if="!is_student && profile.teacher_role === 1"
                            v-bind:token="token" :to="'/teachers/' + teacher.id">Редактировать</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </li>
</template>


<script>
export default {
    name: 'Teacher',
    props: ['profile', 'is_student', 'teacher', 'token']
}
</script>

<style>
</style>