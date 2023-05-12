<template>
    <div class="platoon_box">
        <div class="platoon_box_item">
            <h4>Создание нового студента</h4>
        </div>
        <div class="platoon_box_item">
            <form action="" method="post">
                <label for="surname">1. Введите фамилию: </label>
                <input type="text" id="surname" />
                <br />
                <label for="name">2. Введите имя: </label>
                <input type="text" id="name" />
                <br />
                <label for="patronymic">3. Введите отчество (если есть): </label>
                <input type="text" id="patronymic" />
                <br />
                <label for="post">4. Выберите воинскую должность: </label>
                <div style="margin-bottom: 5px">
                    <input type="radio" checked id="post" value="student" />Студент
                    <br />
                    <input type="radio" id="post" value="commander" />Командир взвода
                </div>
                <label for="department">5. Введите название факультета в вузе:
                </label>
                <input type="text" name="department" id="department" />
                <br />
                <label for="group">6. Введите номер группы в вузе: </label>
                <input type="text" name="group" id="group" />
                <input class="exit_btn" type="submit" value="Создать" />
            </form>
        </div>
    </div>
</template>


<script>

// Взвод будет получаться из url
export default {
    name: 'StudentCreate'
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