import React from 'react'
import '../css/RefreshButton.css'


const RefreshButton = () => {
  const handleRefresh = (event) => {
    event.preventDefault()
    window.location.reload()
  }

  return <button className="refreshButton"onClick={handleRefresh}>Refresh</button>
}

export default RefreshButton
