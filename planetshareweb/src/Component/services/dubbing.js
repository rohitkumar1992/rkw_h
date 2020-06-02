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
class Dubbing extends React.Component{
  componentDidMount(){

  }
  render()
  {
    return(
      <div class="top_div">
        <section class="ser_banner">
            <div class="container">
                <div class="cont_area">
                    <h2>Dubbing <span><i class="fa fa-headphones"></i> Services</span></h2>
                    {/*<p class="txt">Services overview</p>*/}
                    <ul>
                        <li>
                            <a href="javascript:" class="wow zoomIn">
                                <div class="img">
                                    <img src="images/Voice.png" alt="" />
                                </div>
                            </a>
                            <div class="desc">
                                <h3>Voices</h3>
                                <div class="brdr"><span><i class="fa fa-angle-down"></i></span></div>
                                <p>Hire your Voice Artist</p>
                            </div>
                        </li>
                        <li>
                            <a href="javascript:" class="wow zoomIn">
                                <div class="img">
                                    <img src="images/quote.png" alt="" />
                                </div>
                            </a>
                            <div class="desc">
                                <h3>Quote</h3>
                                <div class="brdr"><span><i class="fa fa-angle-down"></i></span></div>
                                <p>Let us know about your project</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="clearfix"></div>
        </section>
        <section class="inner_cont ser">
            <div class="voice_list_box">
                <div class="vc_cont_box vc_main">
                    <div class="container">
                        <div class="cont_area">
                            <div class="vc_def">
                                <span><img src="images/icon_voice.png" alt="" /></span>
                            </div>
                            <h2 class="wow fadeInUp">Voice-Over and <span>Dubbing Services</span></h2>
                            <div class="cont_desc">
                                <div class="box l">
                                    <div class="desc">
                                        <p>Looking for Voice-Over and Dubbing talents? Cool! We have got a pool of freelancers to offer Voice-Overs and Dubbing services in a range of languages and dialects. Get access to the services rendered by a host of artists offering foreign Voice-Overs and Dubbing solutions at cost effective rates to suit your project.</p>
                                        <ul class="icon_lst">
                                            <li>
                                                <p>
                                                    <img src="images/vc_icon_nontime.png" alt="" />
                                                    <b>Non-Timed</b> Audio Recordings or Regular Audio Recordings
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    <img src="images/vc_icon_dubbing.png" alt="" />
                                                    <b>Dubbing</b>
                                                </p>
                                            </li>
                                            {/*<li>
                                                <p>
                                                    <img src="images/vc_icon_tts.png" alt="" />
                                                    <b>TTS</b> Synthetic Voices
                                                </p>
                                            </li>*/}
                                        </ul>
                                    </div>
                                </div>
                                <div class="box r">
                                    <div class="vc_vd_box">
                                        <video id="seller_profile" controls="">
                                            <source src="images/video/website_demo.mp4" type="video/mp4" />
                                        </video>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="vc_cont_box vc_nma">
                    <div class="container">
                        <div class="cont_area">
                            <div class="cont_desc">
                                <div class="box l">
                                    <div class="desc">
                                        <h2>Non-Timed <span>Audio Recordings or Regular Audio Recordings</span></h2>
                                        <OwlCarousel
                                           className="ttl_slider owl-carousel"
                                           items={1}
                                           nav={false}
                                           loop={true}
                                           mouseDrag={true}
                                           dots={true}
                                           autoplay={true}
                                           autoplayTimeout={2000}
                                           smartSpeed={500}
                                           margin={0}
                                           navigation={true}
                                           navText={["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]}
                                          responsive={responsive}
                                           >
                                            <div class="item">
                                                <h2>23 South Asian languages and dialects <span>covered</span></h2>
                                            </div>
                                            <div class="item">
                                                <h2>23 South Asian languages and dialects <span>covered</span></h2>
                                            </div>
                                            <div class="item">
                                                <h2><span>Pool of</span> talented and experienced voice artists</h2>
                                            </div>
                                            <div class="item">
                                                <h2>Defined quality parameters <span>to ensure quality production</span></h2>
                                            </div>
                                            <div class="item">
                                                 <h2>Use of industry-standard equipment <span>to keep up with the pace</span></h2>
                                            </div>
                                            <div class="item">
                                                <h2>Soundproof studios <span>for seamless recording</span></h2>
                                            </div>
                                            <div class="item">
                                                <h2>Prudent post-recording measures <span>for a smooth delivery and export</span></h2>
                                            </div>
                                        </OwlCarousel>
                                        <p>You have a project at your hand and, it requires professional Voice-Over or Dubbing? No problems! We have got your covered with a range of options thanks to our committed freelancers. From a general text script and presentation to documentary narration and advertisement, a team of native voice artists are here to do the job for you at cost-effective rates.</p>
                                        <p>Our pool of freelancers ensures you get the quality and a time-bound delivery every time you ask for their services. You can choose the artist and the packages that best suit your project requirements.</p>
                                        <div class="buttons">
                                            <a href="javascript:" class="btndefault">Read More <i class="fa fa-angle-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="box r">
                                    <div class="vc_img_box">
                                        <img src="images/vc_img_nontimedaudio.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="vc_cont_box vc_dub">
                    <div class="container">
                        <div class="cont_area">
                            <div class="cont_desc drl">
                                <div class="box l">
                                    <div class="desc">
                                        <h2>Dubbing <span></span></h2>
                                        <p>Dubbing has been here for a long time and, it is only getting popular with time! Whenever you have is a project involving a video or an animation with its audio to be delivered in a foreign language, dubbing is the solution for you.</p>
                                        <p>With professional dubbing freelancers at cost-effective rates onboard and, Planetshare becomes an obvious platform for you to get all your related projects completed.</p>
                                        <ul class="icon_lst">
                                            <li>
                                                <p>
                                                    <img src="images/vc_icon_timed.png" alt="" />
                                                    <b>Timed</b> Audio
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    <img src="images/vc_icon_lip.png" alt="" />
                                                    <b>Lip -</b> Synch
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    <img src="images/vc_icon_phrase.png" alt="" />
                                                    <b>Phrase -</b> Synch
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    <img src="images/vc_icon_unvoice.png" alt="" />
                                                    <b>UN Style Voice -</b> Over
                                                </p>
                                            </li>
                                            
                                            
                                        </ul>
                                        <div class="buttons">
                                            <a href="javascript:" class="btndefault" onClick={()=>cogoToast.error('Will Be Available By End Of This Month',{position:'bottom-center'})}><i class="fa fa-cogs"></i> Check out our tools for Phrase and Lip-Synch <i class="fa fa-angle-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="box r">
                                  <OwlCarousel
                                     className="vc_dub_slider owl-carousel"
                                     items={1}
                                     nav={false}
                                     loop={true}
                                     mouseDrag={true}
                                     dots={false}
                                     autoplay={true}
                                     autoplayTimeout={2000}
                                     animateOut={"fadeOut"}
                                     animateIn={"fadeIn"}
                                     smartSpeed={500}
                                     margin={0}
                                     navigation={false}
                                     navText={["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]}
                                    responsive={responsive}
                                     >
                                        <div class="item">
                                            <img src="images/vc_dubbing_slide1.jpg" alt="" />
                                        </div>
                                        <div class="item">
                                            <img src="images/vc_dubbing_slide2.jpg" alt="" />
                                        </div>
                                        <div class="item">
                                            <img src="images/vc_dubbing_slide3.jpg" alt="" />
                                        </div>
                                        <div class="item">
                                            <img src="images/vc_dubbing_slide4.jpg" alt="" />
                                        </div>
                                    </OwlCarousel>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="vcvd_list_box">
                <div class="container">
                    <div class="vc_cont_box vcvd">
                        <div class="cont_area">
                            <div class="cont_desc drl">
                                <div class="box l">
                                    <div class="desc">
                                        <h2 class="w_head_icon">
                                            <div class="img">
                                                <img src="images/vc_img_timedaudio.png" alt="" />
                                            </div>
                                            <div class="h_desc">
                                                Timed <span>Audio</span>
                                            </div>
                                        </h2>
                                        <p>Timed Audio is an explanatory narration with no "talking heads" in the project. It is an off-camera and a straight-read audio recording that explains graphics, animations, text, kinetic typography, etc. </p>
                                        <p>The timed audio should match with each segment present in the video project to render the desired production.</p>
                                        <div class="buttons quote">
                                            <a href="javascript:" class="btndefault" onClick={()=>cogoToast.error('Will Be Available By End Of This Month',{position:'bottom-center'})}>Quote <i class="fa fa-angle-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="box r">
                                    <div class="vc_video">
                                        <video controls>
                                            <source src="https://res.cloudinary.com/deyonsykf/video/upload/v1578567226/partner1_gdxjdn.mp4" type="video/mp4"/>
                                            <source src="https://res.cloudinary.com/deyonsykf/video/upload/v1578631250/partner1_ykhibp.ogv" type="video/ogv"/>
                                            <source src="https://res.cloudinary.com/deyonsykf/video/upload/v1578631650/partner1_r1cuqt.webm" type="video/webm"/>
                                        </video>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="divider"><img src="images/icon_boxshadow.png" alt="" /></div>

                    <div class="vc_cont_box vcvd">
                        <div class="cont_area">
                            <div class="cont_desc">
                                <div class="box l">
                                    <div class="desc">
                                        <h2 class="w_head_icon">
                                            <div class="img">
                                                <img src="images/vc_img_lip.png" alt="" />
                                            </div>
                                            <div class="h_desc">
                                                Lip-<span>Synch</span>
                                            </div>
                                        </h2>
                                        <p>As the phrase suggests, in Lip Sync, the voice-over actor matches the tone, way, speed and personality of the displayed character. The voice talent does it so perfectly that it seems as if the on-screen person is narrating and the artist.</p>
                                        <p>Our freelancers have relevant experiences from different genres. From films and documentaries to short stories and ad-content, they make it look so easy when it comes to performing Lip Syncing.</p>
                                        <div class="buttons quote">
                                            <a href="javascript:" class="btndefault" onClick={()=>cogoToast.error('Will Be Available By End Of This Month',{position:'bottom-center'})}>Quote <i class="fa fa-angle-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="box r">
                                    <div class="vc_video">
                                        <video controls>
                                            <source src="https://res.cloudinary.com/deyonsykf/video/upload/v1578567226/partner1_gdxjdn.mp4" type="video/mp4"/>
                                            <source src="https://res.cloudinary.com/deyonsykf/video/upload/v1578631250/partner1_ykhibp.ogv" type="video/ogv"/>
                                            <source src="https://res.cloudinary.com/deyonsykf/video/upload/v1578631650/partner1_r1cuqt.webm" type="video/webm"/>
                                        </video>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="divider"><img src="images/icon_boxshadow.png" alt="" /></div>

                    <div class="vc_cont_box vcvd">
                        <div class="cont_area">
                            <div class="cont_desc drl">
                                <div class="box l">
                                    <div class="desc">
                                        <h2 class="w_head_icon">
                                            <div class="img">
                                                <img src="images/vc_img_phrase.png" alt="" />
                                            </div>
                                            <div class="h_desc">
                                                Phrase <span>Synch</span>
                                            </div>
                                        </h2>
                                        <p>In Phase Sync, Voice-Over is not matched to the lip movements but is simply matched one phrase at a time. The voice of the on-screen character is muted and replaced by the voice actor's audio. The voice of the artist starts and ends at the same time as the on-screen character.</p>
                                        <p>The voice artist needs to ensure the script is being read at a natural pace, and in sync with the original speaker in the video project. Phase Sync is cost-effective and popular Voice-Over in many production fields. </p>
                                        <div class="buttons quote">
                                            <a href="javascript:" class="btndefault" onClick={()=>cogoToast.error('Will Be Available By End Of This Month',{position:'bottom-center'})}>Quote <i class="fa fa-angle-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="box r">
                                    <div class="vc_video">
                                        <video controls>
                                            <source src="https://res.cloudinary.com/deyonsykf/video/upload/v1578567226/partner1_gdxjdn.mp4" type="video/mp4"/>
                                            <source src="https://res.cloudinary.com/deyonsykf/video/upload/v1578631250/partner1_ykhibp.ogv" type="video/ogv"/>
                                            <source src="https://res.cloudinary.com/deyonsykf/video/upload/v1578631650/partner1_r1cuqt.webm" type="video/webm"/>
                                        </video>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="divider"><img src="images/icon_boxshadow.png" alt="" /></div>

                    <div class="vc_cont_box vcvd">
                        <div class="cont_area">
                            <div class="cont_desc">
                                <div class="box l">
                                    <div class="desc">
                                        <h2 class="w_head_icon">
                                            <div class="img">
                                                <img src="images/vc_img_unvoiceover.png" alt="" />
                                            </div>
                                            <div class="h_desc">
                                                UN Style Voice-<span>Over</span>
                                            </div>
                                        </h2>
                                        <p>The UN (United Nations) Style Voice-Over is a popular way for dubbing video projects and corporate videos with a serious subject matter. In such cases, interviews take place on camera or a speech happens in a language that the audience at large or otherwise does not understand the narrator's voice. </p>
                                        <p>In the Un Style Voice-Over, the original speaker can be heard in the background and, the translated Voice-Over follows the narrator with a delay of 1-3 seconds.</p>
                                        <div class="buttons quote">
                                            <a href="javascript:" class="btndefault" onClick={()=>cogoToast.error('Will Be Available By End Of This Month',{position:'bottom-center'})}>Quote <i class="fa fa-angle-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="box r">
                                    <div class="vc_video">
                                        <video controls>
                                            <source src="https://res.cloudinary.com/deyonsykf/video/upload/v1578567226/partner1_gdxjdn.mp4" type="video/mp4"/>
                                            <source src="https://res.cloudinary.com/deyonsykf/video/upload/v1578631250/partner1_ykhibp.ogv" type="video/ogv"/>
                                            <source src="https://res.cloudinary.com/deyonsykf/video/upload/v1578631650/partner1_r1cuqt.webm" type="video/webm"/>
                                        </video>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*<div class="tts_sync_box">
                <div class="container">
                    <div class="offer_tag">
                        <img src="images/icon_vc_tag.png" alt="" />
                    </div>
                    <div class="cont_box">
                        <div class="img">
                            <img src="images/icon_img_tts_sync.png" alt="" />
                        </div>
                        <div class="icon">
                            <img src="images/icon_tts_sync.png" alt="" />
                        </div>
                        <div class="desc">
                            <h2>TTS <span>Synthetic Voices</span></h2>
                            <p>The new frontier of human-sounding audio is called Text to Speech or TTS, where computers can provide a synthetic voice perfectly understandable but lacking prosody and emotion. However TTS can be a <b>cost-effective solution for short messages on the fields of IVR telephony, software, audio prompts</b> for impaired as well as warnings and disclaimers.</p>
                            <div class="buttons quote">
                                <a href="javascript:" class="btndefault">Read more <i class="fa fa-angle-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>*/}

            <div class="vc_subt_box">
                <div class="container">
                    <div class="subt_area">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="box l wow zoomIn">
                                    <img src="images/icon_vc_img_subt.png" alt="" />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="box r wow fadeInUp">
                                    <h2>Are you looking for <br></br>Subtitling?</h2>
                                    <p>Check out our additional <b>Multimedia Services</b> and give your project what it needs!</p>
                                    <div class="buttons">
                                        <a href="javascript:" class="btndefault" onClick={()=>cogoToast.error('Will Be Available By End Of This Month',{position:'bottom-center'})}>Go to Subtitling <i class="fa fa-angle-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="work_flow_box">
                <div class="container">
                    <h2 class="wow fadeInUp">Our <span>Workflow</span></h2>
                    <div class="work_top_cont">
                        <div class="box l f">
                            <div class="img">
                                <img src="images/vc_workflow_round.png" alt="" />
                                <a href="javascript:" class="flow_l1 wow bounceIn" data-toggle="tooltip" title="Tell us what you need">
                                    <img src="images/icon_workflow_link1.png" alt="" />
                                </a>
                                <a href="javascript:" class="flow_l2 wow bounceIn" data-wow-delay="0.3s" data-toggle="tooltip" title="We provide a quote and a delivery date">
                                    <img src="images/icon_workflow_link2.png" alt="" />
                                </a>
                                <a href="javascript:" class="flow_l3 wow bounceIn" data-wow-delay="0.5s" data-toggle="tooltip" title="You order, we book talents, & studio">
                                    <img src="images/icon_workflow_link3.png" alt="" />
                                </a>
                                <a href="javascript:" class="flow_l4 wow bounceIn" data-wow-delay="0.7s" data-toggle="tooltip" title="We record and post-produce">
                                    <img src="images/icon_workflow_link4.png" alt="" />
                                </a>
                                <a href="javascript:" class="flow_l5 wow bounceIn" data-wow-delay="0.9s" data-toggle="tooltip" title="We deliver">
                                    <img src="images/icon_workflow_link5.png" alt="" />
                                </a>
                                <a href="javascript:" class="flow_l6 wow bounceIn" data-wow-delay="1.1s" data-toggle="tooltip" title="You pay">
                                    <img src="images/icon_workflow_link6.png" alt="" />
                                </a>
                                <a href="javascript:" class="flow_l7 wow bounceIn" data-wow-delay="1.3s" data-toggle="tooltip" title="We welcome your feedback">
                                    <img src="images/icon_workflow_link7.png" alt="" />
                                </a>
                            </div>
                        </div>
                        {/*<div class="box r">
                            <div class="desc">
                                <h2>Our Workflow</h2>
                                <h3>How we handle <span>your project</span></h3>
                                <p>From the choice of the right voices to final delivery of files, we apply the greatest possible care to follow in detail and full confidentiality our client’s guidelines.</p>
                                <div class="buttons">
                                    <a href="javascript:" class="btndefault" onClick={()=>cogoToast.error('Will Be Available By End Of This Month',{position:'bottom-center'})}><i class="fa fa-angle-down"></i> Here is a step by step guide on a typical project process...</a>
                                </div>
                            </div>
                        </div>*/}
                    </div>

                    {/*<div class="work_flow_steps">
                        <div class="step_box">
                            <div class="step_head">
                                <a href="#flow1" data-toggle="collapse">
                                    <span><b>Tell us</b> what you need</span>
                                    <img src="images/icon_workflow_link1.png" alt="" />
                                </a>
                            </div>
                            <div id="flow1" class="step_cont collapse show">
                                <ul>
                                    <li>
                                        <p>Click on <b>quote</b> to let us know your project details</p>
                                    </li>
                                    <li>
                                        <p>Pick the <b>language/s</b> you need for your audio</p>
                                    </li>
                                    <li>
                                        <p>Provide your <b>voice talent preferences:</b> age, voice tone, etc.</p>
                                        <p>Or choose the voice by clicking on <b>casting</b></p>
                                    </li>
                                    <li>
                                        <p>Tell us your <b>production specs:</b> media, script extension (words or minutes), edition details, is it non-timed or timed audio, etc</p>
                                    </li>
                                    <li>
                                        <p>Let us know your <b>company details</b> so that we can contact you</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="step_box">
                            <div class="step_head">
                                <a href="#flow2" data-toggle="collapse">
                                    <span><b>We provide</b> a quote and a delivery date</span>
                                    <img src="images/icon_workflow_link2.png" alt="" />
                                </a>
                            </div>
                            <div id="flow2" class="step_cont collapse">
                                <ul>
                                    <li>
                                        <p>We address to you by e‑mail a <b>quote</b> outlining the prices for the requested services</p>
                                    </li>
                                    <li>
                                        <p>We provide a <b>turnaround</b> time in business days</p>
                                    </li>
                                    <li>
                                        <p>We assign the chosen and available <b>voices/languages</b> for your project</p>
                                    </li>
                                    <li>
                                        <p>We specify <b>terms & conditions</b></p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="step_box">
                            <div class="step_head">
                                <a href="#flow3" data-toggle="collapse">
                                    <span><b>You order,</b> we book talents, & studio</span>
                                    <img src="images/icon_workflow_link3.png" alt="" />
                                </a>
                            </div>
                            <div id="flow3" class="step_cont collapse">
                                <ul>
                                    <li>
                                        <p>You <b>order</b> by signing our quote or write an  e-mail approving it</p>
                                    </li>
                                    <li>
                                        <p>You provide the <b>script</b> with instructions and pronunciation guidelines (jargon, brand names, etc)</p>
                                    </li>
                                    <li>
                                        <p>If you order timed audio, send us your <b>video</b> or animation</p>
                                    </li>
                                    <li>
                                        <p>We <b>book</b> the chosen / available voice talents and the studio</p>
                                    </li>
                                    <li>
                                        <p>We let you know a <b>schedule</b> for the recording</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="step_box">
                            <div class="step_head">
                                <a href="#flow4" data-toggle="collapse">
                                    <span><b>We record</b> and post-produce</span>
                                    <img src="images/icon_workflow_link4.png" alt="" />
                                </a>
                            </div>
                            <div id="flow4" class="step_cont collapse">
                                <ul>
                                    <li>
                                        <p>You provide the <b>script</b> with instructions and pronunciation guidelines (jargon, brand names, etc)</p>
                                    </li>
                                    <li>
                                        <p>If you ordered timed audio, send us the <b>video</b> or animation</p>
                                    </li>
                                    <li>
                                        <p>We <b>record</b> the voices in our studios</p>
                                    </li>
                                    <li>
                                        <p>We <b>direct</b> the talents. You can also do it through video/audio conference (Skype)</p>
                                    </li>
                                    <li>
                                        <p>We monitor, clean and <b>edit</b> following your requirements</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="step_box">
                            <div class="step_head">
                                <a href="#flow5" data-toggle="collapse">
                                    <span><b>We deliver</b></span>
                                    <img src="images/icon_workflow_link5.png" alt="" />
                                </a>
                            </div>
                            <div id="flow5" class="step_cont collapse">
                                <ul>
                                    <li>
                                        <p>We send you the <b>audio</b> files or the <b>video</b> with the integrated foreign audio track</p>
                                    </li>
                                    <li>
                                        <p>You will receive a <b>link</b> which will allow you to listen to the recordings in <b>preview</b> mode</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="step_box">
                            <div class="step_head">
                                <a href="#flow6" data-toggle="collapse">
                                    <span><b>You pay</b></span>
                                    <img src="images/icon_workflow_link6.png" alt="" />
                                </a>
                            </div>
                            <div id="flow6" class="step_cont collapse">
                                <ul>
                                    <li>
                                        <p>If you like the recording, you click on the secure <b>payment</b> page</p>
                                    </li>
                                    <li>
                                        <p>You can choose Mastercard or VISA</p>
                                    </li>
                                    <li>
                                        <p>You will receive a link to <b>download</b> the master audio / video</p>
                                    </li>
                                    <li>
                                        <p>We also accept PayPal and Wire Transfer</p>
                                    </li>
                                    <li>
                                        <p>We will send you an <b>invoice</b></p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="step_box">
                            <div class="step_head">
                                <a href="#flow7" data-toggle="collapse">
                                    <span><b>We welcome</b> your feedback</span>
                                    <img src="images/icon_workflow_link7.png" alt="" />
                                </a>
                            </div>
                            <div id="flow7" class="step_cont collapse">
                                <ul>
                                    <li>
                                        <p>We appreciate your comments and remarks</p>
                                    </li>
                                    <li>
                                        <p>We stand by for eventual <b>retakes, pick-ups, add-ons,</b> etc</p>
                                    </li>
                                    <li>
                                        <p>We keep your <b>files</b> and <b>scripts</b> for 3 months</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>*/}
                </div>
            </div>

            <div class="clearfix"></div>
        </section>
      </div>
    )
}
}
export default Dubbing;
