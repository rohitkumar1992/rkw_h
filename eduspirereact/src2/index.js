import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Router,Link,Route,Switch,HashRouter,Redirect} from "react-router-dom";
import Header from './Component/header';
import Footer from './Component/footer';
import Home from './Container/Home';
import GetSubscription from './Container/get_subscription';
import LiveClasses from './Container/live_classes';
import Batches from './Container/batches';
import ChooseGoal from './Container/choose_your_goal';
import TopEducator from './Container/top_educator';
import UpcomingCourses from './Container/upcoming_courses';
import RecentlyStartCourse from './Container/recently_started_course';
import PopularCourses from './Container/popular_courses';
import ComprehensiveSyllabus from './Container/comprehensive_syllabus';
import TestSeries from './Container/test_series';
import ProceedToPay from './Container/proceed_to_pay';
import BecomeInstructor from './Container/become_instructor';
import Dashboard from './Container/dashboard';
import AddNewCourse from './Container/add_new_course';
import InstructorProfile from './Container/instructor_profile';
class MainContainer extends React.Component{
  render()
  {
  return(
    <BrowserRouter>
    <Header/>
    <Switch >
    <Route path="/" exact={true} component={Home}/>
    <Route path="/get_subscription"  component={GetSubscription}/>
    <Route path="/live_classes"  component={LiveClasses}/>
    <Route path="/batches"  component={Batches}/>
    <Route path="/choose_your_goal"  component={ChooseGoal}/>
    <Route path="/top_educator"  component={TopEducator}/>
    <Route path="/upcoming_courses"  component={UpcomingCourses}/>
    <Route path="/recently_started_course"  component={RecentlyStartCourse}/>
    <Route path="/popular_courses"  component={PopularCourses}/>
    <Route path="/comprehensive_syllabus"  component={ComprehensiveSyllabus}/>
    <Route path="/test_series"  component={TestSeries}/>
    <Route path="/proceed_to_pay"  component={ProceedToPay}/>
    <Route path="/become_instructor"  component={BecomeInstructor}/>
    <Route path="/dashboard"  component={Dashboard}/>
    <Route path="/add_new_course"  component={AddNewCourse}/>
    <Route path="/instructor_profile"  component={InstructorProfile}/>
    </Switch>
    <Footer/>
    </BrowserRouter>)
}
}
ReactDOM.render(
  <MainContainer />,
  document.getElementById('root')
);
