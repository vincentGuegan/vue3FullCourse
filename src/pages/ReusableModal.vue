<template>
    <section class="flex flex-wrap w-full">
        <div class="m-auto">
            <h1 class="text-2xl my-5">
                Reusable Modal
            </h1>
            <Modal v-if="isModal1Open" @close="isModal1Open = false">
                <template v-slot:title>
                    Modal 1
                </template>
                <template v-slot:body>
                    <p>This is the body slot for Modal 1</p>
                </template>
            </Modal>
            <button class="border rounded px-2 mx-4 bg-blue-500 text-white" @click="isModal1Open = true"> Red Modal</button>

             <Modal v-if="isModal2Open" @close="isModal2Open = false">
                 <template v-slot:title>
                    Modal 2
                </template>
                <template v-slot:body>
                    <p>This is the body slot for Modal 2</p>
                </template>
             </Modal>
            <button class="border rounded px-2 mx-4 bg-blue-500 text-white" @click="isModal2Open = true"> Blue Modal</button>
        </div>
    </section>
</template>

<script>
import Modal from "../components/Modal";
import { ref } from "vue";

export default {
    components: { Modal },
    setup() {
        const isModal1Open = ref(false)
        const isModal2Open = ref(false)
        return { isModal1Open, isModal2Open };
    }
}
</script>

<style>

</style>