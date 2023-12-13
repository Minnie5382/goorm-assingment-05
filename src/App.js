
import './App.css';

function App() {
  return (
    <div>
      <div className='header'>
        예산 계산기
      </div>
      <div className=''>
        <div className='input'>
          지출 항목
          <input type='text' className=''>
          </input>
          비용
          <input type='text' className=''>
          </input>
          <button>제출</button>
        </div>
        <div className='list'>
          <div>지출 목록</div>
          <div className='list-item'>
            <div className='value'>띠뇨 괴롭히기</div>
            <div className=''>5000</div>
            <div className='func-btns'>
              <button className='edit'>수정</button>
              <button className='delete'>삭제</button>
            </div>
          </div>
        </div>

      </div>
      <div className='total'>
        총 지출 : 
      </div>
    </div>
  );
}

export default App;
