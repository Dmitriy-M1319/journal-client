<template>
    <li class="class_day">
        <p class="class_date">Дата занятия: {{ classes.date }}</p>
        <ul>
        <SubClass v-for="sub_class in classes.classes"
        v-bind:sub_class="sub_class"
        v-bind:token="token"
        v-bind:profile="profile"/>
        </ul>
    </li>
</template>


<script>
import SubClass from './SubClass.vue';
export default {
    name: 'Classes',
    components: {
        SubClass
    },
    props: ['classes', 'profile', 'token'],
    
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

.class_day {
  border: 2px solid #000;
  border-radius: 5px;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 15px;
}
.class_date {
  background-color: #f3f3f3;
  padding-left: 5px;
  border-radius: 5px;
  max-width: 200px;
}

</style>