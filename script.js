const lines = [
  "Problem Solver",
  "Ui/Ux Designer.",
  "Front end developer",
];

const typingSpeed = 100; 
const erasingSpeed = 50;
const delayBetweenLines = 1000; 

let currentLine = 0;
const textElement = document.getElementById("text");

function typeLine(line, callback) {
  let i = 0;
  const interval = setInterval(() => {
    if (i < line.length) {
      textElement.textContent += line[i];
      i++;
    } else {
      clearInterval(interval);
      setTimeout(callback, delayBetweenLines);
    }
  }, typingSpeed);
}

function eraseLine(callback) {
  let line = textElement.textContent;
  let i = line.length;
  const interval = setInterval(() => {
    if (i > 0) {
      textElement.textContent = line.slice(0, --i);
    } else {
      clearInterval(interval);
      callback();
    }
  }, erasingSpeed);
}

function loopLines() {
  typeLine(lines[currentLine], () => {
    eraseLine(() => {
      currentLine = (currentLine + 1) % lines.length;
      loopLines();
    });
  });
}

loopLines();

// whats app


// document.getElementById('whatsappForm').addEventListener('submit', function (e) {
//   e.preventDefault(); 

//   const name = document.getElementById('exampleInputName1').value;
//   const email = document.getElementById('exampleInputEmail1').value;
//   const message = document.getElementById('Message').value;

//   if (name != "" && email != "" && message != "") {
//     const phoneNumber = '9702490987';

//     const whatsappMessage = `Hello, you have a new message from the form:
// Name: ${name}
// Email: ${email}
// Message: ${message}`;

//     const encodedMessage = encodeURIComponent(whatsappMessage);

//     const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
//   } else {
//     alert("Please filled the mandatory * details")
//   }
//   window.open(whatsappURL, '_blank');
// });

// mail

document.getElementById('whatsappForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent the form from submitting normally

  // Get form values
  const name = document.getElementById('exampleInputName1').value;
  const email = document.getElementById('exampleInputEmail1').value;
  const message = document.getElementById('Message').value;

  // Recipient email address (replace with your email address)
  if (name != "" && email != "" && message != ""){
  const recipientEmail = 'vaaher21@gmail.com';

  // Format the email subject and body
  const subject = `New Message from ${name}`;
  const body = `Hello,\n\nYou have a new message from your form:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}\n\nBest regards,\nYour Website`;

  // Encode the subject and body for URL
  const encodedSubject = encodeURIComponent(subject);
  const encodedBody = encodeURIComponent(body);

  // Create the mailto link
  const mailtoLink = `mailto:${recipientEmail}?subject=${encodedSubject}&body=${encodedBody}`;

  }else{
    alert("Please input mandatory fields")
  }
  // Redirect to the mailto link
  window.location.href = mailtoLink;
});



