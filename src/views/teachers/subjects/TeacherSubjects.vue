<template>
    <div class="platoon_box">
        <div class="platoon_box_item">
            <h3 style="text-align: center">ПРЕДМЕТЫ</h3>
        </div>
        <ul>
            <TeacherSubject v-for="s in subjects" v-bind:subject="s" 
            v-bind:token="token"/>
        </ul>
    </div>
</template>


<script>
import TeacherSubject from './TeacherSubject.vue';
import axios from 'axios';


export default {
    name: 'TeacherSubjects',
    props: ['token'],
    components: {
        TeacherSubject
    },
    data() {
        return {
            subjects: []
        }
    },
    async mounted() {
        const headers = {
            'accept': "application/json",
            "Content-Type": "application/json",
            'Authorization': 'Token ' + this.token,
        };

        await axios.get('http://127.0.0.1:8000/api/v1/teachers/' + this.$route.params.id + '/subjects/', { headers })
            .then(response => this.subjects = response.data);
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