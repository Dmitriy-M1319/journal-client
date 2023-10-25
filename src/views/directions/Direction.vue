<template>
    <li class="mb-2 d-flex justify-content-center">
        <div class="col-6 bg-header-color p-2">
            <div class="card">
                <div class="card-header">
                    <h4 class="text-center">Направление № {{direction.id}}</h4>
                </div>
                <div class="card-body">
                    <p>Курс: {{ direction.course }} </p>
                    <p>Название направления: {{ direction.direction }} </p>
                    <div class="row">
                        <div class="col d-flex justify-content-end">
                            <router-link class="btn btn-primary" v-if="!is_student && profile.teacher_role === 1"
                                v-bind:token="token" :to="'/directions/' + direction.id">Редактировать</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </li>
</template>


<script>
export default {
    name: 'Direction',
    props: ['profile', 'direction', 'token'],
    data() {
        return {
            is_student: false
        }
    },
}
</script>

<style></style>