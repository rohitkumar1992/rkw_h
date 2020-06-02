import React,{useEffect} from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import cogoToast from 'cogo-toast';
import $ from 'jquery'
const responsive={
  320:{items:1},
  480:{items:1},
  600:{items:1},
  960:{items:1},
  1200:{items:1}
  }
class Order_detail extends React.Component{
  componentDidMount(){

  }
  render()
  {
    return(
      <div class="top_div">
        <section class="inner_cont order_l">
        <article class="order_l_page">
            <div class="container">
                <div class="main_cont">
                    <div class="box">
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
                                    <h3>Payment Method</h3>
                                    <p>Paytm</p>
                                    <p>
                                        <img src="images/card_pay.gif" alt="" />
                                        <span>*****3423</span>
                                    </p>
                                </div>
                                <div class="colm r">
                                    <h3>Order Summery</h3>
                                    <div class="lst">
                                        <p><span>Order Id :</span> <span>48348905904</span></p>
                                        <p><span>Pack Type :</span> <span>Basic</span></p>
                                        <p><span>Price :</span> <span><i class="fa fa-rupee"></i>4200</span></p>
                                        <p class="ttl"><span>Total Price :</span> <span><i class="fa fa-rupee"></i>4200</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="order_list">
                            <div class="item">
                                <div class="order_info">
                                    <div class="col placed">
                                        <p>Order Placed <span class="sb">: Success</span></p>
                                        <p>6 November 2019</p>
                                    </div>
                                    <div class="col total">
                                        <p>Total</p>
                                        <p><i class="fa fa-inr" aria-hidden="true"></i><span>41,683.36</span></p>
                                    </div>
                                    <div class="col orderid">
                                        <p><span>Order Id: #405-0318434-7645972</span> <a href="javascript:">Order Detail</a></p>
                                    </div>
                                </div>
                                <div class="prod_summry">
                                    <div class="prod_cont">
                                        <div class="img">
                                            <a href="javascript:;">
                                                <img src="images/cart_img.jpg" alt="" />
                                            </a>
                                        </div>
                                        <div class="prod_info">
                                            <p class="ser"><span>Service Name :</span> <span>Dubbing</span></p>
                                            <p><span>Vendor Name :</span> <span>Madhulika</span></p>    
                                        </div>
                                    </div>
                                    <div class="prod_price">
                                        <div class="price">
                                            <i class="fa fa-inr" aria-hidden="true"></i>
                                            <span>41,683.36</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="order_info">
                                    <div class="col placed">
                                        <p>Order Placed <span class="sb">: Success</span></p>
                                        <p>6 November 2019</p>
                                    </div>
                                    <div class="col total">
                                        <p>Total</p>
                                        <p><i class="fa fa-inr" aria-hidden="true"></i><span>41,683.36</span></p>
                                    </div>
                                    <div class="col orderid">
                                        <p><span>Order Id: #405-0318434-7645972</span> <a href="javascript:">Order Detail</a></p>
                                    </div>
                                </div>
                                <div class="prod_summry">
                                    <div class="prod_cont">
                                        <div class="img">
                                            <a href="javascript:;">
                                                <img src="images/cart_img.jpg" alt="" />
                                            </a>
                                        </div>
                                        <div class="prod_info">
                                            <p class="ser"><span>Service Name :</span> <span>Dubbing</span></p>
                                            <p><span>Vendor Name :</span> <span>Madhulika</span></p>
                                        </div>
                                    </div>
                                    <div class="prod_price">
                                        <div class="price">
                                            <i class="fa fa-inr" aria-hidden="true"></i>
                                            <span>41,683.36</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <aside class="sidebar_view sticky-top">
                    <div class="side_playlist play_list dubng_f">
                        <video autoplay muted controls>
                            <source src="images/video/transcoding.mp4" type="video/mp4" />
                            <source src="images/video/transcoding.ogg" type="video/ogg" />
                        </video>

                        <div class="appr_vd">
                            <video autoplay muted controls>
                                <source src="images/video/transcoding.mp4" type="video/mp4" />
                                <source src="images/video/transcoding.ogg" type="video/ogg" />
                            </video>
                            <div class="d_btn">
                                <button type="button" class="btn btndefault">Download</button>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        </article>
        <div class="clearfix"></div>
    </section>
      </div>
    )
}
}
export default Order_detail;
