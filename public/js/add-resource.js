
function addResource() {
    var response = "";

    // Create an object to hold form data
    var jsonData = new Object();
    jsonData.name = document.getElementById("name").value;
    jsonData.location = document.getElementById("location").value;
    jsonData.description = document.getElementById("description").value;
    jsonData.owner = document.getElementById("owner").value;

    // Validate required fields
    if (jsonData.name == "" || jsonData.location == "" || jsonData.description == "" || jsonData.owner == "") {
        alert('All fields are required!');
        return;
    }

    // Configure the request to POST data
    var request = new XMLHttpRequest();
    request.open("POST", "/add-resource", true);
    request.setRequestHeader('Content-Type', 'application/json');

    // Handle server response
    request.onload = function () {
        response = JSON.parse(request.responseText);
        console.log(response);

        if (response.message == undefined) {
            alert('Added Resource: ' + jsonData.name + '!');

            // Clear form fields
            document.getElementById("name").value = "";
            document.getElementById("location").value = "";
            document.getElementById("description").value = "";
            document.getElementById("owner").value = "";

            // Close modal
            $('#resourceModal').modal('hide');

            // Reload table
            viewResources();

        } else {
            alert('Unable to add resource!');
        }
    };

    // Send request
    request.send(JSON.stringify(jsonData));
}
