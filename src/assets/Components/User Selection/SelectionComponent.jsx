import React from 'react'
import SectionFour from '../Reset Password/Email Authentication/SectionFour'
import UserSelection from './UserSelection'

const SelectionComponent = () => {
  return (
    <div className="flex flex-row items-center justify-center selectioncomponent">
        <SectionFour/>
        <UserSelection/>
    </div>
  )
}

export default SelectionComponent