<template>
    <main class="login-main">
        <h1>Page de connexion</h1>
        <form class="login-form" method="" action="">
            <section>
                <article>
                    <label for="username">Nom d'utilisateur</label>
                    <input type="text" id="useranme" name="username" placeholder="Nom d'utilisateur" minlength="2"
                        maxlength="20">
                </article>
                <article>
                    <label for="secret-passwd">Mot de passe</label>
                    <input type="password" id="secret-passwd" name="secret-passwd" placeholder="Mot de passe"
                        minlength="8" maxlength="50">
                </article>
            </section>
        </form>
    </main>
</template>

<script setup lang="ts">

</script>