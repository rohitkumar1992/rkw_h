
import React from 'react';
import ReactDOM from 'react-dom';
import ReactJWPlayer from 'react-jw-player';
import $ from 'jquery';
import ActivityLoader from 'react-loader-spinner';
const modalRoot=document.getElementById('portal_modal');

const Modal =(props)=>{
  // console.log(props.result)
  return ReactDOM.createPortal(
      <div className={props.modalType=="seller_info"} style={{
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
      {(props.modalType=="seller_info") && <div class="modal-dialog sellList ordr_detl" role="document" style={{width:500}}>
      <div class="modal-content">
        <div class="modal-header text-center">
        {/*<h4 class="modal-title">Seller Description ({props.result.Accountid})</h4>*/}
        {/*<h4 class="modal-title">Transcoding Video Information</h4>*/}
          <button type="button" class="close" onClick={()=>{$("#portal_modal").removeClass("show");props.onChange()}}>&times;</button>
        </div>

       {/*<div class="vd_info_desc">
          <div class="box l">
            <div class="img_box">
              <img src={props.result.profile_pic} alt="" />
            </div>
            <div class="vd_b">
              <ReactJWPlayer
              style={{backgroundColor:'grey'}}

              playerId='jw-player'
              image=''
              playerScript='https://content.jwplatform.com/libraries/jvJ1Gu3c.js'
              file='https://res.cloudinary.com/deyonsykf/video/upload/v1578564969/videos/transcoding1_sb52gv.mp4'
              aspectRatio="16:9"
              isAutoPlay={true}
              controls={true}
              repeat="true"
                customProps={{
                  controls: true,
                  repeat: true,
                  stretching: 'fill',
                  preload: 'auto',
                  volume: 100,
                  width: '100%',
                  height: '100%',
              }}
              />
            </div>
            <div class="buttons">
              <button type="button" class="btn btndefault">Download</button>
            </div>
          </div>
          <div class="box r">
            <ul class="vd_info_list">
              <li>
                <p><span>Display Name :</span> <span class="vl">{props.result.display_name}</span></p>
              </li>
              <li>
                <p><span>User Id :</span> <span class="vl">{props.result.user_id}</span></p>
              </li>
              <li>
                <p><span>Phone Number :</span> <span class="vl">{props.result.phone_number}</span></p>
              </li>
              <li>
                <p><span>Company Info :</span> <span class="vl">{props.result.company_info}</span></p>
              </li>
              <li>
                <p><span>Account Id :</span> <span class="vl">{props.result.Accountid}</span></p>
              </li>
              <li>
                <p><span>Bank Name :</span> <span class="vl">{props.result.bank_name}</span></p>
              </li>
              <li>
                <p><span>Account Number :</span> <span class="vl">{props.result.account_number}</span></p>
              </li>
              <li>
                <p><span>Account Holder Name :</span> <span class="vl">{props.result.account_holder_name}</span></p>
              </li>
              <li>
                <p><span>IFSC Code :</span> <span class="vl">{props.result.ifsc_code}</span></p>
              </li>
              <li>
                <p><span>Pancard :</span> <span class="vl">{props.result.pancard}</span></p>
              </li>
              <li>
                <p><span>Aadharcard :</span> <span class="vl">{props.result.aadharcard}</span></p>
              </li>
              <li>
                <p><span>Created At :</span> <span class="vl">{props.result.created_at}</span></p>
              </li>
              <li>
                <p><span>Country :</span> <span class="vl">{props.result.country}</span></p>
              </li>
              <li>
                <p><span>City :</span> <span class="vl">{props.result.city}</span></p>
              </li>
              <li>
                <p><span>Pincode :</span> <span class="vl">{props.result.pincode}</span></p>
              </li>
              <li>
                <p><span>Message :</span> <span class="vl">{props.result.msg}</span></p>
              </li>
              <li class="fw">
                <p><span>Address :</span> <span class="vl">{props.result.address}</span></p>
              </li>
            </ul>
            <ul class="vd_info_list">
              <li>
                <p><span>Request ID :</span> <span class="vl">53453453453r</span></p>
              </li>
              <li>
                <p>
                  <span>Preset :</span> 
                  <a href="javascript:" class="btn btn_catlist">One</a> 
                  <a href="javascript:" class="btn btn_catlist">two</a>
                </p>
              </li>
              <li>
                <p><span>Price :</span> <span class="vl"><i class="fa fa-rupee"></i>2000</span></p>
              </li>
              <li>
                <p><span>Pack Type :</span> <span class="vl">Basic</span></p>
              </li>
              <li>
                <p>
                  <span>Aspect Ratio :</span> 
                  <a href="javascript:" class="btn btn_catlist">14:3</a> 
                  <a href="javascript:" class="btn btn_catlist">15:3</a>
                </p>
              </li>
              <li>
                <p>
                  <span>Container :</span> 
                  <a href="javascript:" class="btn btn_catlist">one</a> 
                  <a href="javascript:" class="btn btn_catlist">twt</a>
                </p>
              </li>

              <li>
                <p><span>Order ID :</span> <span class="vl">md8382j3</span></p>
              </li>
            </ul>
          </div>
        </div>*/}

        <div class="order_d_p">
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
        </div>
      </div>
      </div>
    }
      {(props.modalType=="vendor_info") && <div class="modal-dialog sdvd_info" role="document" style={{width:500}}>
      <div class="modal-content">
      <div class="modal-header text-center">
      <h4 class="modal-title">Vendor Description ({props.result.Accountid})</h4>
        <button type="button" class="close" onClick={()=>{$("#portal_modal").removeClass("show");props.onChange()}}>&times;</button>
      </div>

        <div class="vd_info_desc">
          <div class="box l">
            <div class="img_box">
              <img src={props.result.profile_pic} alt="" />
            </div>
          </div>
          <div class="box r">
            <ul class="vd_info_list">
              <li>
                <p><span>Display Name :</span> <span class="vl">{props.result.display_name}</span></p>
              </li>
              <li>
                <p><span>User ID :</span> <span class="vl">{props.result.user_id}</span></p>
              </li>
              <li>
                <p><span>First Name :</span> <span class="vl">{props.result.fname}</span></p>
              </li>
              <li>
                <p><span>Last Name :</span> <span class="vl">{props.result.lname}</span></p>
              </li>
              <li>
                <p><span>Phone Number :</span> <span class="vl">{props.result.phone_number}</span></p>
              </li>
              <li>
                <p><span>Company Info :</span> <span class="vl">{props.result.company_info}</span></p>
              </li>
              <li>
                <p><span>Account Id :</span> <span class="vl">{props.result.Accountid}</span></p>
              </li>
              <li>
                <p><span>Bank Name :</span> <span class="vl">{props.result.bank_name}</span></p>
              </li>
              <li>
                <p><span>Account Number :</span> <span class="vl">{props.result.account_number}</span></p>
              </li>
              <li>
                <p><span>Account Holder Name :</span> <span class="vl">{props.result.account_holder_name}</span></p>
              </li>
              <li>
                <p><span>IFSC Code :</span> <span class="vl">{props.result.ifsc_code}</span></p>
              </li>
              <li>
                <p><span>Pancard :</span> <span class="vl">{props.result.pancard}</span></p>
              </li>
              <li>
                <p><span>Aadharcard :</span> <span class="vl">{props.result.aadharcard}</span></p>
              </li>
              <li>
                <p><span>Country :</span> <span class="vl">{props.result.country}</span></p>
              </li>
              <li>
                <p><span>State :</span> <span class="vl">{props.result.state}</span></p>
              </li>
              <li>
                <p><span>City :</span> <span class="vl">{props.result.city}</span></p>
              </li>
              <li>
                <p><span>Pincode :</span> <span class="vl">{props.result.pincode}</span></p>
              </li>
              <li>
                <p><span>Created At :</span> <span class="vl">{props.result.created_at}</span></p>
              </li>
              <li>
                <p><span>Status :</span> <span class="vl">{props.result.status}</span></p>
              </li>
              <li>
                <p><span>Message :</span> <span class="vl">{props.result.msg}</span></p>
              </li>
              <li>
                <p><span>Personal Website :</span> <span class="vl">{props.result.personal_website}</span></p>
              </li>
              <li class="fw">
                <p><span>Address :</span> <span class="vl">{props.result.address}</span></p>
              </li>
              <li class="fw">
                <p><span>Description :</span> <span class="vl">{props.result.description}</span></p>
              </li>
            </ul>
          </div>
        </div>
      </div>
        </div>}
          </div>,modalRoot
    )
}
export default Modal;
