import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer'

// 실제로 보내고자 하는 데이터 명시
// 하나의 커스터머라는 변수 만들어서 키와 value 만들기
const customers = [{
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': 'Gildong Hong',
  'birthday': '000000',
  'gender': 'M',
  'job': 'Student'
}, 
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name': 'Chun Shim',
  'birthday': '101010',
  'gender': 'F',
  'job': 'Programmer'
},
{
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name': 'Sunshin Lee',
  'birthday': '020202',
  'gender': 'M',
  'job': 'Designer'
}]

// Customer 컴포넌트를 불러옴에 있어서 그 값으로 위에서 정의한
// customer의 각 값들을 전송할 수 있도록 함
class App extends Component {
  render() {
    return (
      // map 함수를 이용해서 특정한 배열의 각 원소에 접근해서
      // 그 원소를 어떻게 처리하겠다 명시 

      // map 사용 시 key라는 이름의 props를 사용해야 됨
      // 이를 사용하지 않으면 관련 오류가 출력됨
      <div>
        {
          customers.map(c => {
            return (
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
            );
          })
        }
      </div>
    );
  }
}

export default App;
