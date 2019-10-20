import React,{Component} from 'react'; // importing react and react.component
import Faker from 'faker'; // importing faker library to generate fake data
import {Table} from 'antd'; // importing table from ant design library
// declaring the columns 

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
// App Component
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
        firstMonth: parseInt(Faker.finance.amount(0,200,0,)),
        secondMonth: parseInt(Faker.finance.amount(0,200,0)),
        thirdMonth: parseInt(Faker.finance.amount(0,200,0))

      }
      this.setState(prevState => ({
        users: [...prevState.users, user],
      }))
    }
  }

  // Rewards calculator Function
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
   return  {
    
    name: user.name,
    firstMonth : user.firstMonth,
    firstMonthRewards : this.rewardsCalc(user.firstMonth),
    secondMonth : user.secondMonth,
    secondMonthRewards : this.rewardsCalc(user.secondMonth),
    thirdMonth : user.thirdMonth,
    thirdMonthRewards : this.rewardsCalc(user.thirdMonth),
    totalRewards : this.rewardsCalc(user.firstMonth) + this.rewardsCalc(user.secondMonth) + this.rewardsCalc(user.thirdMonth)
  }
   
  }

  
  
  render() {
    return <div>
    
    <Table 
      columns={columns} 
      dataSource ={this.state.users.map(user => this.renderUsers(user))} /> 
    
    </div>

   
  }
}
 


export default App;
