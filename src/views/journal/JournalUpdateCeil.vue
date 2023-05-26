<template>
    <modal name="journal-update-ceil">
        <div class="platoon_box">
            <div class="platoon_box_item_custom">
                <h4>Редактировать оценку</h4>
            </div>
            <div class="platoon_box_item_custom">
                <form @submit.prevent="submitForm">
                    <label for="rank">1. Выберите посещаемость: </label>
                    <br>
                    <select v-model="attendance">
                        <option v-for="a in attendances" :value="a.att">
                            {{ a.value }}
                        </option>
                    </select>
                    <br>
                    <label for="rank">2. Выберите оценку: </label>
                    <br>
                    <select v-model="mark">
                        <option v-for="m in marks" :value="m.value">
                            {{ m.name }}
                        </option>
                    </select>
                    <button class="mark_edit_btn" type="submit">Редактировать</button>
                </form>
            </div>
        </div>
    </modal>
</template>

<script>
import axios from 'axios';

export default {
    name: 'JournalUpdateCeil',
    props: ['local_mark'],
    data() {
        return {
            edited_mark: {},
            attendances: [
                { att: 'п', value: 'присутствовал' },
                { att: 'у', value: 'уважительная причина' },
                { att: 'н', value: 'неуважительная причина' },
                { att: '', value: 'нет посещаемости' }
            ],
            marks: [
                { value: 5, name: 'отлично (5)' },
                { value: 4, name: 'хорошо (4)' },
                { value: 3, name: 'удовлетворительно (3)' },
                { value: 2, name: 'неудовлетворительно (2)' },
                { value: 0, name: 'не оценено' },
            ],
            attendance: '',
            mark: 0
        }
    },
    methods: {
        async submitForm() {
            const headers = {
                'accept': "application/json",
                "Content-Type": "application/json",
            'Authorization': 'Token ' + localStorage.token,
            };

            const data = {
                student: this.edited_mark.student,
                subject_class: this.edited_mark.subject_class,
                attendance: this.attendance,
                mark: this.mark
            };
            await axios.put(this.$url + 'ceils/' + this.local_mark.id + '/', data, { headers })
                .then(response => this.$emit('on-ceil-update', response.data));
            this.$modal.hide("journal-update-ceil")
        }
    },
    async mounted() {
        console.log('id' + this.local_mark.id);
        const headers = {
            'accept': "application/json",
            "Content-Type": "application/json",
        };

        await axios.get(this.$url + 'ceils/' + this.local_mark.id + '/', { headers })
            .then(response => {
                this.edited_mark = response.data;
                this.attendance = this.edited_mark.attendance;
                this.mark = this.edited_mark.mark;
            });
    },
}
</script>

<style>
.platoon_box {
    background-color: #4d8bc3;
    padding: 15px;
    border-radius: 5px;
    height: 100%;
}

.platoon_box ul {
    list-style-type: none;
    padding: 0;
}

.platoon_box_item_custom {
    background-color: #f3f3f3;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 5px;
    border-radius: 5px;
    margin-bottom: 15px;
}

.platoon_box_item_custom h4 {
    text-align: center;
    margin: 5px;
}

.mark_edit_btn {
    background-color: #26a269;
    border: 1px solid #cccccc;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset;
    transition: border 0.2s linear 0s, box-shadow 0.2s linear 0s;
    border-radius: 4px;
    color: white;
    display: block;
    width: 130px;
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
</style>