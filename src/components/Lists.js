import React from 'react'
import List from './List.js'

const Lists = React.memo(({ data, setData, typedTitle, setTypedTitle, typedPrice, setTypedPrice, isUpdating, setIsUpdating, setUpdatedId }) => {
  return (
    <div>
        <div className='flex-col mt-3 p-5'>
          <h2 className='mb-3'>지출 목록</h2>
        {
            data.map((entry) => {
                return (
                <List 
                key={entry.id}
                id={entry.id}
                title={entry.title}
                price={entry.price} 
                data={data}
                setData={setData}
                typedTitle={typedTitle}
                setTypedTitle={setTypedTitle}
                typedPrice={typedPrice}
                setTypedPrice={setTypedPrice}
                isUpdating={isUpdating}
                setIsUpdating={setIsUpdating}
                setUpdatedId={setUpdatedId}
                />
                )
            })
        }
        </div>
    </div>
  )
})

export default Lists;
