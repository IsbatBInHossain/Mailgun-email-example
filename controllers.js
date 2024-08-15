const { mg } = require('./mailgun')

const sendMail = async (req, res) => {
  try {
    const { email, subject, text } = req.body

    const dynamicHtml = `
        <h1>${subject}</h1>
        <p>${text}</p>
        <p>Sent to: ${email}</p>
      `

    const message = await mg.messages.create(process.env.SANDBOX_MAIL_SERVER, {
      from: `mailgun@${process.env.SANDBOX_MAIL_SERVER}`,
      to: [email],
      subject: subject,
      text: text,
      html: dynamicHtml,
    })

    console.log(message)
    res.status(200).send({
      status: 'Successful',
      message: 'Successfully send the message',
    })
  } catch (error) {
    console.error(error)

    res.status(500).send({
      status: 'Failed',
      message: 'Failed to send the message',
      error: error.message,
    })
  }
}

module.exports = {
  sendMail,
}
