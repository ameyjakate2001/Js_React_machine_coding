import { useState } from 'react'

const usePasswordGenerator = () => {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  let charSet = '',
    finalPassword = ''

  function passwordGenerator(length, checkBoxData) {
    const dataArray = checkBoxData.filter((check) => check.state)
    if (dataArray.length === 0) {
      setError('Please select atleast one field')
      setPassword('')
      return
    }
    dataArray.forEach((data) => {
      switch (data.name) {
        case 'Include Uppercase Letters':
          charSet += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
          break
        case 'Include Lowercase Letters':
          charSet += 'abcdefghijklmnopqrstuvwxyz'
          break
        case 'Include Numbers':
          charSet += '0123456789'
          break
        case 'Include Symbols':
          charSet += '!@#$%^&*()'
          break
        default:
          break
      }
    })

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charSet.length)
      finalPassword += charSet[randomIndex]
    }
    setPassword(finalPassword)
    setError('')
  }

  return { password, passwordGenerator, error }
}

export default usePasswordGenerator
