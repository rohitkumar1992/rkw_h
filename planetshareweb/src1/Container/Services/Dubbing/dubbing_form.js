import React from 'react';
import Upload from '../../ServiceUploader/serviceupload';
import LoadingGif from '../../../Component/Loader/loading_gif';
import axios from 'axios';
import $ from 'jquery'
import Not_Found from '../../../Component/not_found/not_found';
import {Link,withRouter} from "react-router-dom";
import { History } from "react-router"
import Resumable from 'resumablejs';
import Player from '../../../Component/player';
import Authentication from '../../Authentication/Authentication';
import cogoToast from 'cogo-toast';
import {TAG,SERVICEFORMSTATUCHECK,SAVETRANSCODEFORM,VENDOR_ID} from '../../../url'
import { ToastContainer, toast,cssTransition} from 'react-toastify';
import DropDown from '../../../Component/dropdown.js';
const presetList=[{"label":"1080p","value":"1080",'price':150},{"label":"720p","value":"720",'price':200}]
const containerList=[{"label":"Auto","value":"Auto"},{"label":"350*450","value":"250*450"}]
const aspectList=[{"label":"16:9","value":"16:9"},{"label":"16:12","value":"16:12"}]
class DubbingForm extends React.Component{
  state={isLoading:true,loading_msg:'Please Wait',not_found:false,video_id:0,video_data:[],presetVal:[],aspectVal:[],containerVal:[],price:0}
  componentDidMount()
  {
  //   this.setState({video_id:this.props.match.params.video_id},function()
  // {
  //     this.getData();
  // })
    $('#file_upload').change(function() {
      var i = $(this).prev('button').clone();
      var file = $('#file_upload')[0].files[0].name;
      $(this).prev('button').text(file);
    });
  }
  getData=()=>{
    axios.post(SERVICEFORMSTATUCHECK,{'user_id':localStorage.getItem('user_id'),'tag':TAG,service_tag:'transcode',video_id:this.state.video_id,'vendor_id':VENDOR_ID},{
    headers: {
     'Authorization':"Bearer " + localStorage.getItem('planetshare_web_token'),
    }
  }).then((res)=>{
    if(res.data.success==1)
    {
      var response=res.data
      this.setState({video_data:response.data},function()
    {
      setTimeout(()=>this.setState({isLoading:true}),1000)
    })
    }
    else {
      this.setState({not_found:true})
    }
  }).catch((error)=>{
    this.setState({not_found:true})
  })
  }
  componentDidUpdate()
  {
    if(this.props.match.params.video_id!=this.state.video_id)
    {
      this.setState({video_id:this.props.match.params.video_id,not_found:false,isLoading:false},function()
    {
        this.getData();
    })
    }
  }
  presetSelect=(e)=>
  {
  var sum=0
    for(var j=0;j<e.value.length;j++)
    {
      var result=presetList.filter((res)=>res.value==e.value[j]);
      for(var i=0;i<result.length;i++)
      {
        sum+=result[i].price
      }
    }
  this.setState({presetVal:e.value,price:sum})
  }
  SaveForm=()=>{
    axios.post(SAVETRANSCODEFORM,{'user_id':localStorage.getItem('user_id'),'tag':TAG,video_id:this.state.video_id,'vendor_id':VENDOR_ID,'preset':this.state.presetVal,'container':this.state.containerVal,'aspect_ratio':this.state.aspectVal,'price':this.state.price},{
    headers: {
     'Authorization':"Bearer " + localStorage.getItem('planetshare_web_token'),
    }
  }).then((res)=>{
    if(res.data.success==1)
    {
      var response=res.data
      this.setState({isLoading:false},function()
    {
      setTimeout(()=>this.props.history.push(`/address_service/transcode/${response.transcode_id}`),1000)
    })
    }
    else
    {
      cogoToast.error('Something Went Wrong',{position:'bottom-center'})
      this.setState({isLoading:true})
    }
  }).catch((error)=>{
    this.setState({notfound:true})
  })
  }
  render()
  {
    const {loading_msg,isLoading,not_found,video_data,price}=this.state
    if(!not_found)
    {
          if(isLoading)
          {
          return(<section class="inner_cont upload_cont dubForm">
        <div class="container">
        
            <div class="upl_ser_sec">
              <form action="javascript:;">
                <div class="main_cont">
                    <article class="gig_info">
                            <h2>Fill Video Details</h2>
                            <div class="build_gal">
                                <div class="upload_area">
                                    <div class="bid_form dubng_f">
                                        <div class="fields">
                                            <div class="field">
                                                <label>Pack Type <span  data-hint="Specify whether the Listing is targeted at the General Audience or Specific Audiences. You can specify several Specific Audiences."><i class="fa fa-question-circle-o" aria-hidden="true"></i></span></label>
                                                <DropDown list={presetList} optionLabel="" filterPlaceholder="Select Preset"  placeholder="Select Preset" selectVal={this.state.presetVal} onChangeSelect={this.presetSelect} required="true" class="inputbox"/>
                                            </div>
                                        </div>
                                        <div class="fields">
                                            <div class="field">
                                                <label>Languages <span data-hint="Specify whether the Listing is targeted at the General Audience or Specific Audiences. You can specify several Specific Audiences."><i class="fa fa-question-circle-o" aria-hidden="true"></i></span></label>
                                                <DropDown list={containerList} optionLabel="" filterPlaceholder="Select Container"  placeholder="Select Container" selectVal={this.state.containerVal} onChangeSelect={(e)=>this.setState({containerVal:e.value})} required="true" class="inputbox"/>
                                            </div>
                                        </div>
                                        <div class="fields">
                                          <div class="field">
                                            <label>Clear Catching</label>
                                            <div class="inputbox">
                                              <label class="checkbox">
                                                Yes
                                                <input type="checkbox" />
                                                <span><i class="fa fa-check-square"></i></span>
                                              </label>
                                            </div>
                                          </div>
                                        </div>
                                        <div class="fields">
                                          <div class="field">
                                            <label>Dubbing required for<sup>*</sup></label>
                                            <div class="inputbox">
                                              <label class="checkbox">
                                                Movie
                                                <input type="checkbox" />
                                                <span><i class="fa fa-check-square"></i></span>
                                              </label>
                                              <label class="checkbox">
                                                Documentory
                                                <input type="checkbox" />
                                                <span><i class="fa fa-check-square"></i></span>
                                              </label>
                                              <label class="checkbox">
                                                Animation
                                                <input type="checkbox" />
                                                <span><i class="fa fa-check-square"></i></span>
                                              </label>
                                              <label class="checkbox">
                                                E-learning
                                                <input type="checkbox" />
                                                <span><i class="fa fa-check-square"></i></span>
                                              </label>
                                              <label class="checkbox">
                                                Other
                                                <input type="checkbox" />
                                                <span><i class="fa fa-check-square"></i></span>
                                              </label>
                                            </div>
                                          </div>
                                        </div>
                                        <div class="fields">
                                          <div class="field">
                                            <label>Comment <span data-hint="Specify whether the Listing is targeted at the General Audience or Specific Audiences. You can specify several Specific Audiences."><i class="fa fa-question-circle-o" aria-hidden="true"></i></span></label>
                                              <div class="inputbox">
                                                <textarea placeholder="add comment"></textarea>
                                              </div>
                                          </div>
                                        </div>
                                        <div class="fields">
                                          <div class="field">
                                            <label>Scripting</label>
                                            <div class="inputbox">
                                              <label class="checkbox">
                                                Yes
                                                <input type="checkbox" />
                                                <span><i class="fa fa-check-square"></i></span>
                                              </label>
                                              <label class="checkbox">
                                                No
                                                <input type="checkbox" />
                                                <span><i class="fa fa-check-square"></i></span>
                                              </label>
                                            </div>
                                          </div>
                                        </div>
                                        <div class="fields">
                                          <div class="inputbox upl_area">
                                            <div class="upl_box">
                                              <label for="file_upload">
                                                <button class="btndefault" type="button">Select file</button>
                                                <input type="file" name="image" multiple="" id="file_upload" />
                                              </label>
                                              <span class="note">(upload all type of files)</span>
                                            </div>
                                          </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                        <div class="clearfix"></div>
                    </article>
                </div>
                <aside class="sidebar_view sticky-top">
                    <div class="side_playlist play_list dubng_f">
                        <h2></h2>
                        <video autoplay muted controls>
                            <source src="images/video/transcoding.mp4" type="video/mp4" />
                            <source src="images/video/transcoding.ogg" type="video/ogg" />
                        </video>
                        <div class="price_box">
                            <p>
                            <span class="ttl">Total Duration</span>
                            <span class="val">00:00:00</span>
                            </p>
                            <p>
                              <span class="ttl">Price</span>
                              <span class="val"><i class="fa fa-inr"></i>{price}</span>
                            </p>
                        </div>
                        <div class="order_det">
                            <div class="orderprice">
                                <h3>
                                    Order Details
                                    <span><i class="fa fa-inr" aria-hidden="true"></i>100</span>
                                </h3>
                            </div>
                            <div class="desc">
                                <p>General dubbing: Countries using a full-cast dubbing.</p>
                            </div>
                            <div class="pack_cont">
                                <div class="del_time">
                                    <div class="delivry"><i class="fa fa-clock-o" aria-hidden="true"></i> 2 Days Delivery</div>
                                    <div class="revision"><i class="fa fa-repeat" aria-hidden="true"></i> 2 Revision</div>
                                </div>
                                <div class="features">
                                    <h4 data-toggle="collapse" data-target="#features_list">What's Included <i class="fa fa-angle-down" aria-hidden="true"></i></h4>
                                    <ul class="features_list" id="features_list" style={{display:"none"}}>
                                        <li>Design Customization</li>
                                        <li>Content Upload</li>
                                        <li class="noinclude">Responsive Design</li>
                                    </ul>
                                </div>
                            </div>
                            {/*<button type="submit" class="btn btn_cont">Continue(<i class="fa fa-inr" aria-hidden="true"></i>{gig_desc.basic_pack_price})</button>
                            <a href="javascript:" class="compr_pckg">Compare Packages</a>*/}
                        </div>
                        <div class="buttons text-center">
                            <button type="button" class="btndefault" disabled={(this.state.presetVal.length>0 && this.state.containerVal.length>0 && this.state.aspectVal.length>0)?false:true} onClick={()=>this.SaveForm()}>Make Payment</button>
                        </div>
                    </div>
                </aside>
              </form>
            </div>
            
        </div>
        <div class="clearfix"></div>
    </section>)
        }
        else
         {
          return(<LoadingGif message={loading_msg}/>);
         }
    }
    else
    {
      return(<Not_Found/>)
    }
    }
  }
export default DubbingForm
