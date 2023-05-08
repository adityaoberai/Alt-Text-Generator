<script>
// @ts-nocheck

import { api } from '../lib/caption'

let altText = 'Alt text will load here shortly...';

async function generateAltText() {
    altText = await api.getCaption();
}

function resetScreen()
{
    document.querySelector('#imageInput').value = '';
    document.querySelector('#imageInput').style.display = 'block';
    document.querySelector('#image').style.display = 'none';
    document.querySelector('#altText').style.display = 'none';
    document.querySelector('#resetButton').style.display = 'none';
    altText = 'Alt text will load here shortly...';
}

</script>

<input type="file" id="imageInput" accept="image/*" on:input={generateAltText}>

<img id="image" src="" alt={altText}>

<div id="altText">
    <p id="altTextBox">
        {altText}
    </p>
</div>

<button id="resetButton" on:click={resetScreen}>Reset</button>

<style>
    #imageInput {
        max-width: 70vw;
        margin: 5vh auto;
        display: block;
    }

    img {
        display: none;
        max-width: 70vw;
        max-height: 40vh;
    }

    #altText {
        margin: 5vh auto;
        display: none;
        text-align: center;
        padding: 3vh 0;
        border: 2px solid #242424;
        border-radius: 10px;
        max-width: 70vw;
    }

    #altTextBox {
        display: inline-block;
        padding: 1vh 1vw;
        text-align: center;
        vertical-align: middle;
        font-size: large;
    }

    #resetButton {
        display: none;
        margin: 5vh auto;
        min-width: 7vw;
        min-height: 7vh;
    }

    @media (prefers-color-scheme: dark) {
        #imageInput, #altText {
            border-color: #f9f9f9;
        }
    }
</style>
