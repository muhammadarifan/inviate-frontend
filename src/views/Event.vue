<script setup lang="ts">
import { useInvitationStore } from '../store/invitation';

const invitationStore = useInvitationStore();
</script>

<template>
    <div class="flex flex-col justify-center w-full transition duration-300">
        <div class="absolute w-1/2 h-screen">
            <img class="object-cover object-top w-full h-screen" :src="invitationStore.invitationData.hero"
                alt="invitation-hero" />
        </div>
        <div class="absolute flex flex-col justify-end w-1/2 h-screen p-5 bg-gradient-to-b from-transparent to-black">
            <h1 class="text-3xl text-white">Villa So Long</h1>
            <h1 class="mt-2 text-xl text-white">The Sunrise of Banyuwangi</h1>
            <small class="mt-5 text-justify text-white">At Villa SoLong we believe in welcoming everyone as
                our
                own neighbor. No
                matter where you come from and how long you stay with us, we want you to discover the beauty
                of
                life that we cherish here in Banyuwangi. With our belief of creating shared value among the
                people and the land that we live on, we hope you will truly enjoy your stay with us as you
                receive a restored heart and experience memories to keep for a lifetime, right here at our
                home.</small>
        </div>
        <div class="flex justify-end w-screen">
            <div class="flex flex-col items-center justify-center w-1/2 h-screen p-10">
                <div class="flex">
                    <h1 class="text-base font-thin">We are inviting you to joun our</h1>
                </div>
                <div class="flex gap-1 mt-20">
                    <span class="text-3xl font-cursive">First Annual</span>
                </div>
                <div class="flex gap-1">
                    <span class="text-4xl uppercase">Marban Cokro S. Family</span>
                </div>
                <div class="flex">
                    <span class="text-3xl font-cursive">Reunion</span>
                </div>
                <div class="flex mt-20">
                    <h1 class="text-base font-thin">Celebrating our gathering with beach party</h1>
                </div>
                <div class="flex mt-5">
                    <h1 class="text-base font-thin">01 July 2022 - 03 July 2022</h1>
                </div>
                <button class="px-10 py-3 rounded-full mt-14 bg-slate-400 animate-bounce">
                    Lanjutkan
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>