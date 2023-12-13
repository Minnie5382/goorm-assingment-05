
import './App.css';
import { useState, useCallback } from "react";
import Lists from "./components/Lists.js"
import List from "./components/List.js"

function App() {
  const [data, setData] = useState([]);
  const [typedTitle, setTypedTitle] = useState();
  const [typedPrice, setTypedPrice] = useState();
  const [totalPrice, setTotalPrice] = useState(0);
  const [isUpdating, setIsUpdating] = useState(false);
  const [updatedId, setUpdatedId] = useState();

  const handleSubmit = (e) => {
      e.preventDefault();
      const entry = {
        id: Date.now(),
        title: e.target.title.value, 
        price: e.target.price.value
      };
      setData(prev => [...prev, entry]);
      setTypedTitle("");
      setTypedPrice("");

      // total 계산
      data.forEach(entry => {
        let sum = 0; 
        sum = totalPrice + parseInt(entry.price);
        setTotalPrice(sum);
      });
    }

  const handleTypeTitle = (e) => {
    e.preventDefault();
    setTypedTitle(e.target.value);
  }
  const handleTypePrice = (e) => {
    e.preventDefault();
    setTypedPrice(e.target.value);
  }

  const handleDelete = (id) => {
    const newDataList = data.filter(data => data.id !== id);
    setData(newDataList);
  }

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    handleDelete(updatedId);
    console.log(updatedId)
    const updatedEntry = {
      id: updatedId,
      title: e.target.title.value, 
      price: e.target.price.value
    };
    setData(prev => [...prev, updatedEntry]);
    setIsUpdating(false);
    setTypedTitle("");
    setTypedPrice("");

    console.log(data);
  }

  const handleAllDelete = () => {
    setData([]);
    setTotalPrice(0);
  }

  if(!isUpdating) {
    return (
      <div className='p-7 bg-pink-100'>
        <div className=''>
          <h1 className='mb-5 text-3xl font-bold'>예산 계산기</h1>
          <div className='rounded bg-white p-2'>
            <div className='flex-col p-5 border-b'>
            <form onSubmit={handleSubmit}>
              <div className='flex mb-4'>
                <div className='w-1/2 pr-1'>
                  <h2>지출 항목</h2>
                  <input onChange={handleTypeTitle} type='text' name='title' placeholder='그릭요거트' className='border-b w-full p-2' value={typedTitle}></input>
                </div>
                <div className='w-1/2 pl-1'>
                  <h2>비용</h2>
                  <input onChange={handleTypePrice} type='text' name='price' placeholder='7000' className='border-b w-full p-2' value={typedPrice}></input>
                </div>
              </div>
              <input 
              type='submit'
              className='border rounded px-3 py-1 curser-pointer'
              value='추가'></input>
            </form>
          </div>
          <Lists 
          data={data} 
          setData={setData} 
          typedTitle={typedTitle}
          setTypedTitle={setTypedTitle}
          typedPrice={typedPrice}
          setTypedPrice={setTypedPrice}
          isUpdating={isUpdating} d
          setIsUpdating={setIsUpdating}
          setUpdatedId={setUpdatedId}/>
          <button
          className='border rounded px-3 py-1 curser-pointer ml-5'
          onClick={handleAllDelete}>전체 삭제</button>
          <div className='text-right font-medium mx-6 mb-2'>총 지출 : {totalPrice}원</div>
        </div>
      </div>
      </div>
    );
  } else {
    return (
      <div className='p-7 bg-pink-100'>
        <div className=''>
          <h1 className='mb-5 text-3xl font-bold'>예산 계산기</h1>
          <div className='rounded bg-white p-2'>
            <div className='flex-col p-5 border-b'>
            <form onSubmit={handleUpdateSubmit}>
              <div className='flex mb-4'>
                <div className='w-1/2 pr-1'>
                  <h2>지출 항목</h2>
                  <input onChange={handleTypeTitle} type='text' name='title' placeholder='그릭요거트' className='border-b w-full p-2' value={typedTitle}></input>
                </div>
                <div className='w-1/2 pl-1'>
                  <h2>비용</h2>
                  <input onChange={handleTypePrice} type='text' name='price' placeholder='7000' className='border-b w-full p-2' value={typedPrice}></input>
                </div>
              </div>
              <input 
              type='submit'
              className='border rounded px-3 py-1 curser-pointer'
              value='수정'></input>
            </form>
          </div>
          <Lists 
          data={data} 
          setData={setData} 
          typedTitle={typedTitle}
          setTypedTitle={setTypedTitle}
          typedPrice={typedPrice}
          setTypedPrice={setTypedPrice}
          isUpdating={isUpdating}
          setIsUpdating={setIsUpdating}
          App={App}/>
          <button>전체 삭제</button>
          <div className='text-right font-medium mx-6 mb-2'>총 지출 : {totalPrice} 원</div>
        </div>
      </div>
      </div>
    );
  }
  
}

export default App;
