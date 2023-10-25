<template>
    <div class="row justify-content-center p-4">
        <div class="col-md-8 col-sm-12 bg-header-color p-2">
            <div class="card">
                <div class="card-header">
                    <h4 class="text-center">Создание направления</h4>
                </div>
                <div class="card-body">
                    <form @submit.prevent="onDirectionCreateSubmit">
                        <label class="form-label" for="course">1. Введите номер курса: </label>
                        <input class="form-control" style="margin-bottom: 5px" type="text" v-model="course" />
                        <label class="form-label" for="direction">2. Введите наименование направления для этого курса: </label>
                        <input class="form-control" style="margin-bottom: 5px" type="text" v-model="direction" />
                        <div class="row justify-content-center">
                            <div class="col-2">
                                <button class="btn btn-success" type="submit">Создать</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import axios from 'axios';

export default {
    name: 'DirectionCreate',
    data() {
        return {
            course: '',
            direction: '',
        }
    },
    methods: {
        async onDirectionCreateSubmit() {
            const headers = {
                'accept': "application/json",
                "Content-Type": "application/json",
                'Authorization': 'Token ' + localStorage.token,
            };

            const data = {
                course: this.course,
                direction: this.direction,
            }
            await axios.post(this.$url + 'directions/', data, { headers })
                .then(response => this.$router.push('/directions'));
        }
    },
}
</script>

<style>
</style>