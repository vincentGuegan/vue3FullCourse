<template>
  <section class="flex w-full">
    <div class="m-auto">
      <h1 class="text-center text-2xl">Real Time Chat</h1>
        <div class="border rounded-lg">
          <div class="h-64 p-2">
            <div 
              v-for="chat in state.chats" 
              :key="chat.message" 
              class="w-full"
              :class="chat.userId == userId ? 'text-right' : ''"
            >
              {{ chat.message }}
            </div>
          </div>
          <div class="h-8 p-2">
            <input 
              v-model="state.message"
              placeholder="Start Typing..."
              class="p-1 border rounded shadow"
              @keydown.enter="addMessage"
            />
          </div>
        </div>
    </div>
  </section>
</template>

<script>
import { computed, onMounted, reactive } from "vue";
import firebase from "../utilities/firebase";
import {useStore} from "vuex";

export default {
  setup(){
    const state = reactive({
      chats: {},
      message: "",
      collection: null,
    });

    const store = useStore();
    const userId = computed(() => store.state.authUser.uid);

    onMounted(async () => {
      const db = firebase.database();
      state.collection = db.ref("chats");
      const data = await state.collection.once("value");
      state.chats = data.val();
 
/*       state.collection.on("value", (snapshot) => {
        state.chats = snapshot.val();
      }); */
    });

    function addMessage(){
      const newChat = state.collection.push();
      newChat.set({ userId: state.userId, message: state.message });
      state.message = "";
    }

    return { state, addMessage, userId };
  },
};
</script>

<style>

</style>