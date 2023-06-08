<template>
    <tr class="journal-item">
        <td class="journal-item">{{ index + 1 }} </td>
        <td class="journal-item">{{ student_marks.student.surname }}
            {{ student_marks.student.name.substring(0, 1) }}.

            {{ student_marks.student.patronymic.substring(0, 1) }}.
        </td>
        <JournalMarkCeil v-for="ceil in student_marks.marks" v-bind:mark="ceil" />
    </tr>
</template>


<script>
import JournalMarkCeil from './JournalMarkCeil.vue';

export default {
    name: 'JournalStudentRow',
    components: {
        JournalMarkCeil,
    },
    props: ['student_marks', 'index'],
    data() {
        return {
            current_mark: {},
        }
    },
}
</script>

<style></style>