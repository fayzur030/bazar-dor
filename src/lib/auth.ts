import { betterAuth } from 'better-auth'
import { MongoClient } from 'mongodb'
import { mongodbAdapter } from '@better-auth/mongo-adapter'

const uri = process.env.BETTER_AUTH_DB_URL
if (!uri) {
  throw new Error('BETTER_AUTH_DB_URL is not defined')
}

const client = new MongoClient(uri)
const db = client.db('bazar-dor')

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    google: {
      clientId: process.env.BETTER_GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.BETTER_GOOGLE_CLIENT_SECRET as string,
    },
    github: {
      clientId: process.env.BETTER_GITHUB_CLIENT_ID as string,
      clientSecret: process.env.BETTER_GITHUB_CLIENT_SECRET as string,
    },
  },
  database: mongodbAdapter(db, {
    client,
  }),
})
