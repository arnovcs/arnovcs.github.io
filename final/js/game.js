//JS

function alert() {
    let donateval = document.getElementById('donation').value;

    if (donateval > 0.5) {
        document.getElementById('success').style.display='block';
        success.innerHTML = "Thank you for donating " + donateval + " dollars to the cause!";
        document.getElementById('failure').style.display='none';
    } else {
        document.getElementById('failure').style.display='block';
        failure.innerHTML = "Your donation amount is too small. Try Again.";
        document.getElementById('success').style.display='none';
    }
}

function possubmit() {
    let firstName = document.getElementById('fname').value;
    let lastName = document.getElementById('lname').value;

    let checkedCheckboxes = document.querySelectorAll('input[name="positions"]:checked').length;

    document.getElementById('posans').innerHTML = firstName + ' ' + lastName + ', you are interested in ' + checkedCheckboxes + ' positions.';
}
