import React from 'react';
import {Link} from 'react-router-dom';
import $ from 'jquery';

class DashboardHome extends React.Component{
	render()
	{
	return(
        <div class="d_cont_ar">
            <div class="d_container">
                <h2>Courses</h2>
                <div class="top_tools">
                    <div class="buttons">
                        <Link to="/dashboard/add_course" class="btndefault">New Course</Link>
                    </div>
                    <div class="searchbox">
                        <form action="javascript:;">
                            <div class="inputbox">
                                <input type="text" placeholder="Search your courses" />
                                <button type="submit"><i class="fa fa-search" aria-hidden="true"></i></button>
                            </div>
                            <div class="clearfix"></div>
                        </form>
                        <div class="clearfix"></div>
                    </div>
                </div>
                <div class="d_course_l">
                    <ul>
                        <li>
                            <div class="icon">
                                <img src="images/icon_dash_course1.png" alt="" />
                            </div>
                            <div class="info">
                                <a href="javascript:" class="edit_mng"><span>Edit / manage course</span></a>
                                <div class="box l">
                                    <p>Class 12</p>
                                    <p>DRAFT <span>Public</span></p>
                                </div>
                                <div class="box r">
                                    <div class="prog_bar">
                                        <label>Finish your course</label>
                                        <div class="bar">
                                            <span class="fill" style={{width: "5%"}}></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="icon">
                                <img src="images/icon_dash_course1.png" alt="" />
                            </div>
                            <div class="info">
                                <a href="javascript:" class="edit_mng"><span>Edit / manage course</span></a>
                                <div class="box l">
                                    <p>Class 11</p>
                                    <p>DRAFT <span>Public</span></p>
                                </div>
                                <div class="box r">
                                    <div class="prog_bar">
                                        <label>Finish your course</label>
                                        <div class="bar">
                                            <span class="fill" style={{width: "5%"}}></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="icon">
                                <img src="images/icon_dash_course1.png" alt="" />
                            </div>
                            <div class="info">
                                <a href="javascript:" class="edit_mng"><span>Edit / manage course</span></a>
                                <div class="box l">
                                    <p>Class 10</p>
                                    <p>DRAFT <span>Public</span></p>
                                </div>
                                <div class="box r">
                                    <div class="prog_bar">
                                        <label>Finish your course</label>
                                        <div class="bar">
                                            <span class="fill" style={{width: "5%"}}></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="icon">
                                <img src="images/icon_dash_course1.png" alt="" />
                            </div>
                            <div class="info">
                                <a href="javascript:" class="edit_mng"><span>Edit / manage course</span></a>
                                <div class="box l">
                                    <p>Class 9</p>
                                    <p>DRAFT <span>Public</span></p>
                                </div>
                                <div class="box r">
                                    <div class="prog_bar">
                                        <label>Finish your course</label>
                                        <div class="bar">
                                            <span class="fill" style={{width: "5%"}}></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="icon">
                                <img src="images/icon_dash_course1.png" alt="" />
                            </div>
                            <div class="info">
                                <a href="javascript:" class="edit_mng"><span>Edit / manage course</span></a>
                                <div class="box l">
                                    <p>Class 8</p>
                                    <p>DRAFT <span>Public</span></p>
                                </div>
                                <div class="box r">
                                    <div class="prog_bar">
                                        <label>Finish your course</label>
                                        <div class="bar">
                                            <span class="fill" style={{width: "5%"}}></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="icon">
                                <img src="images/icon_dash_course1.png" alt="" />
                            </div>
                            <div class="info">
                                <a href="javascript:" class="edit_mng"><span>Edit / manage course</span></a>
                                <div class="box l">
                                    <p>Class 7</p>
                                    <p>DRAFT <span>Public</span></p>
                                </div>
                                <div class="box r">
                                    <div class="prog_bar">
                                        <label>Finish your course</label>
                                        <div class="bar">
                                            <span class="fill" style={{width: "5%"}}></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        )
	}
}
export default DashboardHome