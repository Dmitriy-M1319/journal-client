<template>
    <table class="center_div">
        <tr>
            <td colspan="5">Дата: {{ timetable_day.date }} </td>
        </tr>
        <tr>
            <td style="padding: 5px; width: 10%;">Время занятия</td>
            <td style="padding: 5px">Предмет (преподаватель)</td>
            <td style="padding: 5px; width: 15%;">Номер темы занятия</td>
            <td style="padding: 5px; width: 15%;">Номер занятия</td>
            <td style="padding: 5px">Тип занятия</td>
        </tr>
        <TimetableRow v-for="t_class in timetable_day.classes" 
        v-bind:timetable_class="t_class" />
    </table>
</template>


<script>
import TimetableRow from './TimetableRow.vue';

export default {
    name: 'TimetableDay',
    props: ['timetable_day'],
    components: {
        TimetableRow
    },
}
</script>

<style></style>