import { DateTime } from "https://cdn.skypack.dev/luxon";

const button = document.getElementById("button");
const result = document.getElementById("result");
const input = document.querySelector(".age-calculate");

button.addEventListener("click", (e) => {
    e.preventDefault();

    // Close date picker
    input.blur();

    const age_men = input.value;

    if (!age_men) {
        result.innerText = "Please select a date";
        return;
    }

    const dateobj = DateTime.fromJSDate(new Date(age_men));

    if (!dateobj.isValid) {
        result.innerText = "Invalid date";
        return;
    }

    const now = DateTime.now();

    if (dateobj > now) {
        result.innerText = "Please enter a valid past date";
        return;
    }

    const diff = now.diff(dateobj, ["years", "months"]).toObject();

    result.innerText = `Your age is ${Math.floor(diff.years)} years and ${Math.floor(diff.months)} months`;
});
