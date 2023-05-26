<template>
    <div class="platoon_box">
        <div class="platoon_box_item">
            <h4>{{ $route.params.number }} взвод</h4>
            <h4>Оценки по предмету <i>{{ subject.name }}</i></h4>
        </div>
        <div class="platoon_box_item">
            <div class="scroll_block">
                <table class="center_div scroll_table">
                    <tr>
                        <td style="width: 10%">№ по списку</td>
                        <td>ФИО студента</td>
                        <td v-for="c in classes" class="mark-ceil">{{ splitDate(c.class_date)[2] }}.
                            <br />{{ splitDate(c.class_date)[1] }}
                        </td>
                    </tr>
                    <JournalStudentRow v-for="sm in journal_table" v-bind:student_marks="sm" />
                </table>
            </div>
        </div>
        <JournalAddColumn v-bind:platoon="$route.params.number" v-bind:subject="$route.params.id" />
    </div>
</template>

<script>
import JournalStudentRow from './JournalStudentRow.vue';
import JournalAddColumn from './JournalAddColumn.vue';
import axios from 'axios';

export default {
    name: 'Journal',
    props: ['token'],
    components: {
        JournalStudentRow,
        JournalAddColumn
    },
    data() {
        return {
            journal_table: [],
            classes: [],
            subject: {},
            dates: [],
            show: false,
        }
    },
    async mounted() {
        const headers = {
            'accept': "application/json",
            "Content-Type": "application/json",
            'Authorization': 'Token ' + this.$route.query.token,
        };

        console.log(this.$route.query.token);

        await axios.get(this.$url + 'platoons/' +
            this.$route.params.number + '/journal/?subj_id=' + this.$route.params.id, { headers })
            .then(response => {
                this.journal_table = response.data;
            });
        await axios.get(this.$url + 'platoons/' +
            this.$route.params.number + '/classes/?subj_id=' + this.$route.params.id, { headers })
            .then(response => {
                this.classes = response.data;
            });
        await axios.get(this.$url + 'subjects/' +
            this.$route.params.id +'/', { headers })
            .then(response => {
                this.subject = response.data;
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
.center_div {
    margin: 0 auto;
    /* width: 100%; */
}

.platoon_box {
    background-color: #4d8bc3;
    padding: 15px;
    border-radius: 5px;
}

.platoon_box ul {
    list-style-type: none;
    padding: 0;
}

.platoon_box_item {
    background-color: #f3f3f3;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 5px;
    border-radius: 5px;
    margin-bottom: 15px;
    min-width: 950px;
    overflow: auto;
}

.platoon_box_item h4 {
    text-align: center;
    margin: 5px;
}

.platoon_box_item p {
    margin: 5px;
}

.platoon_box_item a {
    margin: 1px;
}

.platoon_box_item table {
    vertical-align: center;
    text-align: center;
    border: 1px solid #000;
    table-layout: fixed;
    margin: 8px;
    border-radius: 5px;
}

.platoon_box_item table tr td {
    border: 1px solid #000;
}

.mark_edit_btn {
    background-color: #26a269;
    border: 1px solid #cccccc;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset;
    transition: border 0.2s linear 0s, box-shadow 0.2s linear 0s;
    border-radius: 4px;
    color: white;
    display: block;
    width: 100px;
    margin: 20px auto;
    font-size: 14px;
    text-align: center;
    font-weight: 600;
    height: 25px;
    line-height: 20px;
    margin-bottom: 10px;
    padding: 1px 6px;
    vertical-align: middle;
    text-decoration: none;
}


.scroll_block {
    overflow-x: auto;
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