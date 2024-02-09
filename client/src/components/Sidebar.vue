<script setup lang="ts">
import image from '/logo.svg'

</script>
<template>
    <div
        class="flex flex-col py-4 justify-between items-center mx-auto w-[55px] h-full border border-l-transparent border-t-transparent border-b-transparent border-r-gray">
        <div class="flex flex-col items-center w-full">
            <div class="flex 
            items-center w-[40px] h-[40px] bg-white border  rounded-full">
                <img class="mx-auto flex" width="30" height="30" :src="image" />
            </div>
        </div>
        <div class="flex flex-col space-y-3">
            <div
                class="px-3 py-2 rounded-xl text-gray hover:bg-primary hover:text-white transition-colors duration-200 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                    <path fill="currentColor"
                        d="M11.025 21.95q-3.85-.375-6.425-3.225T2.025 12q0-3.875 2.575-6.725t6.425-3.225v3q-2.6.35-4.3 2.325T5.025 12q0 2.65 1.7 4.625t4.3 2.325zm2 0v-3q2.35-.3 3.975-1.95t1.975-4h3q-.35 3.575-2.863 6.088t-6.087 2.862M18.975 11Q18.625 8.65 17 7t-3.975-1.95v-3q3.575.35 6.088 2.863T21.975 11z" />
                </svg>
            </div>
            <div
                class="px-3 py-2 rounded-xl text-gray hover:bg-primary hover:text-white transition-colors duration-200 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 32 32">
                    <path fill="currentColor"
                        d="M6.5 5A4.5 4.5 0 0 0 2 9.5V11h28V9.5A4.5 4.5 0 0 0 25.5 5zM2 22.5V13h28v9.5a4.5 4.5 0 0 1-4.5 4.5h-19A4.5 4.5 0 0 1 2 22.5M21 19a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2z" />
                </svg>
            </div>
            <div
                class="px-3 py-2 rounded-xl text-gray hover:bg-primary hover:text-white transition-colors duration-200 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                    <path fill="currentColor"
                        d="M16 21q-.825 0-1.412-.587T14 19v-4q0-.825.588-1.412T16 13h4q.825 0 1.413.588T22 15v4q0 .825-.587 1.413T20 21zM2 18v-2h9v2zm14-7q-.825 0-1.412-.587T14 9V5q0-.825.588-1.412T16 3h4q.825 0 1.413.588T22 5v4q0 .825-.587 1.413T20 11zM2 8V6h9v2z" />
                </svg>
            </div>
            <div
                class="px-3 py-2 rounded-xl text-gray hover:bg-primary hover:text-white transition-colors duration-200 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                    <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0" />
                        <path d="M14.8 9A2 2 0 0 0 13 8h-2a2 2 0 1 0 0 4h2a2 2 0 1 1 0 4h-2a2 2 0 0 1-1.8-1M12 7v10" />
                    </g>
                </svg>
            </div>

            <div
                class="px-3 py-2 rounded-xl text-gray hover:bg-primary hover:text-white transition-colors duration-200 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16">
                    <g fill="currentColor">
                        <path
                            d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2" />
                        <path
                            d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z" />
                    </g>
                </svg>
            </div>
            <div
                class="px-3 py-2 rounded-xl text-gray hover:bg-primary hover:text-white transition-colors duration-200 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 1024 1024">
                    <path fill="currentColor"
                        d="M192 128v704h384V128zm-32-64h448a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32" />
                    <path fill="currentColor"
                        d="M256 256h256v64H256zm0 192h256v64H256zm0 192h256v64H256zm384-128h128v64H640zm0 128h128v64H640zM64 832h896v64H64z" />
                    <path fill="currentColor"
                        d="M640 384v448h192V384zm-32-64h256a32 32 0 0 1 32 32v512a32 32 0 0 1-32 32H608a32 32 0 0 1-32-32V352a32 32 0 0 1 32-32" />
                </svg>
            </div>
            <div
                class="px-3 py-2 rounded-xl text-gray hover:bg-primary hover:text-white transition-colors duration-200 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                    <path fill="currentColor"
                        d="M2 8.76c0-2.715 0-4.073.879-4.916C3.757 3 5.172 3 8 3h8c2.828 0 4.243 0 5.121.844c.879.843.879 2.2.879 4.916v.96c0 2.715 0 4.073-.879 4.916c-.878.844-2.293.844-5.121.844h-3.25v2.36l5.487 1.757a.714.714 0 0 1 .475.91a.758.758 0 0 1-.95.456L12 19.119l-5.763 1.844a.757.757 0 0 1-.949-.456a.714.714 0 0 1 .475-.91l5.487-1.756V15.48H8c-2.828 0-4.243 0-5.121-.844C2 13.793 2 12.436 2 9.72z" />
            </svg>
        </div>
        <div
            class="px-3 py-2 rounded-xl text-gray hover:bg-primary hover:text-white transition-colors duration-200 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 512 512">
                <path fill="currentColor"
                    d="M512 80c0 18-14.3 34.6-38.4 48c-29.1 16.1-72.5 27.5-122.3 30.9c-3.7-1.8-7.4-3.5-11.3-5c-39.4-16.5-91.8-25.9-148-25.9c-8.3 0-16.4.2-24.5.6l-1.1-.6C142.3 114.6 128 98 128 80c0-44.2 86-80 192-80s192 35.8 192 80m-351.3 81.1c10.2-.7 20.7-1.1 31.3-1.1c62.2 0 117.4 12.3 152.5 31.4c24.8 13.5 39.5 30.3 39.5 48.6c0 4-.7 7.9-2.1 11.7c-4.6 13.2-17 25.3-35 35.5c-.1.1-.3.1-.4.2c-.3.2-.6.3-.9.5c-35 19.4-90.8 32-153.6 32c-59.6 0-112.9-11.3-148.2-29.1c-1.9-.9-3.7-1.9-5.5-2.9C14.3 274.6 0 258 0 240c0-34.8 53.4-64.5 128-75.4c10.5-1.5 21.4-2.7 32.7-3.5M416 240c0-21.9-10.6-39.9-24.1-53.4c28.3-4.4 54.2-11.4 76.2-20.5c16.3-6.8 31.5-15.2 43.9-25.5V176c0 19.3-16.5 37.1-43.8 50.9c-14.6 7.4-32.4 13.7-52.4 18.5c.1-1.8.2-3.5.2-5.3zm-32 96c0 18-14.3 34.6-38.4 48c-1.8 1-3.6 1.9-5.5 2.9C304.9 404.7 251.6 416 192 416c-62.8 0-118.6-12.6-153.6-32C14.3 370.6 0 354 0 336v-35.4c12.5 10.3 27.6 18.7 43.9 25.5C83.4 342.6 135.8 352 192 352s108.6-9.4 148.1-25.9c7.8-3.2 15.3-6.9 22.4-10.9c6.1-3.4 11.8-7.2 17.2-11.2c1.5-1.1 2.9-2.3 4.3-3.4v9.1zm32 0v-57.9c19-4.2 36.5-9.5 52.1-16c16.3-6.8 31.5-15.2 43.9-25.5V272c0 10.5-5 21-14.9 30.9c-16.3 16.3-45 29.7-81.3 38.4c.1-1.7.2-3.5.2-5.3M192 448c56.2 0 108.6-9.4 148.1-25.9c16.3-6.8 31.5-15.2 43.9-25.5V432c0 44.2-86 80-192 80S0 476.2 0 432v-35.4c12.5 10.3 27.6 18.7 43.9 25.5C83.4 438.6 135.8 448 192 448" />
            </svg>
        </div>
        <div
            class="px-3 py-2 rounded-xl text-gray hover:bg-primary hover:text-white transition-colors duration-200 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 14 14">
                <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M9.5 1.5H11a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-10a1 1 0 0 1 1-1h1.5" />
                    <rect width="5" height="2.5" x="4.5" y=".5" rx="1" />
                    <path d="M4.5 5.5h5M4.5 8h5m-5 2.5h5" />
                </g>
            </svg>
        </div>
        <div
            class="px-3 py-2 rounded-xl text-gray hover:bg-primary hover:text-white transition-colors duration-200 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                <path fill="currentColor"
                    d="M12 12q-1.65 0-2.825-1.175T8 8q0-1.65 1.175-2.825T12 4q1.65 0 2.825 1.175T16 8q0 1.65-1.175 2.825T12 12m-8 6v-.8q0-.85.438-1.562T5.6 14.55q1.55-.775 3.15-1.162T12 13q1.65 0 3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2v.8q0 .825-.587 1.413T18 20H6q-.825 0-1.412-.587T4 18" />
            </svg>
        </div>

    </div>
    <div class="flex flex-col justify-between ">
        <div class="pb-4">
            <button
                class="ml-3 mx-auto w-6 h-3 rounded-full bg-[#989898] flex items-center transition duration-300 focus:outline-none shadow">
                <div id="switch-toggle"
                    class="w-4 h-4 relative rounded-full transition duration-500 transform bg-white -translate-x-2  text-gray border border-gray">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                </div>
            </button>
        </div>
        <div class="flex flex-col justify-around ">
            <button
                class="px-3 py-2 rounded-xl text-gray hover:bg-primary hover:text-white transition-colors duration-200 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
                    <path fill="currentColor"
                        d="m10.135 21l-.362-2.892q-.479-.145-1.035-.454q-.557-.31-.948-.664l-2.667 1.135l-1.865-3.25l2.305-1.738q-.044-.272-.073-.56q-.028-.287-.028-.558q0-.252.028-.53t.073-.626L3.258 9.125l1.865-3.212L7.771 7.03q.448-.373.97-.673q.52-.3 1.013-.464L10.134 3h3.731l.362 2.912q.575.201 1.016.463q.442.262.909.654l2.725-1.116l1.865 3.212l-2.382 1.796q.082.31.092.568q.01.26.01.511q0 .233-.02.491q-.019.259-.088.626l2.344 1.758l-1.865 3.25l-2.681-1.154q-.467.392-.94.673q-.474.281-.985.444L13.865 21zm1.838-6.5q1.046 0 1.773-.727q.727-.727.727-1.773q0-1.046-.727-1.773q-.727-.727-1.773-.727q-1.052 0-1.776.727T9.473 12q0 1.046.724 1.773q.724.727 1.776.727" />
                </svg>
            </button>
            <button
                class="px-3 py-2 rounded-xl text-gray hover:bg-primary hover:text-white transition-colors duration-200 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 256 256">
                    <path fill="currentColor"
                        d="M116 216a12 12 0 0 1-12 12H48a20 20 0 0 1-20-20V48a20 20 0 0 1 20-20h56a12 12 0 0 1 0 24H52v152h52a12 12 0 0 1 12 12m108.49-96.49l-40-40a12 12 0 0 0-17 17L187 116h-83a12 12 0 0 0 0 24h83l-19.52 19.51a12 12 0 0 0 17 17l40-40a12 12 0 0 0 .01-17" />
                </svg>
            </button>
        </div>
    </div>
</div></template>