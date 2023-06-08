<template>
    <div class="container overflow-hidden p-4">
        <div class="row mb-1 p-1">
            <div class="col-md-12 bg-header-color p-2">
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-9 col-sm-7">
                                <h4 class="fw-bold text-uppercase">Мои предметы</h4>
                            </div>
                            <div class="col-md-3 col-sm-5 d-flex justify-content-end">
                                <router-link class="btn btn-success" v-if="!is_student && profile.teacher_role === 1"
                                    :to=" { name: 'subject-create', query: { is_create: true } }">+</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row gx-4">
            <Subject v-for="s in subjects" v-bind:subject="s" v-bind:profile="profile" />
        </div>
    </div>
</template>


<script>
import Subject from "@/views/subjects/Subject.vue";
import axios from 'axios';


export default {
    name: 'SubjectsList',
    props: ['is_student', 'token', 'profile'],
    components: {
        Subject
    },
    data() {
        return {
            subjects: []
        }
    },
    async mounted() {
        this.profile = JSON.parse(localStorage.getItem('profile'));
        const headers = {
            'accept': "application/json",
            "Content-Type": "application/json",
            'Authorization': 'Token ' + localStorage.token,
        };

        if (this.profile.teacher_role === 0) {
            await axios.get(this.$url + 'teachers/' + this.profile.id + '/subjects/', { headers })
                .then(response => this.subjects = response.data);
        } else {
            await axios.get(this.$url + 'subjects/', { headers })
                .then(response => this.subjects = response.data);
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