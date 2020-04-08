import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { encode } from '../lib/base64urls'
const generateHappiness = require('../lib/generate-happiness')

const Index = () => {
  const router = useRouter()

  useEffect(() => {
    const { font, word } = generateHappiness()
    const data = encode(JSON.stringify({ font, word }))
    router.push('/[data]', `/${data}`)
  }, [])

  return null
}

export default Index
