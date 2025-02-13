<template>
    <article>
        <label v-bind:for="data.id">Adresse e-mail</label>
        <input v-bind:type="data.type ? data.type:'text'" v-bind:id="data.id" v-bind:name="data.name" v-bind:placeholder="data.placeholder" v-bind:minlength="data.minlength" v-bind:maxlength="data.maxlength">
    </article>
</template>

<script setup lang="ts">

interface FieldComponenentProperties {
    data: {
        id: string,
        name: string,
        placeholder: string,
        minlength: int,
        maxlength: int
        class?: string, // Optionnel -> ?
        type?: string,  // Optionnel -> ?
    }
};

defineProps<FieldComponenentProperties>()
</script>