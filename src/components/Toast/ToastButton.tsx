import React, { useState } from 'react'

interface Props {
  buttonText: string
  toastMessage: string
  onClick: () => void
}
const ToastButton: React.FC<Props> = ({
  buttonText,
  toastMessage,
  onClick,
}) => {
  const [showToast, setShowToast] = useState(false)

  const handleClick = () => {
    setShowToast(true)
    onClick()
    setTimeout(() => {
      setShowToast(false)
    }, 2000)
  }

  return (
    <div>
      <button
        className="bg-slate-200 hover:bg-slate-300 py-2 px-4 rounded"
        onClick={handleClick}
      >
        {buttonText}
      </button>
      {showToast && (
        <div className="fixed bottom-0 right-0 mb-4 mr-4 bg-gray-800 text-white p-4 rounded">
          {toastMessage}
        </div>
      )}
    </div>
  )
}

export default ToastButton
