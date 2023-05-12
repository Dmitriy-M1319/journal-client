<template>
    <div class="platoon_box">
        <div class="platoon_box_item">
            <h4>Редактирование преподавателя</h4>
        </div>
        <div class="platoon_box_item">
            <form action="" method="post">
                <label for="surname">1. Введите фамилию: </label>
                <input type="text" id="surname" :value="teacher.surname" />
                <br />
                <label for="name">2. Введите имя: </label>
                <input type="text" name="name" id="name" :value="teacher.name" />
                <br />
                <label for="patronymic">3. Введите отчество (если есть): </label>
                <input type="text" name="patronymic" id="patronymic" :value="teacher.patronymic" />
                <br />
                <label for="rank">4. Выберите воинское звание: </label>
                <select name="rank" id="rank">
                    <option v-for="r in ranks" :value="r">{{ r }}</option>
                </select>
                <br />
                <label for="post">5. Введите воискую должность: </label>
                <input type="text" name="post" id="post" :value="teacher.military_post" />
                <br />
                <label for="cycle">6. Введите название цикла подготовки: </label>
                <input type="text" name="cycle" id="cycle" :value="teacher.cycle" />
                <input class="exit_btn" type="submit" value="Обновить" />
            </form>
            <form action="" method="post">
                <button class="delete_btn" type="submit">Уволить</button>
            </form>
        </div>
    </div>
</template>


<script>
const ranks = [
    'лейтенант',
    'старший лейтенант',
    'капитан',
    'майор',
    'подполковник',
    'полковник'
];

const teacher = {
    id: 1,
    surname: 'Фамилия',
    name: 'Имя',
    patronymic: 'Отчество',
    military_rank: 'капитан',
    military_post: 'преподаватель',
    cycle: 'цикл 1',
};

export default {
    name: 'TeacherUpdate',
    data() {
        return {
            ranks,
            teacher
        }
    },
}
</script>

<style>
.platoon_box_item form input {
    margin-bottom: 5px;
}

.platoon_box_item form select {
    margin-bottom: 5px;
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

.delete_btn {
    background-color: #e01b24;
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