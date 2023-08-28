<template>
    <div class="container h-100">
        <div class="row justify-content-center h-100">
            <div class="col-12 bg-header-color p-2">
                <div class="card">
                    <div class="card-header">
                        <h4 class="fw-bold text-center">Ошибка</h4>
                    </div>
                    <div class="card body p-2">
                        <p class="text-center">{{ detail }}</p>
                        <p><button class="btn btn-danger" v-on:click="closeModal">Закрыть</button></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ErrorModal',
    props: ['detail'],
    methods: {
        closeModal() {
            this.$emit('close');
        }
    },
}
</script>
<style></style>