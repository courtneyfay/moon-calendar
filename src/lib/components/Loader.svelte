<script context="module">
    export const wait = () => new Promise((res) => setTimeout(res, 17000))
    // 17 sec is about how long 3 6-second long bubble breaths takes
</script>

<script>
    import { quotes } from '$lib/data/quotes'
	import { chooseRandom } from '$lib/helpers/chooseRandom'
</script>

<div class="wrapper">
    <div class="circle pulse"></div>
    <p class="quote">{chooseRandom(quotes)}</p>
</div>

<style>
    .wrapper {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        height: 80vh;
    }

    .circle {
        background: #ADB993;
        width: 50vh;
        height: 50vh;
        border-radius: 50%;
        box-shadow: 0px 0px 10px 10px #0000001a;

        /* for positioning text */
        position: relative;
        margin: 0 auto;
        text-align: center;
    }

    .pulse {
        animation: pulse-animation 6s 3;
    }

    @keyframes pulse-animation {
        0% {
            transform: scale(0);
            /* box-shadow: 0 0 0 0px rgba(0, 0, 0, 0.2); */
        }
        50% {
            transform: scale(1);
            /* box-shadow: 0 0 0 150px rgba(0, 0, 0, 0); */
        }
        100% {
            transform: scale(0);
            /* box-shadow: 0 0 0 0px rgba(0, 0, 0, 0.2); */
        }
    }

    .quote {
        /* center in the middle of breath bubble */
        position: absolute;
        text-align: center;
        width: 100%;

        opacity: 0;
        animation: show 18s linear infinite alternate both;
    }

    @keyframes show {
        100% {
            opacity: 1;
        }
    }
</style>