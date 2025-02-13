<template>
    <section>
        <button v-bind:type="data.type ? data.type:'submit'" v-bind:class="data.class">Valider</button>
    </section>
</template>

<script setup lang="ts">
interface ButtonComponenentProperties {
    data: {
        id?: string,
        name?: string,
        type?: string,  
    }
};

defineProps<ButtonComponenentProperties>()
</script>