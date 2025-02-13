<template>
    <section>
        <button :id="data.id" :type="data.type ? data.type:'button'" :class="'button ' + (data.class ? data.class: '')">{{ data.textContent }}</button>
    </section>
</template>

<script setup lang="ts">
interface ButtonComponenentProperties {
    data: {
        id: string | number,
        textContent: string,
        class?: string,
        name?: string,
        type?: string  
    }
};

defineProps<ButtonComponenentProperties>()
</script>