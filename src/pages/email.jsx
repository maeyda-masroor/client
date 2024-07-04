import emailjs from "@emailjs/browser";

const sendCustomEmail = (details) => {
  // initialize using your User ID saved in the .env file
  emailjs.init("maeydah.masroor@pill.org.pk");
  emailjs
    .send(
      "noorFoundation_emails", // The service ID saved in the .env file
      'template_raj12kt', // The template ID also saved in the .env file
      // Start of the variables defined in the template earlier
      {
        to_email: details.to_email,
        subject: details.subject,
        message: details.message,
      }
      // End of the variables defined in the template earlier
    )
    .then((response) => {
      // Debug statement on the console to show the function has been executed successfully
      console.log(response);
    })
    .catch((error) => {
      // Debug statement on the console to show the error that occured
      console.log(error);
    });
};

export { sendCustomEmail };