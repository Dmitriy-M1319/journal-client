<template>
    <table class="timetable center_div">
        <tr class="timetable-tr">
            <td class="timetable-td" v-if="timetable_day.classes != null" colspan="5">Дата: {{
                timetable_day.date }} </td>
            <td class="timetable-td" v-else>Дата: {{ timetable_day.date }} </td>
        </tr>
        <tr class="timetable-tr" v-if="timetable_day.classes != null">
            <td class="timetable-td" style="padding: 5px; width: 10%;">Время занятия</td>
            <td class="timetable-td" style="padding: 5px">Предмет (преподаватель)</td>
            <td class="timetable-td" style="padding: 5px; width: 15%;">Номер темы занятия</td>
            <td class="timetable-td" style="padding: 5px; width: 15%;">Номер занятия</td>
            <td class="timetable-td" style="padding: 5px">Тип занятия</td>
        </tr>
        <TimetableRow v-if="timetable_day.classes != null" v-for="t_class in timetable_day.classes" v-bind:token="token"
            v-bind:timetable_class="t_class" />
        <tr class="timetable-tr" v-if="timetable_day.message != null">
            <td style="width: 100%;">
                {{ timetable_day.message }}
            </td>
        </tr>
    </table>
</template>


<script>
import TimetableRow from './TimetableRow.vue';

export default {
    name: 'TimetableDay',
    props: ['timetable_day', 'token'],
    components: {
        TimetableRow
    },
}
</script>

<style>
.center_div {
    margin: 0 auto;
    width: 100%;
}
</style>