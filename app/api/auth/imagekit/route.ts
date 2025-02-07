import ImageKit from 'imagekit'
import config from '@/lib/config'
import { NextResponse } from 'next/server'

const {
  env: {
    imagekit: { urlEndpoint, publicKey, privateKey },
  },
} = config

const imagekit = new ImageKit({
  urlEndpoint,
  publicKey,
  privateKey,
})

export async function GET() {
  return NextResponse.json(imagekit.getAuthenticationParameters())
}
