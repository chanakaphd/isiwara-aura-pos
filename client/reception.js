const saveBtn = document.getElementById("saveBtn");

saveBtn.addEventListener("click", async () => {

    const guestName =
        document.getElementById("guestName").value;

    const message =
        document.getElementById("message");

    if (!guestName) {

        message.textContent =
            "Please enter guest name.";

        return;
    }

    try {

        const response = await fetch(
            `https://api.airtable.com/v0/${CONFIG.AIRTABLE_BASE_ID}/Guests`,
            {
                method: "POST",

                headers: {
                    Authorization:
                        `Bearer ${CONFIG.AIRTABLE_TOKEN}`,

                    "Content-Type":
                        "application/json"
                },

                body: JSON.stringify({
                    fields: {
                        "Full Name": guestName
                    }
                })
            }
        );

        const result =
            await response.json();

        console.log(result);

        if (response.ok) {

            message.textContent =
                `Guest Created: ${guestName}`;

        } else {

            message.textContent =
                "Airtable Error";

            console.log(
    JSON.stringify(result, null, 2)
);
        }

    } catch (error) {

        console.error(error);

        message.textContent =
            "Connection Error";
    }
});