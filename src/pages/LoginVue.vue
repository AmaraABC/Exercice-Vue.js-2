<template>
    <main class="login-main">
        <h1>Page de connexion</h1>
        <section>
            <FormComponent :data="{id: fields.id, type: fields.type, name: fields.name, placeholder:
                fields.placeholder}"/>
        </section>
    </main>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import FormComponent from '../components/FormComponent.vue';

const formData = reactive({
    fields: [
        {
            id: 'mail',
            type: 'email',
            name: 'mail',
            placeholder: 'Adresse e-mail',
        },
        {
            id: 'secret-passwd',
            type: 'password',
            name: 'secret-passwd',
            placeholder: 'Mot de passe',
            minlength: '8',
            maxlength: '50'
        },
    ],
    buttons: [
        {
            id: 'btn',
            textContent: 'Valider',
            class: '',
            name: 'btn',
            type: '',
        },
    ]
});
</script>

<style lang="scss"></style>