
import React from 'react';
import ReactDOM from 'react-dom';
import ReactJWPlayer from 'react-jw-player';
import $ from 'jquery';
import {TAG,SERVICEUPLOAD} from '../../../url';
import Resumable from 'resumablejs';
import Progress from '../../ServiceUploader/progressbar';
import ActivityLoader from 'react-loader-spinner';
const modalRoot=document.getElementById('portal_modal');

const Modal =(props)=>{
  // console.log(props.result)
  return ReactDOM.createPortal(
      <div className={props.modalType=="data_description"?"vd_dsc":""} style={{
        position:'absolute',
        top:0,
        bottom:0,
        left:0,
        right:0,
        display:'grid',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'rgba(0,0,0,0.3)'
      }} >
      {props.modalType=="bidding_portal" && <div class="modal-dialog crop_img" role="document" style={{width:500}}>
          <div class="modal-content">
            <div class="modal-header text-center">

              <button type="button" class="close" onClick={()=>{$("#portal_modal").removeClass("show");props.onChange()}}>&times;</button>
            </div>
            <div class="modal-body">
              <div>
                {props.children}
              </div>

              <span id="error_msg" style={{color:'red'}}>{props.auth_err}</span>
            </div>
          </div>
        </div>}
    {(props.modalType=="data_description" && props.content_type=="image") && <div class="modal-dialog big_mdl" role="document" style={{width:500}}>
        <div class="modal-content">
          <div class="modal-header text-center">
            <button type="button" class="close" onClick={()=>{$("#portal_modal").removeClass("show");props.onChange()}}>&times;</button>
          </div>
          <div class="modal-body">
            {/*<div class="vd_info_desc rej_msg">
                  <div class="box l">
                    <div class="img_box">
                      <img src={props.result.large_thumb} alt="" />
                    </div>
                  </div>
                  <div class="box r">
                    <ul class="vd_info_list">
                      <li>
                        <p><span>Seller Name :</span> <span class="vl">{props.result.seller_name}</span></p>
                      </li>
                      <li>
                        <p><span>Request Id :</span> <span class="vl">{props.result.request_id}</span></p>
                      </li>
                      <li>
                        <p><span>Artist Name :</span> <span class="vl">{props.result.artist_name}</span></p>
                      </li>
                      <li>
                        <p><span>Title :</span> <span class="vl">{props.result.title}</span></p>
                      </li>
                      <li>
                        <p><span>Dimension :</span> <span class="vl">{props.result.dimension}</span>
                        <span>Size :</span> <span class="vl">{props.result.size} bytes</span>
                        <span>Extension :</span> <span class="vl">{props.result.extension}</span>
                        </p>
                      </li>
                      <li>
                        <p>
                          <span>Keywords :</span>
                          {props.result.keywords.split(',').map((res,key)=>{
                            return(<a href="javascript:" class="btn btn_catlist">{res}</a>)
                          })}
                        </p>
                      </li>
                      <li>
                        <p>
                          <span>Category :</span>
                          <a href="javascript:" class="btn btn_catlist">{props.result.get_image_cat.name}</a>
                        </p>
                      </li>
                      <li>
                        <p><span>Short Description :</span> <span class="vl">{props.result.short_desc}</span></p>
                      </li>
                      <li>
                        <p><span>Description :</span> <span class="vl">{props.result.description}</span></p>
                      </li>
                    </ul>
                  </div>
                  <h2>Give Rejection Message</h2>
                  <textarea placeholder="Enter rejection message"></textarea>
                  <div class="buttons text-center">
                    <button type="submit" class="btn btndefault">Submit</button>
                  </div>
            </div>*/}
            <div class="upload_cont rej_upl">
              <div class="gig_info">
                <form class="form_control" enctype="multipart/formData">
                    <h2>Upload Your Content</h2>
                    <div class="build_gal">
                        <div class="upload_area">
                        <button type="button" class="btn btn-warning" aria-label="Pause upload" id="pause-upload-btn" style={{display: "none"}}>
                            <span class="glyphicon glyphicon-pause " aria-hidden="true"></span> Pause upload
                        </button>
                        <button type="button" class="btn btn-info" aria-label="Start upload" id="start-upload-btn" style={{display: "none"}}>
                            <span class="glyphicon glyphicon-upload" aria-hidden="true"></span> Start upload
                        </button>
                          <button type="button" class="btn btn-warning" aria-label="Pause upload" id="cancel-upload-btn" style={{display: "none"}} onClick={()=>{this.props.history.push('/dashboard/seller');setTimeout(()=>this.props.history.replace('/dashboard/seller/add_asset/video'),1000);}}>
                              <span class="glyphicon glyphicon-pause " aria-hidden="true"></span> Cancel upload
                          </button>
                          <input type="hidden" id="video_id"/>
                            <ul class="browse_list mult">
                                <li>
                                    <div class="upl_box">
                                        <label for="gallery-photo-add">

                                          <div id="resumable-drop">
                                          <div id="file_upload_button" class="mt-16">
                                          <span class="fileinput-button">
                                              <i class="glyphicon glyphicon-plus"></i>
                                               <button type="button" class="btndefault fileinput-button" id="resumable-browse"   data-url={`${SERVICEUPLOAD}`}>Select Files</button>
                                          </span>
                                          </div>
                                          </div>
                                        </label>
                                         <span class="note">(.mp4,.3gp files that are at least 10Mb)</span>
                                          <Progress  />
                                         <div class="col-lg-offset-2 col-lg-12" id="progress_bar_status" style={{display:'none'}}>
                                         <p>

                                         <div id="show_percentage" ></div>
                                         </p>

                                         </div>

                                    </div>
                                </li>
                            </ul>
                            <div class="bid_form dubng_f">
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
                    <div class="buttons">
                        <button type="button" class="btndefault" id="upload_img_btn"  onClick={()=>this.redirectHandler()}>Next</button>
                    </div>
                </form>
              </div>
            </div>
            <span id="error_msg" style={{color:'red'}}></span>
            {/*<div class="order_d_p">
              <h2>Order Details</h2>
              <div class="ordr_i">
                  <div class="colm">
                      <p><span>Order On</span> 10 March 2020</p>
                      <p><span>Order Id</span> #405-0318434-7645972</p>
                  </div>
                  <div class="colm">
                      <button type="button" class="btn btndefault">Approved</button>
                  </div>
              </div>
              <div class="order_det_box">
                  <div class="order_detl">
                      <div class="colm l">
                          <h3>Order Placed</h3>
                          <p><span>Request Id :</span> 48348905904</p>
                          <p class="ser"><span>Service :</span> Dubbing</p>
                          <p><span>Vendor Name :</span> Madhulika</p>
                          <p><span>Languages :</span> Hindi, English</p>
                          <p><span>Closed Option :</span> Yes</p>
                          <p><span>Dubbing For :</span> Movie</p>
                      </div>
                      <div class="colm m">
                          <h3>Order Summery</h3>
                          <div class="lst">
                              <p><span>Pack Type :</span> <span>Basic</span></p>
                              <p><span>Price :</span> <span><i class="fa fa-rupee"></i>4200</span></p>
                              <p class="ttl"><span>Total Price :</span> <span><i class="fa fa-rupee"></i>4200</span></p>
                          </div>
                          <hr></hr>
                          <h3>Payment Method</h3>
                          <p>Paytm</p>
                          <p>
                              <img src="images/card_pay.gif" alt="" />
                              <span>*****3423</span>
                          </p>
                      </div>
                      <div class="colm r">
                          <video autoplay muted controls>
                              <source src="images/video/transcoding.mp4" type="video/mp4" />
                              <source src="images/video/transcoding.ogg" type="video/ogg" />
                          </video>
                      </div>
                  </div>
              </div>
              <div class="ordr_vd_sc">
                  <div class="appr_vd">
                      <h3 data-toggle="collapse" data-target="#dub_vdo"><span>Dubbed Video</span> <i class="fa fa-angle-down"></i></h3>
                      <div class="dub_vdo collapse" id="dub_vdo">
                        <div class="vd_o">
                          <video autoplay muted controls>
                              <source src="images/video/transcoding.mp4" type="video/mp4" />
                              <source src="images/video/transcoding.ogg" type="video/ogg" />
                          </video>
                          <div class="d_btn">
                              <button type="button" class="btn btndefault">Download</button>
                          </div>
                        </div>
                        <div class="nores">
                          <h2>No result</h2>
                        </div>
                      </div>
                  </div>
              </div>
            </div>*/}
          </div>
        </div>
      </div>}
    {(props.modalType=="data_description" && props.content_type=="video") && <div class="modal-dialog" role="document" style={{width:500}}>
        <div class="modal-content">
          <div class="modal-header text-center">
            <button type="button" class="close" onClick={()=>{$("#portal_modal").removeClass("show");props.onChange()}}>&times;</button>
          </div>
          <div class="modal-body">
            <div class="vd_info_desc v_d">
              <div class="box l">
                <div class="img_box">
                  <img src={props.result.large_thumb} alt="" />
                </div>
              </div>
              <div class="box r">
                {props.content_type=="video" && <ReactJWPlayer
                style={{backgroundColor:'grey'}}

                playerId='jw-player'
                image={`${props.result.large_thumb}`}
                playerScript='https://content.jwplatform.com/libraries/jvJ1Gu3c.js'
                file={props.result.demo_url}
                aspectRatio="16:9"
                isAutoPlay={false}
                controls={true}
                repeat="true"
                  customProps={{
                    controls: true,
                    repeat: true,
                    stretching: 'fill',
                    preload: 'auto',
                    volume: 30,
                    width: '100%',
                    height: '100%',
                }}
                />}
              </div>
            </div>
            <div class="vd_info_desc v_d">
              <div class="cont_box">
                <ul class="vd_info_list">
                  <li>
                    <p><span>Video Title :</span> <span class="vl">{props.result.title}</span></p>
                  </li>
                  <li>
                    <p><span>Seller Name :</span> <span class="vl">{props.result.seller_name}</span></p>
                  </li>
                  <li>
                    <p><span>Request Id :</span> <span class="vl">{props.result.request_id}</span></p>
                  </li>
                  <li>
                    <p><span>Artist Name :</span> <span class="vl">{props.result.artist_name}</span></p>
                  </li>
                  <li>
                    <p>
                      <span>Producer :</span>
                      {props.result.producer.split(',').map((res,key)=>{
                        return(<a href="javascript:" class="btn btn_catlist">{res}</a>)
                      })}
                    </p>
                  </li>
                  <li>
                    <p>
                      <span>Director :</span>
                      {props.result.director.split(',').map((res,key)=>{
                        return(<a href="javascript:" class="btn btn_catlist">{res}</a>)
                      })}
                    </p>
                  </li>
                  <li>
                    <p>
                      <span>Genre :</span>
                      {props.result.genre.split(',').map((res,key)=>{
                        return(<a href="javascript:" class="btn btn_catlist">{res}</a>)
                      })}
                    </p>
                  </li>
                  <li>
                    <p>
                      <span>Cast :</span>
                      {props.result.cast.split(',').map((res,key)=>{
                        return(<a href="javascript:" class="btn btn_catlist">{res}</a>)
                      })}
                    </p>
                  </li>
                  <li>
                    <p>
                      <span>Keywords :</span>
                      {props.result.keywords.split(',').map((res,key)=>{
                        return(<a href="javascript:" class="btn btn_catlist">{res}</a>)
                      })}
                    </p>
                  </li>
                  <li>
                    <p>
                      <span>Category :</span>
                      <a href="javascript:" class="btn btn_catlist">{props.result.get_video_cat.name}</a>
                    </p>
                  </li>
                  <li class="sort_desc">
                    <p><span>Short Description :</span> <span class="vl">{props.result.short_desc}</span></p>
                  </li>
                  <li class="long_desc">
                    <p><span>Description :</span> <span class="vl">{props.result.description}</span></p>
                  </li>
                </ul>
              </div>
            </div>
            <span id="error_msg" style={{color:'red'}}></span>
          </div>
        </div>
      </div>}

          </div>,modalRoot
    )
}
export default Modal;
