<template>
        <tr v-bind:class="{expulsion: student.order_of_expulsion.length != 0}">
            <td>{{ index + 1 }}</td>
            <td>{{ student.surname }}
                {{ student.name }}
                {{ student.patronymic }}</td>
            <td>{{ student.military_post }}</td>
            <td>{{ student.birth_year }}</td>
            <td>{{ platoon.order_of_enrollment }}</td>
            <td>{{ student.order_of_expulsion }}</td>
            <td>{{ student.marital_status }}</td>
            <td>
                <p>{{ student.address }}</p>
                <p>{{ student.phone_number }}</p>
            </td>
            <td>{{ student.public_load }}</td>
            <td>{{ student.department }}</td>
            <td>{{ student.sports_category }}</td>
        </tr>
</template>

<script>
export default {
    name: 'Student',
    props: ['student', 'index', 'platoon']
}
</script>

<style scoped>
tr td {
    border: 1px solid #000;
}

.expulsion {
    background-color: #e01b24;
    color: white;
}
</style>