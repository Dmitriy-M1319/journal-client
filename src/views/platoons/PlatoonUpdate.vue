<template>
    <div>
        <div class="platoon_box">
            <div class="platoon_box_item">
                <h4>Редактирование {{ $route.params.number }} взвода</h4>
            </div>
            <div class="platoon_box_item">
                <form action="" method="post">
                    <label for="number">1. Введите номер взвода: </label>
                    <input type="text" name="number" id="number" :value="$route.params.number" />
                    <br />
                    <label for="tutors">2. Выберите куратора взвода: </label>
                    <select name="tutors" id="tutor">
                        <option value="tutor1">Фамилия Имя Отчество</option>
                        <option value="tutor2">Фамилия Имя Отчество</option>
                        <option value="tutor3">Фамилия Имя Отчество</option>
                        <option value="tutor4">Фамилия Имя Отчество</option>
                    </select>
                    <br />
                    <label for="year">3. Введите год набора: </label>
                    <input type="text" name="year" id="year" value="2020" />
                    <button class="exit_btn" type="submit">Обновить</button>
                </form>
            </div>
            <PlatoonStudentsUpdate />
            <router-link class="mark-edit-btn mark-edit-btn-long"
                :to="'/platoons/' + $route.params.number + '/students/create'">
                Добавить нового студента
            </router-link>
        </div>
    </div>
</template>

<script>
import PlatoonStudentsUpdate from './students/PlatoonStudentsUpdate.vue';
export default {
    name: 'PlatoonUpdate',
    components: {
        PlatoonStudentsUpdate
    }
}
</script>

<style scoped>
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
}

.mark-edit-btn {
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

.mark-edit-btn-long {
    width: auto;
}
</style>