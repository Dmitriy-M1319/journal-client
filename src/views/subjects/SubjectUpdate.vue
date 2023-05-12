<template>
    <div class="platoon_box">
        <div class="platoon_box_item">
            <h4>Редактирование предмета</h4>
            <form action="" method="post">
                <label for="name">1. Введите название предмета: </label>
                <input style="margin-bottom: 5px" type="text" name="name" id="name" :value="subject.name" />
                <br />
                <label for="teachers">2. Выберите куратора взвода: </label>
                <select style="margin-bottom: 5px" name="teachers" id="teacher">
                    <option v-for="teacher in teachers" 
                    :value="teacher.id">{{teacher.surname}} 
                    {{teacher.name}}
                    {{teacher.patronymic}}</option>
                </select>
                <br />
                <label for="hours">3. Введите количество часов: </label>
                <input style="margin-bottom: 5px" type="text" id="hours" :value="subject.hours_count" />
                <br />
                <label for="form">4. Выберите форму отчетности: </label>
                <p><input type="radio" name="form" checked id="экзамен" />Экзамен</p>
                <p><input type="radio" name="form" id="зачет" />Зачет</p>
                <button class="exit_btn" type="submit">Добавить</button>
            </form>
            <form action="" method="post">
                <button class="delete_btn" type="submit">Удалить</button>
            </form>
        </div>
    </div>
</template>


<script>

// Подтянуть предмет по id
const subject = {
    id: 1,
    teacher: 1,
    name: 'Предмет 1',
    hours_count: 30,
    form: 'Экзамен'
}

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
    name: 'SubjectUpdate',
    data() {
        return {
            subject,
            teachers
        }
    }
}
</script>

<style>
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