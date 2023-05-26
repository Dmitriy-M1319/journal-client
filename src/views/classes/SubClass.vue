<template>
    <li>
        <div class="platoon_box_item">
            <h4>Аудитория {{ sub_class.classroom }}</h4>
            <p>Предмет: {{ subject.name }}</p>
            <p>Взвод, у которого занятие: {{ sub_class.platoon }}</p>
            <p>Время: {{ getTime(sub_class.class_date) }}</p>
            <p>Тема (номер, название): № {{ sub_class.theme_number }}. {{ sub_class.theme_name }}</p>
            <p>Занятие (номер, название): № {{ sub_class.class_number }}. {{ sub_class.class_name }} </p>
            <p>Тип занятия: {{ sub_class.class_type }}</p>
            <div style="display: flex">
                <router-link class="exit_btn" :to="'/classes/' + sub_class.id" v-bind:token="token"
                    v-bind:profile="profile">Редактировать</router-link>
            </div>
        </div>
    </li>
</template>


<script>
import axios from 'axios';

export default {
    name: 'Class',
    props: ['sub_class', 'token', 'profile'],
    data() {
        return {
            subject: {}
        }
    },
    async mounted() {
        const headers = {
            'accept': "application/json",
            "Content-Type": "application/json",
            'Authorization': 'Token ' + this.token,
        };

        await axios.get(this.$url + 'subjects/' + this.sub_class.subject + '/', { headers })
            .then(response => this.subject = response.data);
    },
    methods: {
        getTime(time) {
            let date_and_time = time.split('T');
            return date_and_time[1].substring(0, 5);
        }
    }
}
</script>

<style>
.platoon_box_item h4 {
    text-align: center;
    margin: 5px;
}

.platoon_box_item p {
    margin: 5px;
}

.platoon_box_item a {
    margin: 1px;
}

.exit_btn {
    background-color: #4d8bc3;
    border: 1px solid #cccccc;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset;
    transition: border 0.2s linear 0s, box-shadow 0.2s linear 0s;
    border-radius: 4px;
    color: white;
    display: block;
    width: 100px;
    margin: 20px auto;
    font-size: 14px;
    text-align: center;
    font-weight: 600;
    height: 25px;
    line-height: 20px;
    margin-bottom: 10px;
    padding: 1px 6px;
    vertical-align: middle;
    text-decoration: none;
}

.mark_edit_btn {
    background-color: #26a269;
    border: 1px solid #cccccc;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset;
    transition: border 0.2s linear 0s, box-shadow 0.2s linear 0s;
    border-radius: 4px;
    color: white;
    display: block;
    width: 100px;
    margin: 20px auto;
    font-size: 14px;
    text-align: center;
    font-weight: 600;
    height: 25px;
    line-height: 20px;
    margin-bottom: 10px;
    padding: 1px 6px;
    vertical-align: middle;
    text-decoration: none;
}
</style>