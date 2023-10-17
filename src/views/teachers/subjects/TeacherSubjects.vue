<template>
    <div class="container overflow-hidden mx-auto p-4">
        <div class="row mb-1 p-1">
            <div class="col-md-12 bg-header-color p-2">
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-9 col-sm-7">
                                <h4 class="fw-bold text-uppercase">предметы</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row gx-4">
            <TeacherSubject v-for="s in subjects" v-bind:subject="s" v-bind:profile="profile" />
        </div>
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
            'Authorization': 'Token ' + localStorage.token,
        };

        await axios.get(this.$url + 'teachers/' + this.$route.params.id + '/subjects/', { headers })
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