<template>
    <div class="col-md-6 col-sm-12 p-1">
        <div class="bg-header-color p-2">
            <div class="card">
                <div class="card-header">
                    <h4 class="text-center">{{ subject.name }}</h4>
                </div>
                <div class="card-body">
                    <p>Количество часов: {{ subject.hours_count }}</p>
                    <p>Форма отчетности: {{ subject.form }}</p>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: "Subject",
    props: ["subject"],
}
</script>

<style>
</style>