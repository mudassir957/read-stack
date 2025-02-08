import { Redis } from '@upstash/redis'
import config from '@/lib/config'

const redis = new Redis({
  url: config.env.upStash.redisUrl,
  token: config.env.upStash.redisToken,
})

export default redis
