import React, { Component } from 'react';

class Customer extends React.Component {
    render() {
        return (
            // props는 기본적으로 react component가 포함하고 있는 내용
            // 그러므로 this.props를 사용해서 출력
            <div>
                <CustomerProfile 
                id={this.props.id} 
                image={this.props.image}
                name={this.props.name}/>
                <CustomerInfo 
                birthday={this.props.birthday}
                gender={this.props.gender}
                job={this.props.job}/>
            </div>
        )
    }
}

class CustomerProfile extends React.Component {
    render() {
        return (
            // props는 기본적으로 react component가 포함하고 있는 내용
            // 그러므로 this.props를 사용해서 출력
            <div>
                {/* alt는 이미지에 대한 설명 */}
                <img src={this.props.image} alt="profile"></img>
                <h2>{this.props.name}({this.props.id}) 
                 </h2>
            </div>
        )
    }
}

class CustomerInfo extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.birthday}</p>
                <p>{this.props.gender}</p>
                <p>{this.props.job}</p>
            </div>
        )
    }
}

export default Customer;