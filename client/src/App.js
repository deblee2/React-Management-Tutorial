//App.js
import "./App.css";
import React from "react";
import Customer from "./components/Customer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { withStyles } from "@material-ui/core/styles";

// 실제로 보내고자 하는 데이터 명시
// 스타일 변수 정의
const styles = (theme) => ({
  // 루트 클래스
  root: {
    width: "100%",
    marginTop: theme.spacing(3), // 여백을 3의 가중치만큼 줄 수 있도록
    overflowX: "auto", //전체 바깥쪽에 해당하는 루트같은 경우는 x축으로 오버플로가 되도록 처리
  },
  table: {
    minWidth: 1080, // 화면의 크기가 줄어들어도 1080만큼은 무조건 자리잡아서 가로스크롤이 생김
  },
});

const customers = [
  {
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
  }
];

// Customer 컴포넌트를 불러옴에 있어서 그 값으로 위에서 정의한
// customer의 각 값들을 전송할 수 있도록 함

class App extends React.Component {
  render() {
    // classes라는 변수를 만들어서 위에서 정의한 스타일이 적용될 수 있도록 함
    const { classes } = this.props;
    return (
      // map 함수를 이용해서 특정한 배열의 각 원소에 접근해서
      // 그 원소를 어떻게 처리하겠다 명시 

      // map 사용 시 key라는 이름의 props를 사용해야 됨
      // 이를 사용하지 않으면 관련 오류가 출력됨
      // 페이퍼는 컴포넌트의 외부를 감싸기 위한 컴포넌트
      <Paper className={classes.root}>
        <Table className={classes.table}>
          {/* 테이블 위쪽에 속성 형태로 들어감 */}
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>번호</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map((customer) => {
              return (
                <Customer
                  key={customer.id}
                  id={customer.id}
                  image={customer.image}
                  name={customer.name}
                  birthday={customer.birthday}
                  gender={customer.gender}
                  job={customer.job}
                />
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);