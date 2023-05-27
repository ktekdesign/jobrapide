import nodemailer from 'nodemailer'
import { NextApiRequest, NextApiResponse } from 'next'

const Contact = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const transporter = nodemailer.createTransport({
      host: '51.75.255.123',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: 'contact@ktekhosting.com', // generated ethereal user
        pass: 'Marvin16@', // generated ethereal password
      },
    })

    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: `"${req.body?.name} " <contact@ktekhosting.com>`, // sender address
      to: 'contact@ktekdesign.com', // list of receivers
      subject: req.body?.subject, // Subject line
      text: req.body?.text,
    })

    if (info.messageId)
      return res.status(200).json({
        message: 'Nous vous contacterons dans les plus brefs délais.',
      })
  } catch (err) {
    return res.status(500).json({ message: err?.message })
  }
}

export default Contact
