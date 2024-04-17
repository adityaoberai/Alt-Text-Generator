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

function copyAltText() {
    const textToCopy = document.getElementById("altTextBox");
    navigator.clipboard.writeText(textToCopy.innerText);

    let copyButton = document.getElementById("copyButton");
    copyButton.innerHTML = "Copied!";

    setTimeout(() => {
        copyButton.innerHTML = "Copy Text";
    }, 2000);
}

function showImageOnScreen() {
    const imageInputElement = document.querySelector('#imageInput');
    const altTextElement = document.querySelector('#altText');
    const altTextButtonsElement = document.querySelector('#altTextButtons');

    let image = imageInputElement.files[0];

    let fileReader = new FileReader();
    fileReader.readAsDataURL(image);
    fileReader.onload = function() {
        let imageElement = document.querySelector('#imageToCheck');
        imageElement.src = fileReader.result;
        imageElement.style.margin = '5vh auto';
        imageElement.style.display = 'block';
        
        imageInputElement.style.display = 'none';
        altTextElement.style.display = 'block';
        altTextButtonsElement.style.display = 'block';

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
        switch(response.status) {
            case 413:
                console.error(response);
                throw new Error("Image is too large, please send files smaller than 4.5 MB.");

            case 504:
                console.error(response);
                throw new Error("Request timed out, please try again.");

            case 200:
                const responseBody = await response.json();
                altText = responseBody.message;
                break;

            default:
                console.error(response);
                throw new Error("An unknown error occured, please try again.");
        }
    } catch(error) {
        document.querySelector('#imageInput').style.display = 'none';
        document.querySelector('#altText').style.display = 'block';
        document.querySelector('#altTextButtons').style.display = 'block';
        console.error(error);
        altText = "Error occured: " + error.message;
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

<div id="altTextButtons">
    <div class="altTextButtonsContainer">
        <button id="copyButton" class="altTextButton" on:click={copyAltText}>Copy Text</button>
        <button id="resetButton" class="altTextButton" on:click={resetScreen}>Reset Image</button>
    </div>
</div>



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

    #altTextButtons {
        display: none;
        text-align: center;
    }

    .altTextButtonsContainer {
        display: flex;
        gap: 5vw;
        justify-content: center;
        align-items: center;
    }

    .altTextButton {
        display: block;
        margin: 5vh 0;
        width: 12vw;
        min-height: 7vh;
        text-align: center;
    }

    @media (prefers-color-scheme: dark) {
        #imageInput, #altText {
            border-color: #f9f9f9;
        }
    }

    @media (max-width: 1100px) {
        .altTextButtonsContainer {
            flex-direction: column;
            gap: 2vh;
            margin: 5vh 0;
        }

        .altTextButton {
            width: 20vw;
            margin: 0 5vw;
        }
    }

    @media (max-width: 768px) {
        .altTextButton {
            width: 40vw;
            margin: 0 5vw;
        }
    }
</style>
