const litres = document.querySelector("#litres");
const litresMessage = document.querySelector("#litres-message");
const member = document.querySelector("#member");
const memberMessage = document.querySelector("#member-message");
const deliveryForm = document.querySelector("#delivery-form");
let memberRegex = /^ER-[0-9]{4}$/;

console.log(litres);
console.log(litresMessage);
console.log(document);

function checkLitres() {
    let amount = Number(litres.value);
    if (litres.value === "") {
        litresMessage.textContent = "";
        litres.classList.remove("invalid");
    } else if (amount <= 0) {
        litresMessage.textContent = "Litres must be more than 0";
        litres.classList.add("invalid");
    } else {
        litresMessage.textContent = "";
        litres.classList.remove("invalid");
    }
}

function checkMember() {
    let typed = member.value.trim().toUpperCase();
    member.value = typed;
    if (memberRegex.test(typed)) {
        memberMessage.textContent = "";
        member.classList.remove("invalid");
    } else {
        memberMessage.textContent = "A member number looks like ER-0001";
        member.classList.add("invalid");
    }
}

function recordDelivery(event) {
    checkMember();
    checkLitres();
    if (member.classList.contains("invalid")) {
        event.preventDefault(); // stop: the member number is wrong
        member.focus();
    } else if (litres.classList.contains("invalid")) {
        event.preventDefault(); // stop: the litres are wrong
        litres.focus();
    }
    // nothing wrong: the form goes on to process-delivery.php
}

litres.addEventListener("input", checkLitres);
member.addEventListener("blur", checkMember);
if (deliveryForm) {
    deliveryForm.addEventListener("submit", recordDelivery);
}
```[cite: 3, 6, 20]

To verify: open `deliveries.php` in your browser, enter an invalid member number like `ER-12`, and click **Record delivery**—it should show `"A member number looks like ER-0001"` and stay on `deliveries.php` instead of navigating to `process-delivery.php`[cite: 3, 6, 16, 20].