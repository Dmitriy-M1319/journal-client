<template>
    <modal name="journal-add-column">
        <div class="platoon_box">
            <div class="platoon_box_item_custom">
                <h4>Добавить ячейки для занятия</h4>
            </div>
            <div class="platoon_box_item_custom">
                <form @submit.prevent="submitForm">
                    <label for="rank">Выберите занятие: </label>
                    <br>
                    <select v-model="class_id">
                        <option v-for="c in classes" :value="c.id">
                            Тема №{{ c.theme_number }} Занятие №{{ c.class_number }}
                        </option>
                    </select>
                    <button class="mark_edit_btn" type="submit">Отправить</button>
                </form>
            </div>
        </div>
    </modal>
</template>

<script>
import axios from 'axios';

export default {
    name: 'JournalAddColumn',
    props: ['platoon', 'subject'],
    data() {
        return {
            classes: [],
            class_id: 0,
        }
    },
    methods: {
        async submitForm() {
            const headers = {
                'accept': "application/json",
                "Content-Type": "application/json",
            };

            await axios.post(this.$url + 'classes/' + this.class_id + '/create_column/', { headers })
                .then(response => this.$router.push('/journal/subject/' + this.subject + '/platoon/' + this.platoon + '/'))
        }
    },
    async mounted() {
        const headers = {
            'accept': "application/json",
            "Content-Type": "application/json",
        };

        await axios.get(this.$url + 'platoons/' + this.platoon + '/classes' + '?subj_id=' + this.subject, { headers })
            .then(response => this.classes = response.data)
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

.platoon_box_item p {
    margin: 5px;
}

.platoon_box_item a {
    margin: 1px;
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
</style>