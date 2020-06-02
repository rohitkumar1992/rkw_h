import React, { Component } from 'react';
import Header from './Component/header';
import Footer from './Component/footer';
import routes from './routes';
import Parent from './Component/Parent'
// import Authentication from './Container/Authentication/Authentication';
import {BrowserRouter, Router,Link,Route,Switch,HashRouter,Redirect} from "react-router-dom";
import axios from 'axios';
import {PLATFORM,USERID,GETHOMEDATA} from './url';
import Loader from './Component/Loader/main_loader'
 class App extends Component{ 
  state={city:[],country:[],state:[],subjects:[],courses:[],isLoading:false}
  componentDidMount()
  {
    axios.get(GETHOMEDATA).then((res)=>{
      if(res.data.success==1)
      {
        let response=res.data;
        this.setState({city:response.cities,country:response.countries,state:response.states,subjects:response.subjects,courses:response.courses,isLoading:true})
      }
    }).catch((error)=>{

    })
  }
  render() {
    const {state,city,country,subjects,courses,isLoading}=this.state
    if(isLoading)
    {
    return (
        <div class="top_div">
        <Switch>
          {routes.map((route, idx) => {
            const Url=route.path.split('/')[1];
            if(Url=="dashboard")
            {
              return(route.component ? (<Route key={idx} path={route.path} exact={route.exact} name={route.name} render={props => (
                  <route.component {...props} state={state} country={country} subjects={subjects} courses={courses} city={city}/>
                )} />)
                : (null))
            }
            else
            {
              return(route.component ? (<Route key={idx} path={route.path} exact={route.exact} name={route.name} render={props => (
                  <Parent><Header {...this.props} /><route.component {...props} state={state} country={country} subjects={subjects} courses={courses} city={city}/><Footer/></Parent>
                )} />)
                : (null))
            }
            }
          )}
        </Switch>  
        </div>
    );
    }
    else
    {
      return(<Loader />)
    }
  }
}

export default App;