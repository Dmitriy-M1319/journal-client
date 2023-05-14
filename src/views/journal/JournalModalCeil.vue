<template>
        <!-- <JournalUpdateCeil v-bind:id="mark.id" /> -->
        <JournalMarkCeil v-bind:mark="mark" @click="$modal.show('journal-update-ceil')" />
</template>

<script>
import JournalUpdateCeil from '@/views/journal/JournalUpdateCeil.vue';
import JournalMarkCeil from '@/views/journal/JournalMarkCeil.vue';

export default {
    name: 'JournalModalCeil',
    props: ['mark'],
    components: {
        JournalUpdateCeil,
        JournalMarkCeil
    }
}
</script>

<style></style>