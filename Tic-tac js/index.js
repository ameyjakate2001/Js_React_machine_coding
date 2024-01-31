const grid = document.querySelector('.grid')
const won = document.querySelector('.won')
const reset = document.querySelector('.reset')

let chance = true
let hash = {}
let allFilled = 0

grid.addEventListener('click', function (e) {
  const target = e.target
  const index = target.dataset.index
  if (index) {
    const [x, y] = index.split('-').map((val) => parseInt(val))
    if (!hash[index]) {
      if (chance) {
        hash[index] = 'X'
        target.classList.add('cell-x')
      } else {
        hash[index] = 'o'
        target.classList.add('cell-y')
      }
      allFilled++
      chance = !chance

      let win = checkWin()
      if (allFilled == 9 || win.includes('win')) {
        document.querySelector('.won').textContent = win
        grid.style.pointerEvents = 'none'
      }
    }
  }
})

reset.addEventListener('click', function () {
  const cells = document.querySelectorAll('.grid-item')
  cells.forEach((cell) => {
    if (cell.classList.contains('cell-x')) {
      cell.classList.remove('cell-x')
    }
    if (cell.classList.contains('cell-y')) {
      cell.classList.remove('cell-y')
    }
  })
  grid.style.pointerEvents = 'all'
  document.querySelector('.won').textContent = ''
  allFilled = 0
  chance = true
})

function checkWin() {
  //for ROW
  for (let i = 0; i < 3; i++) {
    const hashSet = new Set()
    let player = ''
    for (let j = 0; j < 3; j++) {
      const key = `${i}-${j}`
      player = hash[key]
      hashSet.add(hash[key])
    }
    console.log(player)
    if (hashSet.size == 1 && player) {
      return `Player ${player} win`
    }
  }

  //for COLUMN
  for (let j = 0; j < 3; j++) {
    const hashSet = new Set()
    let player = ''
    for (let i = 0; i < 3; i++) {
      const key = `${i}-${j}`
      player = hash[key]
      hashSet.add(hash[key])
    }
    if (hashSet.size == 1 && player) {
      return `Player ${player} win`
    }
  }

  //diagonal
  let i = 0,
    j = 0
  const hashSet = new Set()
  let player = ''
  while (i < 3 && j < 3) {
    const key = `${i}-${j}`
    player = hash[key]
    hashSet.add(hash[key])
    i++
    j++
  }
  if (hashSet.size == 1 && player) {
    return `Player ${player} win`
  }
  hashSet.clear()
  j = 2
  i = 0

  //reverse diagonal
  while (i < 3 && j >= 0) {
    const key = `${i}-${j}`
    player = hash[key]
    hashSet.add(hash[key])
    i++
    j--
  }
  if (hashSet.size == 1 && player) {
    return `Player ${player} win`
  }

  return 'Match Draw'
}
