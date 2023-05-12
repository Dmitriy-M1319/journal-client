<template>
    <div class="platoon_box">
        <div class="platoon_box_item">
            <h4>Создать новое занятие</h4>
        </div>
        <div class="platoon_box_item">
            <form action="" method="post">
                <label for="platoon">1. Взвод, у которого занятие: </label>
                <select name="platoons" id="platoons">
                    <option v-for="pl in platoons" :value="'platoon ' + pl.platoon_number">
                        {{ pl.platoon_number }} взвод
                    </option>
                </select>
                <br />
                <label for="subjects">2. Предмет: </label>
                <select name="subjects" id="subjects">
                    <option v-for="sub in subjects" :value="sub.id">{{ sub.name }}</option>
                </select>
                <br />
                <label for="theme_number">3. Номер темы занятия: </label>
                <input type="text" name="theme_number" id="theme_number" />

                <br />
                <label for="theme_name">4. Название темы занятия: </label>
                <input type="text" name="theme_name" id="theme_name" />

                <br />
                <label for="class_number">5. Номер занятия: </label>
                <input type="text" name="class_number" id="class_number" />

                <br />
                <label for="class_name">6. Название занятия: </label>
                <input type="text" name="class_name" id="class_name" />

                <br />
                <label for="class_date">7. Дата и время занятия: </label>
                <input type="datetime-local" name="class_date" id="class_date" />

                <br />
                <label for="class_type">8. Тип занятия: </label>
                <p><input type="radio" name="class_type" id="lecture" />Лекция</p>
                <p><input type="radio" name="class_type" id="seminar" />Семинар</p>
                <p>
                    <input type="radio" name="class_type" id="exam" />Контрольное
                    занятие
                </p>

                <br />
                <label for="class_date">9. Номер аудитории, в которой проводится занятие:
                </label>
                <input type="text" name="class_room" id="class_room" />
                <input class="exit_btn" type="submit" value="Создать" />
            </form>
        </div>
    </div>
</template>


<script>
// Здесь сделать получение всех предметов для преподавателя
const subjects = [
    { id: 1, name: 'Предмет 1' },
    { id: 2, name: 'Предмет 2' },
    { id: 3, name: 'Предмет 3' },
    { id: 4, name: 'Предмет 4' }
];

// Получение всего списка взводов
const platoons = [
    { platoon_number: 451 },
    { platoon_number: 452 },
    { platoon_number: 551 },
    { platoon_number: 552 }
];
export default {
    name: 'ClassCreate',
    data() {
        return {
            subjects,
            platoons,
        }
    }
}
</script>

<style>
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
}</style>