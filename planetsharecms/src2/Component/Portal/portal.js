
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
      {(props.modalType=="seller_info") && <div class="modal-dialog sellList" role="document" style={{width:500}}>
      <div class="modal-content">
        <div class="modal-header text-center">
          <h4 class="modal-title">Transcoding</h4>
          <button type="button" class="close" onClick={()=>{$("#portal_modal").removeClass("show");props.onChange()}}>&times;</button>
        </div>

        <div class="vd_info_desc">
          <div class="box l">
            {/*<div class="img_box">
              <img src={props.result.profile_pic} alt="" />
            </div>
            */}
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
          {/*<div class="box r">
            <ul class="vd_info_list">
              <li>
                <p><span>Display Name :</span> <span class="vl">{props.result.display_name}</span></p>
              </li>
              <li>
                <p><span>Phone Number :</span> <span class="vl">{props.result.phone_number}</span></p>
              </li>
              <li>
                <p><span>Account Id :</span> <span class="vl">{props.result.Accountid}</span></p>
              </li>
              <li>
                <p><span>Company Info :</span> <span class="vl">{props.result.company_info}</span></p>
              </li>

              <li>
                <p><span>Address :</span> <span class="vl">{props.result.address}</span></p>
              </li>
              <li>
                <p><span>Pincode :</span> <span class="vl">{props.result.pincode}</span></p>
              </li>
            </ul>
          </div>*/}
        </div>
      </div>
        </div>}
      {(props.modalType=="vendor_info") && <div class="modal-dialog" role="document" style={{width:500}}>
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
                <p><span>Phone Number :</span> <span class="vl">{props.result.phone_number}</span></p>
              </li>
              <li>
                <p><span>Account Id :</span> <span class="vl">{props.result.Accountid}</span></p>
              </li>
              <li>
                <p><span>Company Info :</span> <span class="vl">{props.result.company_info}</span></p>
              </li>

              <li>
                <p><span>Address :</span> <span class="vl">{props.result.address}</span></p>
              </li>
              <li>
                <p><span>Pincode :</span> <span class="vl">{props.result.pincode}</span></p>
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
