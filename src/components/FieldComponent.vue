<template>
    <article>
        <label :for="data.id">Adresse e-mail</label>
        <input :type="data.type ? data.type:'text'" :id="data.id" :name="data.name" :placeholder="data.placeholder" :minlength="data.minlength" :maxlength="data.maxlength">
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