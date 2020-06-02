import React,{useEffect} from 'react';
import $ from 'jquery';
import {Link} from 'react-router-dom';
import cogoToast from 'cogo-toast';
class Archiving extends React.Component{
  componentDidMount(){
  	this.setState({url_id:this.props.location.hash},function(){this.ScrollTo()});
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
  }
  ScrollTo=()=>{
    var myEle = $(this.state.url_id).html();
    if(myEle)
    {
    $('html, body').animate({
      scrollTop: ($(`${this.state.url_id}`).offset().top-90)
    }, 500);
   }
   else {
     this.setState({not_found:true})
   }
  }
  componentDidUpdate()
  {
    if(this.props.location.hash!=this.state.url_id)
    {
        this.setState({url_id:this.props.location.hash,not_found:false},function(){this.ScrollTo()});
    }
  }
  render()
  {
    return(
      	<div class="top_div">
	      	<section class="ser_banner archvng">
	        	<div class="container">
		            <div class="caption">
		                <h2>Archiving</h2>
		            </div>
	        	</div>
	        	<div class="clearfix"></div>
	      	</section>
	      	<section class="inner_cont archv_ser">
		        <div class="trans_layout ovrv">
		            <div class="container">
		                <h2>Digital Media Operations: <span>Archiving</span></h2>
		                <div class="cont_part">
		                    <p>All industries, including the media industry, are faced with the question of archiving and storing digital data material – and finding the right solution. While archiving appears to be a must for modern-day media-related companies, getting an experienced Archiving Services provider is not so easy. Archiving and media gathering needs a robust infrastructure for digital file distribution and content searchability.</p>
		                    <p>Planetshare, a global leader in the media services industry, has a vast online archiving capacity to suit a majority of your media gathering needs. Also, we have stupendous offline media storage space to take care of most of your offline media gathering requirements. This enormous storage capacity offers you a very competitive cost per hour of archiving for your projects while preserving them with no compromise on quality.</p>
		                </div>
		            </div>
		        </div>
		        <div class="trans_layout arch_cont">
		            <div class="container">
		                <h2>Archiving Services</h2>
		                <div class="cont_part">
		                    <ul class="arch_lnk">
		                    	<li>
		                    		<Link to={{pathname:"/web/services/archiving", hash:"#online_archv"}}>Online</Link>
		                    	</li>
		                    	<li>
		                    		<Link to={{pathname:"/web/services/archiving", hash:"#nearline_archv"}}>Nearline</Link>
		                    	</li>
		                    	<li>
		                    		<Link to={{pathname:"/web/services/archiving", hash:"#offline_archv"}}>Offline</Link>
		                    	</li>
		                    </ul>
		                </div>
		            </div>
		        </div>

		        <div class="vcvd_list_box">
	                <div class="container">
	                    <div class="vc_cont_box vcvd" id="online_archv">
	                        <div class="cont_area">
	                            <div class="cont_desc drl">
	                                <div class="box l">
	                                    <div class="desc">
	                                        <h2 class="w_head_icon">
	                                            <div class="img">
	                                                <img src="images/vc_img_timedaudio.png" alt="" />
	                                            </div>
	                                            <div class="h_desc">
	                                                Online <span>Archiving</span>
	                                            </div>
	                                        </h2>
	                                        <p>Digital requirements need digital solutions! Our server-based storage is well-equipped to handle workflows demanding instant availability of short lifetime media content, such as media post-production services, web infrastructures and Video on Demand (VoD) portals.</p>
	                                        <p>Your media content is secured with us thanks to our smart and highly-advanced archiving systems that are designed to accommodate a variety of necessities.</p>
	                                        <p>The online archiving play an essential role during the complete workflow of Planehsare's Digital Media Operations services.</p>
	                                    </div>
	                                </div>
	                                <div class="box r">
	                                    <div class="img_box_ar">
	                                    	<img src="images/ser_archv_1.jpg" alt="" />
	                                    </div>
	                                </div>
	                            </div>
	                        </div>
	                    </div>

	                    <div class="divider"><img src="images/icon_boxshadow.png" alt="" /></div>

	                    <div class="vc_cont_box vcvd" id="nearline_archv">
	                        <div class="cont_area">
	                            <div class="cont_desc">
	                                <div class="box l">
	                                    <div class="desc">
	                                        <h2 class="w_head_icon">
	                                            <div class="img">
	                                                <img src="images/vc_img_lip.png" alt="" />
	                                            </div>
	                                            <div class="h_desc">
	                                                Nearline <span>Archiving</span>
	                                            </div>
	                                        </h2>
	                                        <p>Sometimes we have a situation wherein we may not require an archiving solution which is fully digital or something that is based on completely an offline method. For working situations with proposed restore or before playout, we have a comprehensive archiving platform to deal with almost all environments.</p>
	                                        <p>Along with high-speed digital access to the archives or storage and massive media content gathering capacity, our archiving system also offers high-security features for data, similar to those of various other industries or sectors such as the banking industry. </p>
	                                    </div>
	                                </div>
	                                <div class="box r">
	                                    <div class="img_box_ar">
	                                    	<img src="images/ser_archv_2.jpg" alt="" />
	                                    </div>
	                                </div>
	                            </div>
	                        </div>
	                    </div>

	                    <div class="divider"><img src="images/icon_boxshadow.png" alt="" /></div>

	                    <div class="vc_cont_box vcvd" id="offline_archv">
	                        <div class="cont_area">
	                            <div class="cont_desc drl">
	                                <div class="box l">
	                                    <div class="desc">
	                                        <h2 class="w_head_icon">
	                                            <div class="img">
	                                                <img src="images/vc_img_phrase.png" alt="" />
	                                            </div>
	                                            <div class="h_desc">
	                                                Offline <span>Archiving</span>
	                                            </div>
	                                        </h2>
	                                        <p>While we have travelled a long way as for as doing everything digitally is concerned, there still lies a great degree of reliance on offline means when it comes to media storage of archives. For the bulk content that you don’t need instantly, we have offline storage means to cater to your content gathering needs.  </p>
	                                    </div>
	                                </div>
	                                <div class="box r">
	                                    <div class="img_box_ar">
	                                    	<img src="images/ser_archv_3.jpg" alt="" />
	                                    </div>
	                                </div>
	                            </div>
	                        </div>
	                    </div>

	                    <div class="divider"><img src="images/icon_boxshadow.png" alt="" /></div>

	                    <div class="buttons text-center"><button type="button" class="btndefault">Get Started for Free</button></div>
	                </div>
	            </div>
		    </section>
      </div>
    )
}
}
export default Archiving;
