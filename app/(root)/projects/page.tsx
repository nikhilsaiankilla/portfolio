import NavSection from '@/components/nav-section'
import React from 'react'

const page = () => {
  return (
    <div className="w-full min-h-screen bg-white text-black dark:bg-black dark:text-white px-5">
      <div className="w-full border-2 border-b-0 border-t-0 border-gray-700/10 dark:border-gray-700/40 max-w-4xl mx-auto min-h-screen">
        <NavSection />
        
      </div>
    </div>
  )
}

export default page