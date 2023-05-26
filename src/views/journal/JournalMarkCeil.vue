<template>
    <td @click="onClick">
        <JournalUpdateCeil v-if="showModal" v-bind:local_mark="mark" v-on:on-ceil-update="onCeilUpdate" />
        <div v-if="mark.mark && mark.mark === 2" class="mark-ceil mark-fail">{{ mark.mark }}</div>
        <div v-else-if="mark.mark && mark.mark === 3" class="mark-ceil mark-satisfactory">{{ mark.mark }}</div>
        <div v-else-if="mark.mark && mark.mark === 4" class="mark-ceil mark-good">{{ mark.mark }}</div>
        <div v-else-if="mark.mark && mark.mark === 5" class="mark-ceil mark-excellent">{{ mark.mark }}</div>
        <div v-else-if="mark.attendance && mark.attendance === 'п'" class="mark-ceil">{{ mark.attendance }}</div>
        <div v-else-if="mark.attendance && mark.attendance === 'н'" class="mark-ceil mark-absence">{{ mark.attendance }}
        </div>
        <div v-else-if="mark.attendance && mark.attendance === 'у'" class="mark-ceil">{{ mark.attendance }}</div>
        <div v-else class="mark-ceil"> </div>
    </td>
</template>


<script>
import JournalUpdateCeil from './JournalUpdateCeil.vue';
import JournalContextMenu from "./JournalContextMenu.vue";

export default {
    name: 'JournalMarkCeil',
    components: {
        JournalUpdateCeil,
        JournalContextMenu
    },
    props: ['mark'],
    data() {
        return {
            showModal: false,
        }
    },
    methods: {
        onClick() {
            console.log(this.mark.id);
            this.showModal = true;
            this.$modal.show('journal-update-ceil');
        },
        onCeilUpdate(mark) {
            this.mark = mark;
        },
        onContextMenuClick(text) {
            alert("Clicked: " + text);
        }
    }
}
</script>

<style>
@import '~vue-context/dist/css/vue-context.css';

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