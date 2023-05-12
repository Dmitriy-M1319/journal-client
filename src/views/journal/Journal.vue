<template>
    <div class="platoon_box">
        <div class="platoon_box_item">
            <h4>{{ $route.params.number }} взвод</h4>
            <h4>Оценки по предмету <i>Предмет {{ $route.params.id}}</i></h4>
        </div>
        <div class="platoon_box_item">
            <div class="scroll_block">
                <table class="center_div scroll_table">
                    <tr>
                        <td style="width: 10%">№ по списку</td>
                        <td>ФИО студента</td>
                        <td v-for="d in dates" class="mark-ceil">{{ splitDate(d.date)[0] }}.
                            <br />{{ splitDate(d.date)[1] }}</td>
                    </tr>
                    <JournalStudentRow v-for="sm in journal_table" v-bind:student_marks="sm" />
                </table>
            </div>
        </div>
        <a class="mark_edit_btn" style="height: 45px" href="">
            Добавить столбец
        </a>
    </div>
</template>

<script>
import JournalStudentRow from './JournalStudentRow.vue';
const dates = [
    {date: '20.10'},
    {date: '20.10'},
    {date: '20.10'},
    {date: '20.10'},
    {date: '20.10'},
    {date: '20.10'},
    {date: '20.10'},
    {date: '20.10'}
];
const journal_table = [
    {
        id: 1,
        student: {
            id: 1,
            surname: 'Колесников',
            name: 'Андрей',
            platoon: 451,
            patronymic: 'Иванович',
            military_post: 'студент',
            department: 'ФКН',
            group: '6'
        },
        marks: [
            {
                id: 1,
                attendance: 'б'
            },
            {
                id: 2,
                attendance: 'б'
            },
            {
                id: 3,
                attendance: 'б'
            },
            {
                id: 4,
                attendance: 'н'
            },
            {
                id: 5,
                mark: 2
            },
            {
                id: 6,
                mark: 3
            },
            {
                id: 7,
                mark: 4
            },
            {
                id: 7,
                mark: 4
            }
        ]
    },
    {
        id: 2,
        student: {
            id: 1,
            surname: 'Колесников',
            name: 'Андрей',
            platoon: 451,
            patronymic: 'Иванович',
            military_post: 'студент',
            department: 'ФКН',
            group: '6'
        },
        marks: [
            {
                id: 1,
                attendance: 'б'
            },
            {
                id: 2,
                attendance: 'б'
            },
            {
                id: 3,
                attendance: 'б'
            },
            {
                id: 4,
                attendance: 'н'
            },
            {
                id: 5,
                mark: 2
            },
            {
                id: 6,
                mark: 3
            },
            {
                id: 7,
                mark: 4
            },
            {
                id: 7,
                mark: 4
            }
        ]
    },
    {
        id: 1,
        student: {
            id: 1,
            surname: 'Колесников',
            name: 'Андрей',
            platoon: 451,
            patronymic: 'Иванович',
            military_post: 'студент',
            department: 'ФКН',
            group: '6'
        },
        marks: [
            {
                id: 1,
                attendance: 'б'
            },
            {
                id: 2,
                attendance: 'б'
            },
            {
                id: 3,
                attendance: 'б'
            },
            {
                id: 4,
                attendance: 'н'
            },
            {
                id: 5,
                mark: 2
            },
            {
                id: 6,
                mark: 3
            },
            {
                id: 7,
                mark: 4
            },
            {
                id: 7,
                mark: 4
            }
        ]
    },
]

export default {
    name: 'Journal',
    components: {
        JournalStudentRow
    },
    data() {
        return {
            journal_table,
            dates
        }
    },
    methods: {
        splitDate(date) {
            return date.split('.');
        }
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
    overflow-x: scroll;
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