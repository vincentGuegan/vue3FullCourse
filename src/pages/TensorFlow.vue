<template>
  <section class="flex w-full">
    <div class="m-auto">
        <div class="m-10">
            <h1 class="text-2xl my-4">tensorflow Object Detection</h1>
            <div class="flex flex-wrap justify-center my-2">
                <div class="w-full flex justify-center">
                    <button
                        v-if="!isStreaming"
                        @click="openCamera"
                        class="w-32 rounded bg-gradient-to-r from-blue-800 to-indigo-800 text-white px-2 py-1"
                    >
                        Open Camera
                    </button>
                    <button
                        v-else
                        @click="stopStreaming"
                        class="w-32 rounded bg-gradient-to-r from-blue-800 to-indigo-800 text-white px-2 py-1"
                    >
                        Stop Streaming
                    </button>  
                </div>
                <video ref="videoRef" autoplay="true" width="100" />
            </div>
            <div class="flex flex-wrap justify-center">
                <img
                    ref="imgRef"
                    src="https://images.unsplash.com/photo-1528795259021-d8c86e14354c" 
                    width="200"
                    crossorigin="anonymous"
                />
                <div class="w-full text-center my-4">
                    <button 
                        @click="detect" 
                        class="w-32 rounded bg-gradient-to-r from-red-800 to-pink-800 text-white p-2"
                    >
                        <span v-if="isLoading">Detect Object</span>
                        <span v-else>Detect Object</span>
                    </button>
                    <div v-if="result.length > 0">
                        <p>{{ result[0].class }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue';
require('@tensorflow/tfjs-backend-cpu');
require('@tensorflow/tfjs-backend-webgl');
const cocoSsd = require('@tensorflow-models/coco-ssd');

export default {

    setup(){
        const imgRef = ref('');
        const videoRef = ref('');
        const isLoading = ref(false);
        const isStreaming = ref(false);
        const result = ref([]);

       async function detect(){
        const img = imgRef.value;
        isLoading.value = true;
        const model = await cocoSsd.load();
        const predictions = await model.detect(img);
        result.value = predictions;
        isLoading.value = false;
        }

        async function openCamera(){
            if(navigator.mediaDevices.getUserMedia){
                const devices = await navigator.mediaDevices.enumerateDevices();
                const cams = devices.filter((device) => device.kind == "videoinput");
                const camId = cams[0].deviceId;
                navigator.mediaDevices
                    .getUserMedia({video: {deviceId: { exact: camId } } })
                    .then(stream =>{
                        isStreaming.value = true;
                        videoRef.value.srcObject = stream;
                    });
            }
        }

        function stopStreaming(){
            const stream = videoRef.value.srcObject;
            const tracks = stream.getTracks();
            tracks.map((track) => track.stop());
        }

        return { imgRef, result, detect, isLoading, openCamera, videoRef, isStreaming, stopStreaming };
    }
}
</script>

<style>

</style>