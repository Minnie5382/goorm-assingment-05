
import './App.css';

function App() {
  return (
    <div className='p-7 bg-pink-100'>
      <div className=''>
        <h1 className='mb-5 text-3xl font-bold'>예산 계산기</h1>
        <div className='rounded bg-white p-2'>
          <div className='flex-col p-5 border-b'>
            <div className='flex'>
              <div className='w-1/2 pr-1'>
                <h2>지출 항목</h2>
                <input type='text' className='border-b w-full p-2'></input>
              </div>
              <div className='w-1/2 pl-1'>
                <h2>비용</h2>
                <input type='text' className='border-b w-full p-2'></input>
              </div>
            </div>
            <button className='border rounded mt-4 px-3 py-1'>제출</button>
          </div>
          <div className='flex-col mt-3 p-5'>
            <h2 className='mb-3'>지출 목록</h2>
            <div className='border flex justify-between mb-2 p-2'>
              <div className='value'>침대</div>
              <div className='text-lg'>5000 원</div>
              <div className='func-btns'>
                <button className='border rounded mx-1 text-sm px-2 pt-1'>수정</button>
                <button className='border rounded mx-1 text-sm px-2 pt-1'>삭제</button>
              </div>
            </div>
            <div className='border flex justify-between mb-2 p-2'>
              <div className='value'>띠뇨</div>
              <div className='text-lg'>300 원</div>
              <div className='func-btns'>
              <button className='border rounded mx-1 text-sm px-2 pt-1'>수정</button>
                <button className='border rounded mx-1 text-sm px-2 pt-1'>삭제</button>
              </div>
            </div>
          </div>
          <div className='text-right font-medium'>총 지출 : 500,000 원</div>
        </div>
      </div>
    </div>
  );
}

export default App;
