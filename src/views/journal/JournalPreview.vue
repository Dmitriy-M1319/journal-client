<template>
    <div class="platoon_box">
        <div class="platoon_box_item">
            <h4>Выбор страницы журнала:</h4>
            <form @submit.prevent="onSubmit">
                <label for="subjects">Выберите предмет:</label>
                <select id="subjects" v-model="subject">
                    <option v-for="s in subjects" v-bind:value="s.id" >{{ s.name }}</option>
                </select>
                <br>
                <label for="platoons">Выберите взвод:</label>
                <select id="platoons" v-model="platoon">
                    <option v-for="p in platoons" v-bind:value="p.platoon_number">{{ p.platoon_number }} взвод</option>
                </select>
                <br>
                <button type="submit">Открыть</button>
            </form>
        </div>
    </div>
</template>


<script>
import axios from 'axios';

export default {
    name: 'JournalPreview',
    data() {
        return {
            subject: 0,
            platoon: 0,
            subjects: [],
            platoons: []
        }
    },
    async mounted() {
        const headers = {
            'accept': "application/json",
            "Content-Type": "application/json",
        };

        await axios.get('http://127.0.0.1:8000/api/v1/platoons/')
        .then(response => this.platoons = response.data);

        await axios.get('http://127.0.0.1:8000/api/v1/subjects/')
        .then(response => this.subjects = response.data);
    },
    methods: {
        onSubmit() {
            this.$router.push('/journal/subject/' + this.subject + '/platoon/' + this.platoon);
        }
    },
}
</script>
<style>
.platoon_box {
    background-color: #4d8bc3;
    padding: 15px;
    border-radius: 5px;
}

.platoon_box ul {
    list-style-type: none;
    padding: 0;
}

.platoon_box_item {
    background-color: #f3f3f3;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 5px;
    border-radius: 5px;
    margin-bottom: 15px;
    min-width: 950px;
    overflow: auto;
}

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
</style>