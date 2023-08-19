<template>
  <li class="mb-3">
    <div class="row justify-content-center">
      <div class="col-9 p-2 border border-2 border-dark rounded">
        <div class="container">
          <div class="row">
            <div class="col-2">
              <p class="class_date bg-header-color text-white text-center">Дата занятия: {{ classes.date }}</p>
            </div>
            <div class="col-10">
              <ul>
                <SubClass v-for="sub_class in classes.classes" v-bind:sub_class="sub_class" />
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  </li>
</template>


<script>
import SubClass from './SubClass.vue';
export default {
  name: 'Classes',
  components: {
    SubClass
  },
  props: ['classes', 'profile'],

}
</script>

<style>
.bg-header-color {
    background-color: #0067b4;
    border-radius: 5px;
}
.class_date {
  padding-left: 5px;
  border-radius: 5px;
  max-width: 200px;
}
</style>