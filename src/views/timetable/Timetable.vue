<template>
    <div class="platoon_box">
        <div class="platoon_box_item">
            <h4>Расписание занятий 451 взвода</h4>
        </div>
        <div class="platoon_box_item">
           <TimetableDay v-for="day in timetable_data" 
           v-bind:timetable_day="day" />
        </div>
    </div>
</template>


<script>
import TimetableDay from './TimetableDay.vue';
const timetable_data = [
    {
        date: '13.05.2022', classes: [
            {
                id: 1,
                subject: {
                    name: "Предмет 1",
                    teacher: 'подполковник Иванов А.А.'
                },
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
                subject: {
                    name: "Предмет 1",
                    teacher: 'подполковник Иванов А.А.'
                },
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
                subject: {
                    name: "Предмет 1",
                    teacher: 'подполковник Иванов А.А.'
                },
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
                subject: {
                    name: "Предмет 1",
                    teacher: 'подполковник Иванов А.А.'
                },
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
export default {
    name: 'Timetable',
    components: {
        TimetableDay
    },
    data() {
        return {
            timetable_data
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

.platoon_box_item table {
    vertical-align: center;
    text-align: center;
    border: 1px solid #000;
    table-layout: fixed;
    margin: 8px;
    border-radius: 5px;
}

.platoon_box_item table tr td {
    border: 1px solid #000;
}</style>