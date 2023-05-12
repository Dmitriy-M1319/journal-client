<template>
    <div class="platoon_box">
        <div class="platoon_box_item">
            <h4>Создание нового преподавателя</h4>
        </div>
        <div class="platoon_box_item">
            <form action="" method="post">
                <label for="surname">1. Введите фамилию: </label>
                <input type="text" name="surname" id="surname" />
                <br />
                <label for="name">2. Введите имя: </label>
                <input type="text" name="name" id="name" />
                <br />
                <label for="patronymic">3. Введите отчество (если есть): </label>
                <input type="text" name="patronymic" id="patronymic" />
                <br />
                <label for="rank">4. Выберите воинское звание: </label>
                <select name="rank" id="rank">
                    <option v-for="r in ranks" :value="r">{{ r }}</option>
                </select>
                <br />
                <label for="post">5. Введите воискую должность: </label>
                <input type="text" name="post" id="post" />
                <br />
                <label for="cycle">6. Введите название цикла подготовки: </label>
                <input type="text" name="cycle" id="cycle" />
                <input class="exit_btn" type="submit" value="Добавить" />
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

export default {
    name: 'TeacherCreate',
    data() {
        return {
            ranks
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

</style>