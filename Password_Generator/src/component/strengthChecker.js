import React from 'react'

const PasswordStrengthGenerator = ({ password }) => {
  const passwordLength = password.length
  function getPasswordStrength() {
    if (passwordLength < 1) return 'very weak'
    else if (passwordLength < 4) return 'weak'
    else if (passwordLength < 10) return 'average'
    else if (passwordLength < 15) return 'strong'
    else return 'very strong'
  }
  const passwordStrength = getPasswordStrength()

  if (!password) return <React.Fragment />
  return (
    <div className='passwordStrength'>
      $Strength:
      <span style={{ fontWeight: 'bold', fontSize: '1.4rem' }}>
        {passwordStrength}
      </span>
    </div>
  )
}

export default PasswordStrengthGenerator
