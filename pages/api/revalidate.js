import loadFromWPGraphQL from '@graphql/api/loadFromWPGraphQL'

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.sendStatus(405)
  if (req.body.secret !== process.env.SECRET_TOKEN) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  try {
    // this should be the actual path not a rewritten path
    // e.g. for "/blog/[slug]" this should be "/blog/post-1"
    let revalidate = null
    if (req.body.id) {
      const id = req.body.id
      const query = `query revalidate {
      post (
        id: ${id}
        idType: DATABASE_ID
        ) {
          databaseId
          uri
        }
    }
        `
      const data = await loadFromWPGraphQL(query)
      revalidate = await res.revalidate(data.post.uri)
    } else {
      revalidate = await res.revalidate(req.body.path)
    }
    return res.json({ revalidated: true, value: revalidate })
  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    console.log(err)
    return res.status(500).send('Error revalidating')
  }
}
