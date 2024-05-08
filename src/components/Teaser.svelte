<script>
    import { db } from '../lib/database.js';

    let note1 = `Thank you so much for trying the Alt Text Generator\n\nWe're currently making updates to the project to have a more improved offering for everyone.\n\nWe will share more updates on the same in the near future. If you're interested, please fill your email below.`;
    let note2 = 'In the meantime, the project will still remain self-hostable.\n\nFind the GitHub repo in the footer below.';

    async function saveEmail(event) {
        event.preventDefault();
        var formData = new FormData(event.target);
        await db.addEmail(formData.get('email'));
        event.target.reset();
    }
</script>

<div class="teaser">
    <p>{note1}</p>

    <form on:submit={saveEmail}>
        <input type="email" name="email" id="email" class="email" placeholder="abc@xyz.com" required>
        <button type="submit">Submit</button>
    </form>

    <p>{note2}</p>
</div>



<style>
    .teaser {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        width: 80%;
        margin: 1rem auto;
        border: 2px solid red;
        border-radius: 10px;
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
    }

    .email {
        text-decoration: none;
        padding: 0.5rem;
        font-size: 1.2rem;
    }

    form button {
        font-size: 1rem;
    }

    p {
        font-size: 1.1rem;
        padding: 1rem;
        margin: 1rem auto;
        width: 80%;
        color: black;
        border-radius: 10px;
        white-space: pre-line;
    }
</style>