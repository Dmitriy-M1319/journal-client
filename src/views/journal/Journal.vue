<template>
    <div>
        <h4 class="fw-bold text-center">{{ platoon }} взвод</h4>
        <h4 class="fw-bold text-center">Оценки по предмету <i>{{ local_subject.name }}</i></h4>
        <div class="table-responsive">
            <table class="journal-table center_div scroll_table">
                <tr class="journal-item">
                    <td class="journal-item">№ по списку</td>
                    <td class="journal-item" style="width: 200px;">ФИО студента</td>
                    <td v-for="c in classes" class="journal-item mark-ceil">{{ splitDate(c.class_date)[2] }}.
                        <br />{{ splitDate(c.class_date)[1] }}
                    </td>
                </tr>
                <JournalStudentRow v-for="(sm, index) in journal_table" v-bind:index="index" v-bind:student_marks="sm" />
            </table>
        </div>

    </div>
</template>

<script>
import JournalStudentRow from './JournalStudentRow.vue';
import JournalAddColumn from './JournalAddColumn.vue';
import ErrorModal from '../ErrorModal.vue';
import axios from 'axios';

export default {
    name: 'Journal',
    props: ['subject', 'platoon'],
    components: {
        JournalStudentRow,
        JournalAddColumn
    },
    data() {
        return {
            journal_table: [],
            classes: [],
            local_subject: {},
            dates: [],
            show: false,
        }
    },
    async mounted() {
        const headers = {
            'accept': "application/json",
            "Content-Type": "application/json",
            'Authorization': 'Token ' + localStorage.token,
        };


        await axios.get(this.$url + 'platoons/' +
            this.platoon + '/journal/?subj_id=' + this.subject, { headers })
            .then(response => {
                this.journal_table = response.data;
            })
            .catch(error => {
                this.$modal.show(
                    ErrorModal,
                    { detail: error.response.data.detail},
                    { clickToClose: false, height: '180px' },
                )
                return;
            });

        await axios.get(this.$url + 'platoons/' +
            this.platoon + '/classes/?subj_id=' + this.subject, { headers })
            .then(response => {
                this.classes = response.data;
            });
        await axios.get(this.$url + 'subjects/' +
            this.subject + '/', { headers })
            .then(response => {
                this.local_subject = response.data;
            });
    },
    methods: {
        splitDate(date) {
            let date_time = date.split('T')
            let new_date = date_time[0].split('-');
            return new_date;
        },
    }
}
</script>

<style>
.journal-table {
    vertical-align: center;
    text-align: center;
    border: 1px solid #000;
    table-layout: fixed;
    margin: 8px;
    border-radius: 5px;
    min-width: 1250px;
}

.journal-item {
    border: 1px solid #000;
}

.center_div {
    margin: 0 auto;
    /* width: 100%; */
}

.scroll_block {
    width: 1980px;
}

.scroll_table {
    display: block;
    white-space: nowrap;
}

.scroll_table tbody {
    display: table;
}

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