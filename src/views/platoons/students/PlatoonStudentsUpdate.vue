<template>
    <div class="row justify-content-center pt-4">
        <div class="col-sm-9 bg-header-color p-3 local_table">
            <div class="card">
                <div class="card-header">
                    <h4 class="fw-bold text-center mb-0">Изменение списка студентов {{ this.$route.params.number }} взвода
                    </h4>
                </div>
                <div class="card-body">
                    <table class="table table-bordered border-dark local_table">
                        <thead>
                            <tr>
                                <td style="width: 10%">Номер</td>
                                <td style="width: 55%">ФИО</td>
                                <td style="width: 25%">Должность</td>
                                <td style="width: 20%">Действие</td>
                            </tr>
                        </thead>
                        <tbody>
                            <PlatoonStudentUpdate v-for="(student, index) in students" v-bind:index="index"
                                v-bind:student="student" />
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import PlatoonStudentUpdate from './PlatoonStudentUpdate.vue';
export default {
    name: 'PlatoonStudentsUpdate',
    components: {
        PlatoonStudentUpdate
    },
    async mounted() {
        const headers = {
            'accept': "application/json",
            "Content-Type": "application/json",
            'Authorization': 'Token ' + localStorage.token,
        };
        await axios.get(this.$url + 'platoons/' + this.$route.params.number + '/students/', { headers })
            .then(response => {
                this.students = response.data;
            });
    },
    data() {
        return {
            students: []
        }
    }
}
</script>

<style>
.local_table {
    height: 700px;
    overflow-y: scroll;
}
</style>