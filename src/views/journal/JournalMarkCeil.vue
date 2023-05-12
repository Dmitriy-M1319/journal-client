<template>
    <td v-if="mark.attendance && mark.attendance === 'б'" class="mark-ceil">{{ mark.attendance }}</td>
    <td v-else-if="mark.attendance && mark.attendance === 'н'" class="mark-ceil mark-absence">{{ mark.attendance }}</td>
    <td v-else-if="mark.mark && mark.mark === 2" class="mark-ceil mark-fail">{{ mark.mark }}</td>
    <td v-else-if="mark.mark && mark.mark === 3" class="mark-ceil mark-satisfactory">{{ mark.mark }}</td>
    <td v-else-if="mark.mark && mark.mark === 4" class="mark-ceil mark-good">{{ mark.mark }}</td>
    <td v-else class="mark-ceil mark-excellent">{{ mark.mark }}</td>
</template>


<script>
export default {
    name: 'JournalMarkCeil',
    props: ['mark']
}
</script>

<style>
.mark-ceil {
    width: 30px;
}

.mark-fail {
    background-color: #e01b24;
}

.mark-satisfactory {
    background-color: orange;
}

.mark-good {
    background-color: deepskyblue;
}

.mark-excellent {
    background-color: limegreen;
}

.mark-absence {
    background-color: grey;
}
</style>