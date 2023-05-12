<template>
    <div class="platoon_box">
        <div class="platoon_box_item">
            <h3 style="text-align: center">МОИ ПРЕДМЕТЫ</h3>
        </div>
        <ul>
            <Subject v-for="s in subjects" v-bind:subject="s" />
        </ul>
        <!-- TODO: Сделать проверку на начальников -->
        <router-link class="mark_edit_btn" to="/subjects/create">Создать</router-link>
    </div>
</template>


<script>
import Subject from "@/views/subjects/Subject.vue";
const subjects = [
    {
        id: 1,
        teacher: 1,
        name: 'Предмет 1',
        hours_count: 30,
        form: 'Экзамен'
    },
    {
        id: 2,
        teacher: 1,
        name: 'Предмет 2',
        hours_count: 31,
        form: 'Экзамен'
    },
    {
        id: 3,
        teacher: 1,
        name: 'Предмет 3',
        hours_count: 32,
        form: 'Зачет'
    },
    {
        id: 4,
        teacher: 1,
        name: 'Предмет 4',
        hours_count: 33,
        form: 'Зачет'
    }
]
export default {
    name: 'SubjectsList',
    components: {
        Subject
    },
    data() {
        return {
            subjects
        }
    }
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