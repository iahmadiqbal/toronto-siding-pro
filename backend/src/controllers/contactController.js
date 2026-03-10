const Contact = require("../models/Contact");

const submitContact = async (req, res) => {
  try {
    const { name, email, phone, service, message } = req.body;

    const contact = new Contact({
      name,
      email,
      phone,
      service,
      message,
    });

    await contact.save();

    res.status(201).json({
      success: true,
      message: "Your message has been received!",
    });
  } catch (error) {
    console.error("Error saving contact:", error);
    res.status(500).json({
      success: false,
      message: "Failed to submit contact form. Please try again.",
    });
  }
};

module.exports = { submitContact };
