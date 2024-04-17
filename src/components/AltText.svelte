<script>
// @ts-nocheck

let altText = 'Alt text will load here shortly...';

function resetScreen()
{
    location.reload();
}

window.addEventListener("paste", async(e) => {
    var imageInput = document.querySelector('#imageInput');
    imageInput.files = e.clipboardData.files;
    showImageOnScreen();
});

function showImageOnScreen() {
    const imageInputElement = document.querySelector('#imageInput');
    const altTextElement = document.querySelector('#altText');
    const resetButtonElement = document.querySelector('#resetButton');

    function updateScreen() {
        imageInputElement.style.display = 'none';
        altTextElement.style.display = 'block';
        resetButtonElement.style.display = 'block';
    }

    let image = imageInputElement.files[0];

    let fileReader = new FileReader();
    fileReader.readAsDataURL(image);
    fileReader.onload = function() {
        let imageElement = document.querySelector('#imageToCheck');
        imageElement.src = fileReader.result;
        imageElement.style.margin = '5vh auto';
        imageElement.style.display = 'block';
        updateScreen();
        generateAltText(imageElement.src);
    }
};

async function generateAltText(imageBase64) {
    try {        
        let response = await fetch('/api/alttext', {
            method: 'POST',
            body: JSON.stringify({ 
                image: imageBase64
            }),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        console.log(response.headers);
        if(response.status !== 200) {
            console.log(response);
            throw new Error(response.statusText);
        } else {
            const responseBody = await response.json();
            altText = responseBody.message;
        }
    } catch(error) {
        document.querySelector('#imageInput').style.display = 'none';
        document.querySelector('#altText').style.display = 'block';
        document.querySelector('#resetButton').style.display = 'block';
        console.error(error);
        altText = "Error occured:\n\n" + error.message;
    }
}

</script>

<input type="file" id="imageInput" accept="image/*" on:input={showImageOnScreen}>

<img id="imageToCheck" src="" alt={altText}>

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
        margin: 0 auto;
        display: none;
        text-align: center;
        padding: 3vh 0;
        border: 2px solid #242424;
        border-radius: 10px;
        min-width: 25vw;
        max-width: 70vw;
    }

    #altTextBox {
        display: inline-block;
        padding: 1vh 5vw;
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
