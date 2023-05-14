<template>
    <tr>
        <td>{{ student_marks.student.id }} </td>
        <td>{{ student_marks.student.surname }}
            {{ student_marks.student.name.substring(0, 1) }}.
            {{ student_marks.student.patronymic.substring(0, 1) }}.</td>
        <JournalModalCeil v-for="ceil in student_marks.marks" v-bind:mark="ceil" />
    </tr>
</template>


<script>
// import JournalMarkCeil from '@/views/journal/JournalMarkCeil.vue';
import JournalModalCeil from '@/views/journal/JournalModalCeil.vue';
export default {
    name: 'JournalStudentRow',
    components: {
        // JournalMarkCeil
        JournalModalCeil
    },
    props: ['student_marks']
}
</script>

<style></style>