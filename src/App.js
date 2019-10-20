import React,{Component} from 'react';
import Faker from 'faker';
import {Table, Divider, Tag} from 'antd';

const columns = [
  {
    title : 'Name',
    dataIndex : 'name',
    key : 'name'
  },
  {
    title : 'First Month Bill',
    dataIndex : 'firstMonth',
    key : 'firstMonth'
  },
  {
    title : 'First Month Rewards',
    dataIndex : 'firstMonthRewards',
    key : 'firstMonthRewards'
  },
  {
    title : 'Second Month Bill',
    dataIndex : 'secondMonth',
    key : 'secondMonth'
  },
  {
    title : 'Second Month Rewards',
    dataIndex : 'secondMonthRewards',
    key : 'secondMonthRewards'
  },
  {
    title : 'Third Month Bill',
    dataIndex : 'thirdMonth',
    key : 'thirdMonth'
  },
  {
    title : 'Third Month Rewards',
    dataIndex : 'thirdMonthRewards',
    key : 'thirdMonthRewards'
  },
  
  {
    title : 'Total Rewards',
    dataIndex : 'totalRewards',
    key : 'totalRewards'
  }
]

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
    }
  }
  
  componentWillMount() {
    for (let i = 0; i < 300; i++) {
      const user = {
        key : i,
        name: Faker.internet.userName(),
        
        firstMonth: parseInt(Faker.finance.amount(0,200,0)),
        secondMonth: parseInt(Faker.finance.amount(0,200,0)),
        thirdMonth: parseInt(Faker.finance.amount(0,200,0))

      }
      this.setState(prevState => ({
        users: [...prevState.users, user],
      }))
    }
  }
  rewardsCalc = (price) => {
    let rewards = 0;
    if(price > 100)
    {
      rewards = 50 + (price - 100)*2;
    }
  
    if(price > 50 && price<100)
    {
      rewards = price - 50;
    }
    return rewards;
  }

  
  
  renderUsers(user) {
    
    return (
      <div style={{ border: 'solid 1px #eee' }}>
        
        <h4>Name: {user.name}</h4>
        <h4>First Month: {user.firstMonth}</h4>
        <h4>First Month Rewards: {this.rewardsCalc(user.firstMonth)}</h4>
        <h4>Second Month: {user.secondMonth}</h4>
        <h4>Second Month Rewards: {this.rewardsCalc(user.secondMonth)}</h4>
        <h4>Third Month: {user.thirdMonth}</h4>
        <h4>Third Month Rewards: {this.rewardsCalc(user.thirdMonth)}</h4>
        
        <h4>Total Rewards: {this.rewardsCalc(user.firstMonth) + this.rewardsCalc(user.secondMonth) + this.rewardsCalc(user.thirdMonth)}</h4>
      </div>
    )
  }
  
  render() {
    return <div>
    
    <Table columns={columns} />
    {this.state.users.map(user => this.renderUsers(user))}
    </div>
   
  }
}
 


export default App;
