import { useState } from 'react'

function TextTyper() {
  const data = ' Next-auth + Prisma + Tailwind + PlanetScale + Vercel'
  const [descDisplay, setDescDisplay] = useState('')

  useState(() => {
    addString(data)
  })

  function addString(data: string, m = '') {
    if (data.length === 0) return
    var ary = data.split('')
    var n = m + ary.shift()
    setDescDisplay(n)
    setTimeout(() => addString(ary.join(''), n), 100)
  }

  return <h1>{descDisplay}</h1>
}

export default TextTyper
