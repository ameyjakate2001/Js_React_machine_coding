import './index.css'
import { useState } from 'react'
import usePasswordGenerator from './Hooks/usePasswordGenerator'
import PpasswordStrengthGenerator from './component/strengthChecker'

export default function App() {
  const [checkboxData, setCheckBoxData] = useState([
    {
      name: 'Include Uppercase Letters',
      state: false,
    },
    {
      name: 'Include Lowercase Letters',
      state: false,
    },
    {
      name: 'Include Numbers',
      state: false,
    },
    {
      name: 'Include Symbols',
      state: false,
    },
  ])
  const [length, setLength] = useState(4)
  const [copied, setCopied] = useState(false)
  const { password, passwordGenerator, error } = usePasswordGenerator()

  function checkboxHandler(index) {
    const changeData = [...checkboxData]
    changeData.forEach((data, i) => {
      if (index === i) changeData[index].state = !changeData[index].state
    })
    setCheckBoxData(changeData)
  }

  return (
    <div className='container'>
      {/* Password and copy button div */}
      {password && (
        <div className='header'>
          <p>{password}</p>
          <button
            className='copyBtn'
            onClick={() => {
              setCopied(true)
              window.navigator.clipboard.writeText(password)
              setTimeout(() => {
                setCopied(false)
              }, 1000)
            }}
          >
            {copied ? 'Copied' : 'Copy'}
          </button>
        </div>
      )}

      <div className='passwordLength'>
        <div className='charLength'>
          <p>Character Length</p>
          <p>{length}</p>
        </div>
        <input
          type='range'
          min='1'
          value={length}
          max='20'
          onChange={(e) => {
            setLength(e.target.value)
          }}
        />
        {/* </span> */}
      </div>

      {/* checkbox section */}
      <div className='checkbox'>
        {checkboxData.map((check, i) => {
          return (
            <span className='checkData' key={i}>
              <input type='checkbox' onChange={() => checkboxHandler(i)} />
              {check.name}
            </span>
          )
        })}
      </div>

      {/* strength section */}
      <div className='strength'>
        {password !== '' && <PpasswordStrengthGenerator password={password} />}
      </div>

      {error && (
        <p style={{ color: 'red', fontWeight: 'bold', fontSize: '1.3rem' }}>
          {error}
        </p>
      )}

      {/* Generate Password */}
      <div className='generatePassword'>
        <button
          className='generatePasswordBtn'
          onClick={() => {
            passwordGenerator(length, checkboxData)
          }}
        >
          Generate Password{' '}
        </button>
      </div>
    </div>
  )
}
