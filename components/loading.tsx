import React from 'react'
import { memo } from 'react'

const Loading = ({ children, data = null, loading, error = null }) => {
  if (loading)
    return (
      <div className="border border-primary row shadow rounded-md p-4 max-w-xl w-full mx-auto">
        <div className="animate-pulse flex space-x-4">
          <div className="rounded-full bg-slate-700 h-10 w-10"></div>
          <div className="flex-1 space-y-6 py-1">
            <div className="h-2 bg-slate-700 rounded"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                <div className="h-2 bg-slate-700 rounded col-span-1"></div>
              </div>
              <div className="h-2 bg-slate-700 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    )
  if (error || !data) return <></>

  return (
    <>
      {data
        ? React.Children.map(children, (child) => {
            if (React.isValidElement(child))
              return React.cloneElement(child, { ...data })
            return child
          })
        : children}
    </>
  )
}
export default memo(Loading)
