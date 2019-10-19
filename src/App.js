import React,{Component} from 'react';
import Faker from 'faker';

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
        name: Faker.internet.userName(),
        email: Faker.internet.email(),
        firstMonth: parseInt(Faker.finance.amount(0,200,0)),
        secondMonth: parseInt(Faker.finance.amount(0,200,0)),
        thirdMonth: parseInt(Faker.finance.amount(0,200,0))

      }
      this.setState(prevState => ({
        users: [...prevState.users, user],
      }))
    }
  }
 
  renderUsers(user) {
    console.log(user);
    return (
      <div style={{ border: 'solid 1px #eee' }}>
        
        <h4>Name: {user.name}</h4>
        <h4>Email: {user.email}</h4>
        <h4>First Month: {user.firstMonth}</h4>
        <h4>Second Month: {user.secondMonth}</h4>
        <h4>Third Month: {user.thirdMonth}</h4>
        <h4>Total:  {user.firstMonth + user.secondMonth + user.thirdMonth}</h4>
      </div>
    )
  }
  
  render() {
    return <div>{this.state.users.map(user => this.renderUsers(user))}</div>
  }
}
 


export default App;
