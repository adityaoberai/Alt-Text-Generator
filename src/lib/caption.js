// @ts-nocheck

export const api = {
    getCaption: async () => {
        try {
            const imageInputElement = document.querySelector('#imageInput');
            const altTextElement = document.querySelector('#altText');
            const resetButtonElement = document.querySelector('#resetButton');

            let image = imageInputElement.files[0];

            function updateScreen() {
                imageInputElement.style.display = 'none';
                altTextElement.style.display = 'block';
                resetButtonElement.style.display = 'block';
            }

            if(image.size > 4718592)
            {
                updateScreen();
                return 'Image size too large. File must be smaller than 4718592 bytes or 4.5 MB.';
            }
            
            function showImageOnScreen() {
                let fileReader = new FileReader();
                fileReader.readAsDataURL(image);
                fileReader.onload = function() {
                    let imageElement = document.querySelector('#image');
                    imageElement.src = fileReader.result;
                    imageElement.style.margin = '5vh auto';
                    imageElement.style.display = 'block';
                    updateScreen();
                }
            };
            showImageOnScreen();

            let response = await fetch('/api/alttext', {
                method: 'POST',
                body: image,
                headers: {
                    'Content-Type': 'application/octet-stream'
                },
            });
            const responseBody = await response.json();
            return responseBody.message;
        } catch(error) {
            document.querySelector('#imageInput').style.display = 'none';
            document.querySelector('#altText').style.display = 'block';
            document.querySelector('#resetButton').style.display = 'block';
            console.log(error);
            return error.message;
        }
    }
};