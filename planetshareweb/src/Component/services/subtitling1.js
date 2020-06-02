import React,{useEffect} from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import $ from 'jquery';
import {Link} from 'react-router-dom';
import cogoToast from 'cogo-toast';
const responsive={
  320:{items:1},
  480:{items:1},
  600:{items:1},
  960:{items:1},
  1200:{items:1}
  }
class Subtitling extends React.Component{
  componentDidMount(){

  }
  render()
  {
    return(
      <div class="top_div">
        <div class="serv_bar_inf">
            <div class="container">
                <p>Special offer – Order subtitles now and get English Closed Captions for free!</p>
            </div>
        </div>

        <div class="ser_banner subttl">
            <div class="container">
                <div class="subt_ser_cont">
                    <div class="row">
                        <div class="col-md-6 col-sm-6">
                            <div class="box l">
                                <h3>Subtitling Services</h3>
                                <h4>100% Done by Human</h4>
                                <p><span>98.5%</span>customer satisfaction, <span>17</span> million minutes subtitled</p>
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-6">
                            <div class="box r">
                                <h3>Get started today!</h3>
                                <p>Manual Subtitling to Suit all your Projects</p>
                                <div class="ord_subt">
                                    <button type="button" class="btn btndefault"><i class="fa fa-rocket"></i> Order Subtitles Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="clearfix"></div>
        </div>

        <div class="serv_bar_inf">
            <div class="container">
                <p>Planetshare offers video subtitling services in many languages. Make your videos available to a much larger public for a low price!</p>
            </div>
        </div>


        <div class="inner_cont subt_ser">
            <div class="step_boxes">
                <div class="container">
                    <h2>How It Works</h2>
                    <div class="step_b_l">
                        <ul class="row">
                            <li class="col-md-3 col-sm-4">
                                <div class="box">
                                    <div class="num">1</div>
                                    <h3>Video Files</h3>
                                    <p>Upload your video file from your PC, using a link or a web source</p>
                                </div>
                            </li>
                            <li class="col-md-3 col-sm-4">
                                <div class="box">
                                    <div class="num">2</div>
                                    <h3>Subtitle Language</h3>
                                    <p>Choose your desired language from bunch of options</p>
                                </div>
                            </li>
                            <li class="col-md-3 col-sm-4">
                                <div class="box">
                                    <div class="num">3</div>
                                    <h3>Pay Online</h3>
                                    <p>Using primary payment options such as creditcard, debit card, etc.</p>
                                </div>
                            </li>
                            <li class="col-md-3 col-sm-4">
                                <div class="box">
                                    <div class="num">4</div>
                                    <h3>Get your Product Delivered</h3>
                                    <p>In your email box within the stipulated timelines</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="lock_b">
                <div class="container">
                    <p><img src="images/lock.png" alt="" /> Security, privacy, and confidentiality guaranteed: 2048-bit SSL encryption, NDA protection</p>
                </div>
            </div>
            <div class="subt_type">
                <div class="container">
                    <div class="sub_t_l">
                        <p>Our subtitling solution is perfect for documentaries, movies, shows, television programmes, video games, YouTube videos and other video projects.</p>
                        <ul class="row">
                            <li class="col-md-4 col-sm-4">
                                <div class="box">
                                    <div class="icon">
                                        <img src="images/ser_subt_icon1.png" alt="" />
                                    </div>
                                    <div class="img">
                                        <img src="images/ser_subt_img1.jpg" alt="" />
                                    </div>
                                </div>
                            </li>
                            <li class="col-md-4 col-sm-4">
                                <div class="box">
                                    <div class="icon">
                                        <img src="images/ser_subt_icon2.png" alt="" />
                                    </div>
                                    <div class="img">
                                        <img src="images/ser_subt_img2.jpg" alt="" />
                                    </div>
                                </div>
                            </li>
                            <li class="col-md-4 col-sm-4">
                                <div class="box">
                                    <div class="icon">
                                        <img src="images/ser_subt_icon3.png" alt="" />
                                    </div>
                                    <div class="img">
                                        <img src="images/ser_subt_img3.jpg" alt="" />
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="prof_cap">
                <div class="container">
                    <div class="prof_cont">
                        <h2>Professional Captioning Services for your Industry</h2>
                        
                        <ul class="nav nav-tabs">
                          <li class="nav-item">
                            <a class="nav-link active" data-toggle="tab" href="#educ"><i class="fa fa-graduation-cap" aria-hidden="true"></i> Media</a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" data-toggle="tab" href="#media"><i class="fa fa-play" aria-hidden="true"></i> Education</a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" data-toggle="tab" href="#mark"><i class="fa fa-volume-up" aria-hidden="true"></i> Marketing</a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" data-toggle="tab" href="#manymore"><i class="fa fa-bars" aria-hidden="true"></i> Other Areas</a>
                          </li>
                        </ul>

                        
                        <div class="tab-content">
                          <div class="tab-pane container active" id="educ">
                              <div class="row">
                                  <div class="col-md-4 col-sm-4">
                                      <div class="box l">
                                          <h3>Content Examples</h3>
                                          <ul>
                                              <li>Multi-project videos </li>
                                              <li>Social Media videos</li>
                                              <li>VOD streaming</li>
                                          </ul>
                                          <div class="buttons">
                                              <button type="button" class="btn btndefault">Order Now</button>
                                          </div>
                                          <p>Instantly using our order form</p>
                                      </div>
                                  </div>
                                  <div class="col-md-8 col-sm-8">
                                      <div class="box r">
                                          <h3>Empowering Our Customers</h3>
                                          <div class="logo_l">
                                              <img src="images/ser_subt_logo_l_1.png" alt="" />
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div class="tab-pane container fade" id="media">
                              <div class="row">
                                  <div class="col-md-4 col-sm-4">
                                      <div class="box l">
                                          <h3>Content Examples</h3>
                                          <ul>
                                              <li>Webinars</li>
                                              <li>Lectures</li>
                                              <li>Trainings</li>
                                              <li>E-Learnings</li>
                                          </ul>
                                          <div class="buttons">
                                              <button type="button" class="btn btndefault">Order Now</button>
                                          </div>
                                          <p>Instantly using our order form</p>
                                      </div>
                                  </div>
                                  <div class="col-md-8 col-sm-8">
                                      <div class="box r">
                                          <h3>Empowering Our Customers</h3>
                                          <div class="logo_l">
                                              <img src="images/ser_subt_logo_l_2.png" alt="" />
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div class="tab-pane container fade" id="mark">
                              <div class="row">
                                  <div class="col-md-4 col-sm-4">
                                      <div class="box l">
                                          <h3>Content Examples</h3>
                                          <ul>
                                              <li>All-purpose marketing videos</li>
                                              <li>Webinars</li>
                                              <li>Promotional media content</li>
                                              <li>Marketing presentationss</li>
                                              <li>Advertisements</li>
                                          </ul>
                                          <div class="buttons">
                                              <button type="button" class="btn btndefault">Order Now</button>
                                          </div>
                                          <p>Instantly using our order form</p>
                                      </div>
                                  </div>
                                  <div class="col-md-8 col-sm-8">
                                      <div class="box r">
                                          <h3>Empowering Our Customers</h3>
                                          <div class="logo_l">
                                              <img src="images/ser_subt_logo_l_3.png" alt="" />
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div class="tab-pane container fade" id="manymore">
                              <div class="row">
                                  <div class="col-md-4 col-sm-4">
                                      <div class="box l">
                                          <h3>Content Examples</h3>
                                          <ul>
                                              <li>Spiritual content</li>
                                              <li>Social content</li>
                                              <li>Short form videos</li>
                                          </ul>
                                          <div class="buttons">
                                              <button type="button" class="btn btndefault">Order Now</button>
                                          </div>
                                          <p>Instantly using our order form</p>
                                      </div>
                                  </div>
                                  <div class="col-md-8 col-sm-8">
                                      <div class="box r">
                                          <h3>Empowering Our Customers</h3>
                                          <div class="logo_l">
                                              <img src="images/ser_subt_logo_l_4.png" alt="" />
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="gotrans">
                <div class="container">
                    <div class="i_cont">
                        <h2>What we Offer</h2>
                        <div class="got_l">
                            <ul class="row">
                                <li class="col-md-4 col-sm-4">
                                    <div class="box">
                                        <h3>Accurate Subtitles</h3>
                                        <p>Accuracy is our topmost priority! Our subtitling services are subject to the 3-tiered Quality Control process.</p>       
                                    </div>
                                </li>
                                <li class="col-md-4 col-sm-4">
                                    <div class="box">
                                        <h3>Affordable Rates</h3>
                                        <p>Get your desired subtitling task done at a cost-effective rates. Pay-Per-Minute and turnaround-time based pricing models do the job for you.</p>       
                                    </div>
                                </li>
                                <li class="col-md-4 col-sm-4">
                                    <div class="box">
                                        <h3>Guaranteed Security</h3>
                                        <p>Your content security is of paramount importance! We protect your privacy with 2048-bit SSL encryption and an NDA.</p>       
                                    </div>
                                </li>
                                <li class="col-md-6 col-sm-6">
                                    <div class="box">
                                        <h3>Experienced Service Partners</h3>
                                        <p>Get access to a range of subtitling services from our experienced service partners.</p>       
                                    </div>
                                </li>
                                <li class="col-md-6 col-sm-6">
                                    <div class="box">
                                        <h3>Manual Work</h3>
                                        <p>Our subtitling services are provided by our service providers manually.</p>       
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="gotrans">
                <div class="container">
                    <div class="i_cont">
                        <h2>Why Choose Us</h2>
                        <p></p>
                        <div class="s_team">
                            <div class="row">
                                <div class="col-md-3 col-sm-3">
                                    <div class="box l">
                                        <h3>Meet our dedicated project management team</h3>
                                        <p>The tireless, exacting work of our project managers enables us to maintain a client satisfaction rate of 98% year after year. They ensure that your project deliverables meet your quality requirements and deadlines.</p>
                                        
                                    </div>
                                </div>
                                <div class="col-md-9 col-sm-9">
                                    <div class="box">
                                        <ul class="row">
                                            <li class="col-sm-4 col-md-4">
                                                <div class="bx">
                                                    <div class="img">
                                                        <img src="images/subt_ser_team_1.jpg" alt="" />
                                                    </div>
                                                    <div class="info">
                                                        <h3>Sandra Jenkins</h3>
                                                        <p>My team and I ensure that all projects run smoothly 24/7.</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="col-sm-4 col-md-4">
                                                <div class="bx">
                                                    <div class="img">
                                                        <img src="images/subt_ser_team_2.jpg" alt="" />
                                                    </div>
                                                    <div class="info">
                                                        <h3>Martin Donile</h3>
                                                        <p>I am in charge of complex projects.</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="col-sm-4 col-md-4">
                                                <div class="bx">
                                                    <div class="img">
                                                        <img src="images/subt_ser_team_3.jpg" alt="" />
                                                    </div>
                                                    <div class="info">
                                                        <h3>Isabella Rossi</h3>
                                                        <p>My job is to recruit and test the best transcribers on the market.</p>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="vd_tran_p">
                <div class="container">
                    <div class="vd_tran_cont">
                        <h2>Industries Covered</h2>
                        <p>Our experienced and efficient of linguists have the ability to capture the cultural nuances of your video content in professional subtitling. <span>We cover a range of industries to offer our diverse services.</span></p>
                        <ul class="row">
                            <li class="col-md-3 col-sm-3">
                                <div class="box">
                                    <p>Hospitality</p>
                                </div>
                            </li>
                            <li class="col-md-3 col-sm-3">
                                <div class="box">
                                    <p>Publishing & Media</p>
                                </div>
                            </li>
                            <li class="col-md-3 col-sm-3">
                                <div class="box">
                                    <p>Automotive & Aerospace</p>
                                </div>
                            </li>
                            <li class="col-md-3 col-sm-3">
                                <div class="box">
                                    <p>Finance</p>
                                </div>
                            </li>
                            <li class="col-md-3 col-sm-3">
                                <div class="box">
                                    <p>Life Science</p>
                                </div>
                            </li>
                            <li class="col-md-3 col-sm-3">
                                <div class="box">
                                    <p>Marketting</p>
                                </div>
                            </li>
                            <li class="col-md-3 col-sm-3">
                                <div class="box">
                                    <p>Science & Academic</p>
                                </div>
                            </li>
                            <li class="col-md-3 col-sm-3">
                                <div class="box">
                                    <p>Legal & Law</p>
                                </div>
                            </li>
                            <li class="col-md-3 col-sm-3">
                                <div class="box">
                                    <p>Education</p>
                                </div>
                            </li>
                            <li class="col-md-3 col-sm-3">
                                <div class="box">
                                    <p>Gaming & Video Games</p>
                                </div>
                            </li>
                            <li class="col-md-3 col-sm-3">
                                <div class="box">
                                    <p>IT & Software</p>
                                </div>
                            </li>
                        </ul>

                        <p class="t">Our most important priority is to guarantee that your message comes across plainly. You get the word-for-word translations to address all your subtitling needs thanks to our efficient and top-notch subtitling solution.</p>
                    </div>
                </div>
            </div>
            <div class="c_sub_f">
                <div class="container">
                    <div class="c_s_f_c">
                        <h2>We've Created Subtitles For</h2>
                        <ul>
                            <li>
                                <div class="box">
                                    <img src="images/logo_subt_for_1.png" alt="" />
                                </div>
                            </li>
                            <li>
                                <div class="box">
                                    <img src="images/logo_subt_for_2.png" alt="" />
                                </div>
                            </li>
                            <li>
                                <div class="box">
                                    <img src="images/logo_subt_for_3.png" alt="" />
                                </div>
                            </li>
                            <li>
                                <div class="box">
                                    <img src="images/logo_subt_for_4.png" alt="" />
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="t_work_ar">
                <div class="container">
                    <div class="tm_work">
                        <div class="row">
                            <div class="col-md-6 col-sm-6">
                                <div class="box l">
                                    <h3>Two Teams Working <br />for You!</h3>
                                    <ul>
                                        <li>
                                            <p><i class="fa fa-check" aria-hidden="true"></i> Trusted by thousands since 2005</p>
                                        </li>
                                        <li>
                                            <p><i class="fa fa-check" aria-hidden="true"></i> Friction-free ordering</p>
                                        </li>
                                        <li>
                                            <p><i class="fa fa-check" aria-hidden="true"></i> 24/7 customer support</p>
                                        </li>
                                        <li>
                                            <p><i class="fa fa-check" aria-hidden="true"></i> Customer Loyalty Program</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-6 col-sm-6">
                                <div class="box r">
                                    <div class="img">
                                        <span class="one">Account Executive</span>
                                        <span>Subtitler</span>
                                        <img src="images/subt_ser_two.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="step_boxes">
                <div class="container">
                    <div class="step_b_l">
                        <ul class="row">
                            <li class="col-md-3 col-sm-4">
                                <div class="box">
                                    <div class="num">1</div>
                                    <h3>Video Files</h3>
                                    <p>Upload your video file from your PC, using a link or a web source</p>
                                </div>
                            </li>
                            <li class="col-md-3 col-sm-4">
                                <div class="box">
                                    <div class="num">2</div>
                                    <h3>Subtitle Language</h3>
                                    <p>Choose your desired language from bunch of options</p>
                                </div>
                            </li>
                            <li class="col-md-3 col-sm-4">
                                <div class="box">
                                    <div class="num">3</div>
                                    <h3>Pay Online</h3>
                                    <p>Using primary payment options such as creditcard, debit card, etc.</p>
                                </div>
                            </li>
                            <li class="col-md-3 col-sm-4">
                                <div class="box">
                                    <div class="num">4</div>
                                    <h3>Get your Product Delivered</h3>
                                    <p>In your email box within the stipulated timelines</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="buttons">
                        <button type="button" class="btn btndefault">Order Subtitles Now</button>
                    </div>
                </div>
            </div>
            <div class="sub_work_ar">
                <div class="container">
                    <h2>How Subtitling Services Work</h2>
                    <div class="subt_tv">
                        <div class="row">
                            <div class="col-md-5 col-sm-5">
                                <div class="box l">
                                    <div class="img">
                                        <img src="images/subt_tv.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-7 col-sm-7">
                                <div class="box r">
                                    <p>If you're interested in video subtitling services but not sure how they work, you can find out all about the subtitling process here.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="subt_slider_ar">
                        <OwlCarousel
                           className="owl-carousel subt_slider"
                            items={1}
                           nav={true}
                           loop={true}
                           mouseDrag={true}
                           dots={true}
                           autoplay={true}
                           animateIn={["fade"]}
                           autoplayTimeout={7000}
                           smartSpeed={500}
                           margin={0}
                           navigation={true}
                           navText={["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]}
                          responsive={responsive}
                           >
                            <div class="item">
                                <div class="box l">
                                    <div class="img">
                                        <img src="images/subt_ser_work1.jpg" alt="" />
                                    </div>
                                </div>
                                <div class="box r">
                                    <h2>What are subtitles?</h2>
                                    <div class="desc">
                                        <p>Subtitles are a translation of the original video language into the desired language to make the audience understand the content. The subtitles appear as text on the bottom of the users' screens, and typically represent the speech between characters in the video content.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="box l">
                                    <div class="img">
                                        <img src="images/subt_ser_work2.jpg" alt="" />
                                    </div>
                                </div>
                                <div class="box r">
                                    <h2>Non-Native Speakers May Benefit from Video Planetshare ----- Captions</h2>
                                    <div class="desc">
                                        <p>Captions are a transcription of the dialogues used in the media content. Captions are of special use to the users who have hearing problems as they include background noises, speaker differentiation, and other relevant information translated from sound to text dialogues.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="box l">
                                    <div class="img">
                                        <img src="images/subt_ser_work3.jpg" alt="" />
                                    </div>
                                </div>
                                <div class="box r">
                                    <h2>Translating Idioms and Subtitles</h2>
                                    <div class="desc">
                                        <p>Idioms are an integral part of generally any conversation, including dialogues movies and other related video programmes. Idioms are expressions that typically have a non-literal meaning. </p>
                                        <p>While translating these idioms, a translator or the subtitling service provider needs to be careful of the fact that the literal meaning of the idiom could lend the dialogue into a completely different meaning. </p>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="box l">
                                    <div class="img">
                                        <img src="images/subt_ser_work4.jpg" alt="" />
                                    </div>
                                </div>
                                <div class="box r">
                                    <h2>Subtitling Versus Dubbing </h2>
                                    <div class="desc">
                                        <p>It all boils down to whether you want to get your video interpreted through subtitles or dubbing.</p>
                                        <p>Dubbing offers users more flexibility while watching the movie or any video as they can concentrate more on the video content. Dubbing lets you enjoy the video to the fullest without being so much concerned about reading the subtitles to understand their favourite character is saying.</p>
                                        <p>There is a flip side to it and, it concerns the broadcasters and content creators or the broadcasters as the dubbing is a comparatively lengthy and costly process.</p>
                                        <p>Now, the content owners and broadcasters have to take a call on their own on whether they should go for dubbing or subtitling.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="box l">
                                    <div class="img">
                                        <img src="images/subt_ser_work5.jpg" alt="" />
                                    </div>
                                </div>
                                <div class="box r">
                                    <h2>The Languages that we Support Subtitles in</h2>
                                    <div class="desc">
                                        <p>Hindi, please take the list of the languages from my previously sent email.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="box l">
                                    <div class="img">
                                        <img src="images/subt_ser_work6.jpg" alt="" />
                                    </div>
                                </div>
                                <div class="box r">
                                    <h2>Why Planetshare Outdoes other Subtitling Companies</h2>
                                    <div class="desc">
                                        <p>While you may have a list of subtitling service providers, service quality and delivery time are the two primary features that you should consider while making a choice. Planetshare does it better than the most when it comes to rendering quality, time-bound and cost-effective subtitling services.</p>
                                    </div>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                </div>
            </div>
            <div class="trans_layout fture">
                <div class="container">
                    <h2>Frequently asked questions</h2>
                    <div class="cont_fture">
                        <div class="card">
                            <h5 data-toggle="collapse" data-target="#media_transcoding" aria-expanded="true">
                                <div class="icon">
                                    <img src="images/trans_fture_icon1.png" alt="" />
                                    <img class="w" src="images/trans_fture_iconw1.png" alt="" />
                                </div>
                                What are Subtitles?
                            </h5>
                            <div id="media_transcoding" class="collapse show">
                                <div class="card-body">
                                    <p>Subtitles translate the original language of a video into a foreign language. This translated text displays on screen so the viewer can read along with the video. Subtitles aid viewers who can hear the audio but can't understand the language.</p>                           
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <h5 class="collapsed" data-toggle="collapse" data-target="#video_screenshot">
                                <div class="icon">
                                    <img src="images/trans_fture_icon2.png" alt="" />
                                    <img class="w" src="images/trans_fture_iconw2.png" alt="" />
                                </div>
                                What is the difference between Subtitles and Captions?
                            </h5>
                            <div id="video_screenshot" class="collapse">
                                <div class="card-body">
                                    <p>Captions are meant for hearing-impaired individuals who can view video images but can't hear the soundtrack. Captions communicate the video's spoken content, song lyrics, and "atmospherics," or sound effects that are part of the story. Subtitles are intended for viewers who can hear the audio but can't understand the language spoken. Subtitles are trickier because they translate the nuances of a spoken and written language into the viewer's language.</p>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <h5 class="collapsed" data-toggle="collapse" data-target="#digital_restoration">
                                <div class="icon">
                                    <img src="images/trans_fture_icon3.png" alt="" />
                                    <img class="w" src="images/trans_fture_iconw3.png" alt="" />
                                </div>
                                What languages can you create Subtitles in?
                            </h5>
                            <div id="digital_restoration" class="collapse">
                                <div class="card-body">
                                    <p>English videos (with or without English caption files) can be translated to Albanian, Arabic, Bengali, Bosnian, Bulgarian, Catalan, Croatian, Czech, Danish, Dutch, Estonian, Filipino, Finnish, French, German, Greek, Hebrew, Hungarian, Icelandic, Indian (Gujarati), Indian (Hindi), Indonesian, Italian, Japanese, Korean, Latvian, Lithuanian, Luxembourgish, Macedonian, Malay, Nepali, Norwegian, Persian, Polish, Portuguese, Romanian, Russian, Serbian , Simplified Chinese, Slovak, Slovenian, Somali, Spanish, Swahili, Swedish, Thai, Traditional Chinese, Turkish, Ukraine, Urdu, Vietnamese.</p>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <h5 class="collapsed" data-toggle="collapse" data-target="#video_editing">
                                <div class="icon">
                                    <img src="images/trans_fture_icon4.png" alt="" />
                                    <img class="w" src="images/trans_fture_iconw4.png" alt="" />
                                </div>
                                How do you ensure quality?
                            </h5>
                            <div id="video_editing" class="collapse">
                                <div class="card-body">
                                    <p>We at Planetshare completely understand the importance of accuracy in captions. That's why we always aim for 99% accuracy. We start by hiring only the best. We then employ a system of reviews and checks to ensure quality and accuracy. Our staff have no less than 5 years of transcribing experience, so you can be sure your audio files are transcribed with great care and attention to detail.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="buttons">
                        <button type="button" class="btndefault">Get Started for Free</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
}
}
export default Subtitling;
