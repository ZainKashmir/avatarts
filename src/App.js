//import logo from './logo.svg';

import './App.css';
import { Component } from 'react';
import { Nameheader } from './component/head/header';
import { Searchlist } from './component/search/search-list';
import { Cardlist } from './component/cardlist';

//import { useId } from 'react';
// import ReactDOM from 'react-dom/client';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Welcome Zain Butt",
      items: [],
      filter: "",
      filteredItems: []
    }

  }


  getUser = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then(users => this.setState({ items: users, filteredItems: users }))

  }
  componentDidMount() {
    this.getUser();
  }

  handleChange = event => {
    this.setState({ filter: event.target.value }, () => {
      this.fitlerItems();
    });
  }

  fitlerItems = () => {
    
    const newItems = this.state.items.filter(x => x.name.toLowerCase().includes(this.state.filter.toLowerCase())||x.email.toLowerCase().includes(this.state.filter.toLowerCase()));

    this.setState({ filteredItems: newItems}  )
    
  }

  render() {

    return (
      <div className="App">

        <Nameheader title='MONSTER ROLODEX' />

        <Searchlist  type="text" placeholder='sraech...' onChange={this.handleChange}  />

        <div className='card'>

          <Cardlist monsters={this.state.filteredItems} />
        

          {/* {this.state.filteredItems.map(x => {

            return <div className='itemss' key={x.id} >
             
              <Card  monster={x}  />
           
            </div>
             
          })} */}

        </div>
      </div>
    );
  }

}
export default App;








//////<button onClick={()=> this.changeMessage()}> Learn React</button>
////////<button onClick={()=> this.getUser()}> Insert names</button>
  //  {/* <li >{x.name}  </li>  */}
              // {/* <h6>{x.email}</h6> */}
              // img={`https://robohash.org/ ${x.id}`}