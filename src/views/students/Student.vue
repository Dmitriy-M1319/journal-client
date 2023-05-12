<template>
        <tr>
            <td>{{ index + 1 }}</td>
            <td>{{ student.surname }}
                {{ student.name }}
                {{ student.patronymic }}</td>
            <td>{{ student.military_post }}</td>
        </tr>
</template>

<script>
export default {
    name: 'Student',
    props: ['student', 'index']
}
</script>

<style scoped>
tr td {
    border: 1px solid #000;
}
</style>