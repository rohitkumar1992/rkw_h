import React, { Component } from 'react';
import Authentication from '../../Container/Authentication/Authentication';
import {BrowserRouter, Router,Link,Route,Switch,HashRouter,Redirect} from "react-router-dom";
import BreadCrumb from '../../Component/breadcrumb';
class Home extends Component {
  render() {
    return (
      <div id="content">
        <div class="content_area">
          <BreadCrumb name="Dashboard"/>

          {/*========total cards===========*/}
          <div class="ttl_cards">
            <div class="row">
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="card clr1">
                  <div class="icon">
                    <i class="fa fa-user-plus" aria-hidden="true"></i>
                  </div>
                  <div class="number">
                    <span>26</span>
                  </div>
                  <div class="ttl">
                    <p>Total Registration</p>
                  </div>
                  <a href="javascript:;">View Detail <i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></a>
                </div>
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="card clr2">
                  <div class="icon">
                    <i class="fa fa-user" aria-hidden="true"></i>
                  </div>
                  <div class="number">
                    <span>12</span>
                  </div>
                  <div class="ttl">
                    <p>Total User</p>
                  </div>
                  <a href="javascript:;">View Detail <i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></a>
                </div>
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="card clr3">
                  <div class="icon">
                    <i class="fa fa-users" aria-hidden="true"></i>
                  </div>
                  <div class="number">
                    <span>124</span>
                  </div>
                  <div class="ttl">
                    <p>Total Subscription</p>
                  </div>
                  <a href="javascript:;">View Detail <i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></a>
                </div>
              </div>
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="card clr4">
                  <div class="icon">
                    <i class="fa fa-inr" aria-hidden="true"></i>
                  </div>
                  <div class="number">
                    <span>13</span>
                  </div>
                  <div class="ttl">
                    <p>Total Revenue</p>
                  </div>
                  <a href="javascript:;">View Detail <i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></a>
                </div>
              </div>
            </div>
            <div class="clearfix"></div>
          </div>

          {/*========table===========*/}

        </div>

      </div>
    );
  }
}

export default Authentication(Home);
