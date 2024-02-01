import React, { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'

interface DropdownProps {
  options: string[]
  onSelect: (option: string) => void
}

const Dropdown: React.FC<DropdownProps> = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [value, setValue] = useState('')

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handleSelect = (option: string) => {
    onSelect(option)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="px-4 py-2 bg-gray-200 text-gray-800 rounded shadow hover:bg-gray-300 focus:outline-none focus:ring flex items-center"
      >
        {value || 'Choose blog'} <IoIosArrowDown />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
          <ul>
            {options.map((option, index) => (
              <li
                key={index}
                onClick={() => {
                  setValue(option)
                  handleSelect(option)
                }}
                className="py-2 px-4 text-gray-800 hover:bg-gray-100 cursor-pointer"
              >
                {option}
              </li>
            ))}
            <li
              onClick={() => {
                setValue('')
                handleSelect('')
              }}
              className="py-2 px-4 text-gray-800 hover:bg-gray-100 cursor-pointer"
            >
              New blog
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default Dropdown
