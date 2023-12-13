import React from 'react'

const List = React.memo(({ id, title, price, data, setData, setTypedTitle, setTypedPrice, setIsUpdating, setUpdatedId }) => {
    const handleDelete = (id) => {
        const newDataList = data.filter(data => data.id !== id);
        setData(newDataList);
    }

     const handleUpdate = (id) => {
    setIsUpdating(true)
    const updatingEntry = data.filter(data => data.id === id)[0];
    setTypedTitle(updatingEntry.title);
    setTypedPrice(updatingEntry.price);

    setUpdatedId(updatingEntry.id);
    }

  return (
    <div>
      <div className='border flex justify-between mb-2 p-2'>
              <div className='value'>{title}</div>
              <div className='text-lg'>{price} 원</div>
              <div className='func-btns'>
                <button 
                className='border rounded mx-1 text-sm px-2 pt-1'
                onClick={() => handleUpdate(id)}
                >
                    수정</button>
                <button 
                className='border rounded mx-1 text-sm px-2 pt-1'
                onClick={() => handleDelete(id)}>삭제</button>
              </div>
            </div>
    </div>
  )
})


export default List;

