document
.getElementById("calculateBtn")
.addEventListener("click", () => {

    const treatmentPrice =
        Number(
            document.getElementById(
                "treatmentPrice"
            ).value || 0
        );

    const vasAmount =
        Number(
            document.getElementById(
                "vasAmount"
            ).value || 0
        );

    const discountAmount =
        Number(
            document.getElementById(
                "discountAmount"
            ).value || 0
        );

    const commissionBase =
        treatmentPrice + vasAmount;

    const guestPays =
        commissionBase - discountAmount;

    const commissionMode =
    document.getElementById(
        "commissionMode"
    ).value;

const commissionInput =
    Number(
        document.getElementById(
            "commissionInput"
        ).value || 0
    );

let commission = 0;

if (commissionMode === "percentage") {

    commission =
        commissionBase *
        (commissionInput / 100);

}
else {

    commission =
        commissionInput;
}
console.log("Commission Mode:", commissionMode);
console.log("Commission Input:", commissionInput);
console.log("Commission:", commission);
    const netRevenue =
        guestPays - commission;

    document.getElementById(
        "commissionBase"
    ).textContent =
        commissionBase.toFixed(2);

    document.getElementById(
        "guestPays"
    ).textContent =
        guestPays.toFixed(2);

    document.getElementById(
        "commissionValue"
    ).textContent =
        commission.toFixed(2);

    document.getElementById(
        "netRevenue"
    ).textContent =
        netRevenue.toFixed(2);

});