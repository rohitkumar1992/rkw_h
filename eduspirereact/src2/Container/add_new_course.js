import React from 'react';
import {Link} from 'react-router-dom';
import $ from 'jquery'
import DropDown from '../Component/dropdown.js';
const presetList=[{"label":"1080p","value":"1080",'price':150},{"label":"720p","value":"720",'price':200}]
const containerList=[{"label":"Auto","value":"Auto"},{"label":"350*450","value":"250*450"}]
const aspectList=[{"label":"16:9","value":"16:9"},{"label":"16:12","value":"16:12"}]
class AddNewCourse extends React.Component{
     state={isLoading:true,loading_msg:'Please Wait',not_found:false,video_id:0,video_data:[],presetVal:[],aspectVal:[],containerVal:[],price:0}
    componentDidMount()
    {
        $('#file_upload').change(function() {
          var i = $(this).prev('button').clone();
          var file = $('#file_upload')[0].files[0].name;
          $(this).prev('button').text(file);
        });
        $('.dash_cont .cirrclm_l li .box .title').click(function() {
            $(this).toggleClass('active');
        });
        function readURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                
                reader.onload = function (e) {
                    $('#thumb_img').attr('src', e.target.result);
                }
                
                reader.readAsDataURL(input.files[0]);
            }
          }
          
          $("#thumb_image").change(function(){
              readURL(this);
          });
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

	render()
	{
	return(
            <section class="dash_cont">
                <div class="dash_sidebar">
                    <ul class="side_l">
                        <li class="lg">
                            <a href="javascript:"><img src="images/logo_d.png" alt="" /></a>
                        </li>
                        <li>
                            <a href="javascript:">
                                <div class="icon">
                                    <span><i class="fas menu_icon fa-school"></i></span>
                                </div>
                                Courses
                            </a>
                        </li>
                        <li>
                            <a href="javascript:">
                                <div class="icon">
                                    <span><i class="fas fa-sms"></i></span>
                                </div>
                                Community
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="d_cont_ar">
                    <div class="d_container">
                        <h2>Add new course</h2>
                        <div class="add_c_fr">
                            <form action="javascript:">
                                <div class="step">
                                    <h2>How about a working title?</h2>
                                    <p class="top">It's ok if you can't think of a good title now. You can change it later.</p>
                                    <div class="field">
                                        <div class="inputbox">
                                            <select>
                                                <option>Select your class</option>
                                                <option>Class 10</option>
                                                <option>Class 9</option>
                                                <option>Class 8</option>
                                                <option>Class 7</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="step">
                                    <h2>What category best fits the knowledge you'll share?</h2>
                                    <p class="top">If you're not sure about the right category, you can change it later.</p>
                                    <div class="field">
                                        <div class="inputbox">
                                            <select>
                                                <option>Choose a subject</option>
                                                <option>English</option>
                                                <option>Hindi</option>
                                                <option>Mathmatics</option>
                                                <option>Science</option>
                                                <option>Social Science</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="step">
                                    <h2>Add your class title</h2>
                                    <p class="top">If you're not sure about the right category, you can change it later.</p>
                                    <div class="field">
                                        <div class="inputbox">
                                            <input type="text" placeholder="Title" />
                                        </div>
                                    </div>
                                </div>
                                <div class="step">
                                    <h2>Add short description to define your title.</h2>
                                    <p class="top">If you're not sure about the right category, you can change it later.</p>
                                    <div class="field">
                                        <div class="inputbox">
                                            <textarea placeholder="Short Description"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div class="step">
                                    <h2>How many languages?</h2>
                                    <p class="top">If you're not sure about the right category, you can change it later.</p>
                                    <div class="field">
                                        <div class="inputbox">
                                            <DropDown list={presetList} optionLabel="" filterPlaceholder="Select Preset"  placeholder="Select Preset" selectVal={this.state.presetVal} onChangeSelect={this.presetSelect} required="true" class="inputbox"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="step">
                                    <h2>Add total duration</h2>
                                    <p class="top">If you're not sure about the right category, you can change it later.</p>
                                    <div class="field">
                                        <div class="inputbox">
                                            <input type="text" placeholder="Total duration" />
                                        </div>
                                    </div>
                                </div>
                                <div class="step">
                                    <h2>How many lecture?</h2>
                                    <p class="top">It's ok if you can't think of a good title now. You can change it later.</p>
                                    <div class="field">
                                        <div class="inputbox">
                                            <input type="text" placeholder="Total Lecture" />
                                        </div>
                                    </div>
                                </div>
                                <div class="step">
                                    <h2>Upload Image?</h2>
                                    <p class="top">It's ok if you can't think of a good title now. You can change it later.</p>
                                    <div class="field">
                                        <div class="inputbox">
                                            <div class="upl_ara sml">
                                                <div class="upl_box">
                                                    <label for="thumb_image">
                                                        <input type="file" name="user[image]" multiple="" id="thumb_image" />
                                                        <div class="drag"></div>
                                                        <img class="cl_thumb" src="" id="thumb_img" alt="" />
                                                        <button class="btndefault img_u" type="button">Upload Image</button>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="step">
                                    <h2>Upload Video?</h2>
                                    <p class="top">It's ok if you can't think of a good title now. You can change it later.</p>
                                    <div class="field">
                                        <div class="inputbox">
                                            <div class="upl_ara">
                                                <div class="upl_box">
                                                    <label for="upload_video">
                                                        <input type="file" name="user[image]" multiple="" id="upload_video" />
                                                        <button class="btndefault" type="button">Upload video</button>
                                                        <span class="note">(.eps files or jpegs that are at least 4.0 megapixels)</span>
                                                    </label>
                                                    <div class="progress">
                                                        <div class="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="c_cirriclm" id="cirriclm">
                                    <div class="ceirrclm_cont">
                                        <h2>Curriculum</h2>
                                        <div class="desc">
                                            <p>Start putting together your course by creating sections, lectures and practice (quizzes, coding exercises and assignments).</p>
                                            <p>If you’re intending to offer your course for free, the total length of video content must be less than 2 hours.</p>
                                            <ul class="cirrclm_l">
                                                <li>
                                                    <div class="icon">
                                                        <i class="fas fa-plus-square"></i>
                                                        <i class="fas w fa-times-circle"></i>
                                                    </div>
                                                    <div class="box">
                                                        <div class="title">
                                                            <h3>Lecture: 1</h3>
                                                            <div class="ic">
                                                                <i class="fa n fa-angle-down"></i>
                                                                <i class="fa y fa-angle-up"></i>
                                                            </div>
                                                        </div>
                                                        <div class="drop_ar">
                                                            <div class="uplar">
                                                                <div class="inputbox">
                                                                    <input type="text" placeholder="Enter a title" />
                                                                </div>
                                                                <div class="upl_box">
                                                                    <label for="gallery-photo-add">
                                                                        <span>Drag and drop your files here or</span>
                                                                        <input type="file" multiple="" id="gallery-photo-add" />
                                                                        <a href="javascript:" class="btndefault">Select multiple files</a>
                                                                        <span class="note">(.eps files or jpegs that are at least 4.0 megapixels)</span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        )
	}
}
export default AddNewCourse