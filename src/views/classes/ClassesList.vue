<template>
    <div class="platoon_box">
        <div class="platoon_box_item">
            <h3 style="text-align: center">МОИ ЗАНЯТИЯ</h3>
        </div>
        <ul>
            <Class v-for="classes in all_classes" v-bind:classes="classes" />
        </ul>
        <router-link class="mark_edit_btn" to="/classes/create">Создать новое</router-link>
    </div>
</template>


<script>
import Class from './Class.vue';
export default {
    name: 'ClassesList',
    components: {
        Class
    },
    data() {
        return {
            all_classes: [
                {
                    date: '13.05.2022', classes: [
                        {
                            id: 1,
                            subject: "Предмет 1",
                            platoon: "451",
                            time: "8.35",
                            theme_number: 1,
                            theme_name: "Название темы",
                            class_number: 1,
                            class_name: "Название занятия",
                            class_type: "лекция",
                            classroom: 304
                        },
                        {
                            id: 2,
                            subject: "Предмет 1",
                            platoon: "451",
                            time: "8.35",
                            theme_number: 1,
                            theme_name: "Название темы",
                            class_number: 1,
                            class_name: "Название занятия",
                            class_type: "лекция",
                            classroom: 304
                        },
                    ]
                },
                {
                    date: '16.05.2022', classes: [
                        {
                            id: 3,
                            subject: "Предмет 1",
                            platoon: "451",
                            time: "8.35",
                            theme_number: 1,
                            theme_name: "Название темы",
                            class_number: 1,
                            class_name: "Название занятия",
                            class_type: "лекция",
                            classroom: 304
                        },
                        {
                            id: 4,
                            subject: "Предмет 1",
                            platoon: "451",
                            time: "8.35",
                            theme_number: 1,
                            theme_name: "Название темы",
                            class_number: 1,
                            class_name: "Название занятия",
                            class_type: "лекция",
                            classroom: 304
                        },
                    ]
                }
            ]
        }
    }
}

</script>

<style>
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
