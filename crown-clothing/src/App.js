import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.scss';
import HomePage from './pages/homepage/HomePage.componenet';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header';
import SignInSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up';
import {auth} from './firebase/firebase.utils';



class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user})
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }

  render (){
    return (
      <div>
        <Header currentUser = {this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route  path='/shop' component={ShopPage} />
          <Route  path='/signin' component={SignInSignUpPage} />
        </Switch>
      </div>
    );
  }
 
}

export default App;
