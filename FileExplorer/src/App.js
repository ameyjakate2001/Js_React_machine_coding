import Folder from './component/Folder'
import './index.css'
import data from './Data/structuredData'
import useTraverseTree from './Hooks/useTraverseTree'
import { useState } from 'react'

export default function App() {
  const { insertNode } = useTraverseTree()
  const [explorerData, setExplorerData] = useState(data)

  function addNode(id, item, isFolder) {
    const tree = insertNode(explorerData, id, item, isFolder)
    setExplorerData(tree)
  }

  return (
    <div className='App'>
      <Folder data={data} addNode={addNode} />
    </div>
  )
}
