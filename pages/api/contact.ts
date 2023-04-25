import { NextApiRequest, NextApiResponse } from 'next'

const Contact = async (req: NextApiRequest, res: NextApiResponse) => {
  return res.status(200).json({
    status: 'error',
    message: 'Nous vous contacterons dans les plus brefs délais.',
  })
}

export default Contact
