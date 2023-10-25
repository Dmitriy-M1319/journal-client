<template>
    <div class="row justify-content-center p-4">
        <div class="col-md-8 col-sm-12 bg-header-color p-2">
            <div class="card">
                <div class="card-header">
                    <h4 class="text-center">Редактирование направления</h4>
                </div>
                <div class="card-body">
                    <form @submit.prevent="onDirectionUpdateSubmit">
                        <label class="form-label" for="course">1. Введите номер курса: </label>
                        <input class="form-control" style="margin-bottom: 5px" type="text" v-model="course" />
                        <label class="form-label" for="direction_name">2. Введите наименование направления для этого курса:
                        </label>
                        <input class="form-control" style="margin-bottom: 5px" type="text" v-model="direction_name" />
                        <div class="row justify-content-center">
                            <div class="col-6 d-flex justify-content-end">
                                <button class="btn btn-success" type="submit">Редактировать</button>
                            </div>
                            <div class="col-6">
                                <form @submit.prevent="onDirectionDeleteSubmit">
                                    <button class="btn btn-danger" type="submit">Удалить</button>
                                </form>
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

const headers = {
    'accept': "application/json",
    "Content-Type": "application/json",
    'Authorization': 'Token ' + localStorage.token,
};

export default {
    name: 'DirectionCreate',
    data() {
        return {
            direction: {},
            course: '',
            direction_name: '',
        }
    },
    async mounted() {
        await axios.get(this.$url + 'directions/' + this.$route.params.id + '/', { headers })
            .then(response => {
                this.direction = response.data;
                this.course = this.direction.course;
                this.direction_name = this.direction.direction;
            });
    },
    methods: {
        async onDirectionUpdateSubmit() {
            const data = {
                course: this.course,
                direction: this.direction_name,
            }
            await axios.put(this.$url + 'directions/' + this.$route.params.id + '/', data, { headers })
                .then(response => this.$router.push('/directions'));
        },
        async onDirectionDeleteSubmit() {
            await axios.delete(this.$url + 'directions/' + this.$route.params.id + '/', { headers })
                .then(response => this.$router.push('/directions'));
        }
    },
}
</script>

<style></style>