<script>
// @ts-nocheck

import { azure } from '../api/azure'

let altText = 'Alt text will load here shortly...';

async function generateAltText() {
    altText = await azure.getCaption();
}

function resetScreen()
{
    document.querySelector('#imageInput').style.display = 'block';
    document.querySelector('#image').style.display = 'none';
    document.querySelector('#altText').style.display = 'none';
    document.querySelector('#resetButton').style.display = 'none';
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
        margin: 5vh auto;
        display: block;
    }

    img {
        display: none;
        max-width: 600px;
    }

    #altText {
        margin: 5vh auto;
        display: none;
        text-align: center;
        padding: 3vh 0;
        border: 2px solid black;
        border-radius: 10px;
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
    }
</style>