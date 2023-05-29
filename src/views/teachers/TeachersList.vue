<template>
  <div class="row justify-content-center p-4">
    <div class="col-md-8 col-sm-12 bg-header-color p-2 mb-2">
      <div class="card">
        <div class="card-body">
          <div class="row">
            <div class="col-md-9 col-sm-7">
              <h4 class="fw-bold text-uppercase">Список преподавателей</h4>
            </div>
            <div class="col-md-3 col-sm-5 d-flex justify-content-end">
              <router-link class="btn btn-success" v-if="!is_student && profile.teacher_role === 1"
                v-bind:profile="profile" to="/teachers/create">+</router-link>
            </div>
          </div>

        </div>
      </div>
    </div>
    <div class="row m-0">
      <ul>
        <Teacher v-for="t in teachers" v-bind:teacher="t" v-bind:token="token" v-bind:profile="profile"
          v-bind:is_student="is_student" />
      </ul>
    </div>
  </div>
</template>


<script>
import Teacher from './Teacher.vue';
import axios from 'axios';

export default {
  name: 'TeachersList',
  props: ['is_student', 'token'],
  components: {
    Teacher
  },
  data() {
    return {
      teachers: [],
      profile: {}
    }
  },
  async mounted() {
    this.profile = JSON.parse(localStorage.getItem('profile'));
    const headers = {
      'accept': "application/json",
      "Content-Type": "application/json",
      'Authorization': 'Token ' + localStorage.token,
    };

    await axios.get(this.$url + 'teachers/', { headers })
      .then(response => {
        this.teachers = response.data;
      });
  },
}
</script>

<style>
</style>