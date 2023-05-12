<template>
    <div class="platoon_box">
        <div class="platoon_box_item">
            <h4>Создание нового предмета</h4>
            <form action="" method="post">
                <label for="name">1. Введите название предмета: </label>
                <input style="margin-bottom: 5px" type="text" name="name" id="name" />
                <br />
                <label for="teachers">2. Выберите куратора взвода: </label>
                <select style="margin-bottom: 5px" name="teachers" id="teacher">
                    <option v-for="teacher in teachers" :value="teacher.id">{{ teacher.surname }}
                        {{ teacher.name }}
                        {{ teacher.patronymic }}</option>
                </select>
                <br />
                <label for="hours">3. Введите количество часов: </label>
                <input style="margin-bottom: 5px" type="text" name="hours" id="hours" />
                <br />
                <label for="form">4. Выберите форму отчетности: </label>
                <p><input type="radio" name="form" checked id="exam" />Экзамен</p>
                <p><input type="radio" name="form" id="text" />Зачет</p>
                <button class="exit_btn" type="submit">Добавить</button>
            </form>
        </div>
    </div>
</template>


<script>
const teachers = [
    {
        id: 1,
        surname: 'Фамилия',
        name: 'Имя',
        patronymic: 'Отчество'
    },
    {
        id: 2,
        surname: 'Фамилия',
        name: 'Имя',
        patronymic: 'Отчество'
    },
    {
        id: 3,
        surname: 'Фамилия',
        name: 'Имя',
        patronymic: 'Отчество'
    },
    {
        id: 4,
        surname: 'Фамилия',
        name: 'Имя',
        patronymic: 'Отчество'
    },
]
export default {
    name: 'SubjectCreate',
    data() {
        return {
            teachers
        }
    }
}
</script>

<style>
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

.exit_btn {
    background-color: #4d8bc3;
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
}</style>