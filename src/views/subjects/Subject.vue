<template>
    <li>
        <div class="platoon_box_item">
            <h4>{{ subject.name }}</h4>
            <p>Количество часов: {{ subject.hours_count }}</p>
            <p>Форма отчетности: {{ subject.form }}</p>
            <!-- Сделать проверку на то, начальники или нет -->
            <div style="float: left;">
                <router-link class="exit_btn" :to="'/subjects/' + subject.id">Редактировать</router-link>
            </div>
        </div>
    </li>
</template>


<script>
import router from '@/router';

export default {
    name: "Subject",
    props: ["subject"],
    components: { router }
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
</style>