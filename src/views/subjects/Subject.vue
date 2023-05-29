<template>
    <div class="col-md-6 col-sm-12 p-1">
        <div class="bg-header-color p-2">
            <div class="card">
                <div class="card-header">
                    <h4 class="text-center">{{ subject.name }}</h4>
                </div>
                <div class="card-body">
                    <p>Количество часов: {{ subject.hours_count }}</p>
                    <p>Форма отчетности: {{ subject.form }}</p>
                </div>
                <div class="row d-flex justify-content-center">
                    <div class="col-4 pb-2">
                        <router-link class="btn btn-primary" v-if="!is_student && profile.teacher_role === 1"
                            :to="'/subjects/' + subject.id" v-bind:token="token">Редактировать</router-link>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>


<script>
import router from '@/router';

export default {
    name: "Subject",
    props: ["subject", 'profile', 'token'],
    components: { router }
}
</script>

<style>
</style>