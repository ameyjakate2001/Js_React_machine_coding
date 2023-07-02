import { useState } from 'react'

function Folder({ data, addNode }) {
  const [expand, setExpand] = useState(false)
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: null,
  })

  function createFolderHandler(e, isFolder, id) {
    e.stopPropagation()
    setExpand(true)
    setShowInput({
      visible: true,
      isFolder,
    })
  }
  function onAddFolder(e) {
    if (e.keyCode === 13 && e.target.value) {
      //logic
      addNode(data.id, e.target.value, showInput.isFolder)
      setShowInput({ ...showInput, visible: false })
    }
  }

  if (!data.isFolder) {
    return <div style={{ marginTop: '10px' }}>🗃️{data.name}</div>
  }
  return (
    <div>
      <div className='folder' onClick={() => setExpand(!expand)}>
        <span>📁{data.name}</span>
        <div>
          <button onClick={(e) => createFolderHandler(e, true, data.id)}>
            Folder +
          </button>
          <button onClick={(e) => createFolderHandler(e, false, data.id)}>
            File +
          </button>
        </div>
      </div>
      {showInput.visible && (
        <div style={{ margin: '0 40px' }}>
          {showInput.isFolder ? '📁' : '🗃️'}

          <input
            autoFocus
            onBlur={() => setShowInput({ ...showInput, visible: false })}
            type='text'
            onKeyDown={(e) =>
              onAddFolder(e, showInput.isFolder, data.id, e.target.value)
            }
            style={{ margin: '10px' }}
          />
        </div>
      )}

      <div style={{ marginLeft: '50px', display: expand ? 'block' : 'none' }}>
        {data.items.map((item) => {
          return <Folder data={item} addNode={addNode} />
        })}
      </div>
    </div>
  )
}
export default Folder
