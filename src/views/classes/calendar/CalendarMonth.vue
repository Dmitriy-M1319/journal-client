<template>
    <div class="text-center">
        <table class="table table-bordered caption-top">
            <caption><strong>{{ this.month_name }}</strong></caption>
            <thead>
                <tr>
                    <th v-for="(day, index) in this.week_days">
                        <strong>{{ day }}</strong>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(week, index) in this.dates">
                    <td type="button" v-on:click="onClick(day)" v-for="(day, index) in week"
                        :style="{ backgroundColor: day.color }">
                        {{ day.day }}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: 'CalendarMonth',
    props: ['month_number', 'month_classes', 'year'],
    data() {
        return {
            month_name: '',
            week_days: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
            dates: [],
            months: [{ name: 'Январь', len: 31, index: 6 }, { name: 'Февраль', len: 28, index: 2 },
            { name: 'Март', len: 31, index: 2 }, { name: 'Апрель', len: 30, index: 5 },
            { name: 'Май', len: 31, index: 0 }, { name: 'Июнь', len: 30, index: 3 },
            { name: 'Июль', len: 31, index: 5 }, { name: 'Август', len: 31, index: 1 },
            { name: 'Сентябрь', len: 30, index: 4 }, { name: 'Октябрь', len: 31, index: 6 },
            { name: 'Ноябрь', len: 30, index: 2 }, { name: 'Декабрь', len: 31, index: 4 }],
            calendar_template: [{ day: '', color: 'white' }, { day: '', color: 'white' }, { day: '', color: 'white' },
            { day: '', color: 'white' }, { day: '', color: 'white' }, { day: '', color: 'white' },
            { day: '', color: 'white' }]
        }
    },
    mounted() {
        this.dates = this.get_calendar_on_month(this.month_number, this.year);
        this.month_name = this.months[this.month_number - 1].name;
    },
    methods: {
        onClick(day) {
            if (day.color !== 'white') {
                let date = new Date(this.year, this.month_number - 1, day.day + 1).toISOString().slice(0, 10);
                console.log(date);
                const profile = JSON.parse(localStorage.getItem('profile'));
                this.$router.push({
                    path: `/teachers/${profile.id}/classes`, query: {
                        date: date
                    }
                });
            }
        },
        get_year_index(local_year) {
            let year_ost = local_year % 100;
            const values = [Math.floor(year_ost / 12), year_ost % 12];
            return values[0] + values[1] + Math.floor(values[1] / 4);
        },

        find_days(m_index) {
            for (const m of this.month_classes.dates) {
                if (m.month == m_index) {
                    let result = (m.days.length == 0 ? [] : m.days);
                    return result;
                }
            }
        },

        get_calendar_on_month(month, local_year) {
            let days = [];
            var week = [{ day: '', color: 'white' }, { day: '', color: 'white' }, { day: '', color: 'white' },
            { day: '', color: 'white' }, { day: '', color: 'white' }, { day: '', color: 'white' },
            { day: '', color: 'white' }];
            let c_days = this.find_days(month);
            const year_index = this.get_year_index(local_year);
            const month_index = this.months[month - 1].index;
            for (let day = 1; day <= this.months[month - 1].len; day++) {
                const sum = year_index + month_index + day;
                const week_day_index = sum % 7;
                if (week_day_index == 0) {
                    week[6].day = day;
                    days.push(week.slice());
                    week = [{ day: '', color: 'white' }, { day: '', color: 'white' }, { day: '', color: 'white' },
                    { day: '', color: 'white' }, { day: '', color: 'white' }, { day: '', color: 'white' },
                    { day: '', color: 'white' }];
                    continue;
                }
                week[week_day_index - 1].day = day;
                if (c_days.includes(day)) {
                    let curr_date = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
                    let local_date = new Date(local_year, month - 1, day);
                    if (local_date < curr_date) {
                        week[week_day_index - 1].color = '#ffbf00';
                    } else if (local_date.getTime() === curr_date.getTime()) {
                        week[week_day_index - 1].color = '#00ddff';
                    } else {
                        week[week_day_index - 1].color = '#3aed3a';
                    }
                }
            }
            days.push(week);
            return days;
        }
    }
}
</script>