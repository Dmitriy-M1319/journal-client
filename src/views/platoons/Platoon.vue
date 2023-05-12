<template>
    <div>
        <li>
            <div class="platoon_box_item">
                <h4>{{ platoon.number }} взвод: {{ platoon.count }} человек</h4>
                <p>Командир взвода: {{ platoon.com.surname }}
                    {{ platoon.com.name }}
                    {{ platoon.com.patronymic }}
                </p>
                <p>Куратор взвода: {{ platoon.tutor.military_rank }}
                    {{ platoon.tutor.surname }}
                    {{ platoon.tutor.name }}
                    {{ platoon.tutor.patronymic }}
                </p>
                <p>Год набора: {{ platoon.year }}</p>
                <div style="display: flex">
                    <router-link class="exit_btn" :to="'/platoons/'+ platoon.number + '/students'">
                        Состав
                    </router-link>
                    <router-link class="mark_edit_btn" :to="'/platoons/' + platoon.number">
                        Редактировать
                    </router-link>
                </div>
            </div>
        </li>

    </div>
</template>

<script>
export default {
    name: 'Platoon',
    props: ['platoon'],
}
</script>

<style scoped >
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