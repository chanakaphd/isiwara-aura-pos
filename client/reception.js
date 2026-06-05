const saveBtn =
    document.getElementById("saveBtn");

saveBtn.addEventListener(
    "click",
    () => {

        const guestName =
            document.getElementById(
                "guestName"
            ).value;

        const message =
            document.getElementById(
                "message"
            );

        if (!guestName) {

            message.textContent =
                "Please enter guest name.";

            return;
        }

        message.textContent =
            `Guest Saved: ${guestName}`;
    }
);
