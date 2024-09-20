<template>
    <div>
        <nav class="text-center border flex justify-center gap-4 p-3">
            <p>The navbar with - current lang {{ t('lang') }}</p>
            <div class="flex justify-center gap-4">
                <button class="px-2 text-white rounded bg-blue-500 block" @click="locale =='ru' ? setLang('en'):setLang('ru')">{{ locale }}</button>
            </div>
        </nav>
        <main>
            <router-view></router-view>
        </main>
        <footer class="text-center border  p-3">The footer</footer>
    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';


const { t, locale } = useI18n();

function setLang(val){
    locale.value = val;
    
}

</script>

<style lang="postcss" scoped>

</style>