document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var doctor = document.getElementById('doctor').value;
    var date = document.getElementById('date').value;
    var time = document.getElementById('time').value;
    
    // Display confirmation message
    var confirmation = document.getElementById('confirmation');
    confirmation.innerHTML = `
        <p>Appointment Details:</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Doctor:</strong> ${doctor}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
        <p>Appointment booked successfully!</p>
    `;
    
    // Clear form
    document.getElementById('appointmentForm').reset();
});
