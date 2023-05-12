<template>
    <tr>
        <td>{{timetable_class.time}}</td>
        <td>
            <p> {{ timetable_class.subject.name }} </p>
            <p>{{ timetable_class.subject.teacher }}</p>
        </td>
        <td> Тема №{{ timetable_class.theme_number }}</td>
        <td>Занятие №{{ timetable_class.class_number }}</td>
        <td>{{ timetable_class.class_type }}</td>
    </tr>
</template>


<script>
export default {
    name: 'TimetableRow',
    props: ['timetable_class']
}
</script>

<style></style>