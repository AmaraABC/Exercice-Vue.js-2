<template>
    <main class="login-main">
        <form class="login-form" method="" action="">
            <section>
                <article>
                    <FieldComponent v-for="(field, index) in data.fields"
                        :key="index"
                        :data="field" />
                </article>
                <article>
                    <ButtonComponent v-for="(button, index) in data.buttons"
                        :key="index"
                        :data="button"/>
                </article>
            </section>
        </form>
    </main>
</template>

<script setup lang="ts">
import FieldComponent from "./FieldComponent.vue"
import ButtonComponent from "./ButtonComponent.vue"
interface FormComponentProperties {
    data: {
        fields: Array<any>,
        buttons: Any[]
    }
}
</script>