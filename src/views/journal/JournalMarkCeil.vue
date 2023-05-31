<template>
    <td type="button" class="journal-item" v-on:click="onClick" v-on:on-ceil-update="onCeilUpdate">
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
import axios from 'axios';

export default {
    name: 'JournalMarkCeil',
    components: {
        JournalUpdateCeil,
    },
    props: ['mark', 'show'],
    data() {
        return {
            showModal: false,
        }
    },
    methods: {
        onClick() {
            console.log('open-modal');
            this.$modal.show(
                JournalUpdateCeil,
                { edited_mark: this.mark },
                { clickToClose: false },
                { 'before-close': this.onCeilUpdate }
            )
        },
        async onCeilUpdate(event) {
            const headers = {
                'accept': "application/json",
                "Content-Type": "application/json",
                'Authorization': 'Token ' + localStorage.token,
            };

            await axios.get(this.$url + 'ceils/' + this.mark.id + '/', { headers })
                .then(response => this.mark = response.data);
            console.log('on update');
        },
    }
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