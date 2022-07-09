
import React from 'react';


import img01 from "../Assets/images/flags/img-01.jpg";
import img02 from "../Assets/images/flags/img-02.jpg";
import img03 from "../Assets/images/flags/img-03.jpg";
import themepost_img01 from "../Assets/images/themepost/img-01.jpg"
import themepost_img02 from "../Assets/images/themepost/img-02.jpg"
import themepost_img03 from "../Assets/images/themepost/img-03.jpg"
import themepost_img04 from "../Assets/images/themepost/img-04.jpg"
import GCET_Jammu1 from "../Assets/images/GCET_Jammu1.jpg";
import logo_gcet from "../Assets/images/logo_gcet.png";

const navbar = () =>{
  return (
    <header id="tg-header" class="tg-header tg-haslayout">
			
			<div class="clearfix"></div>
			<div class="container">
				<div class="row">
					<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
						<div class="tg-logoandnoticeboard">
							<center>
								<strong class="tg-logo">
									<a href="index-2.html"><img src={logo_gcet} width="120" alt="GCET Jammu"/></a>
									<h2>Government College of Engineering & Technology</h2>
								</strong>
							</center>
							
						</div>
						<div class="tg-navigationarea">
							<nav id="tg-nav" class="tg-nav">
								<div class="navbar-header">
									<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#tg-navigation" aria-expanded="false">
										<span class="sr-only">Toggle navigation</span>
										<span class="icon-bar"></span>
										<span class="icon-bar"></span>
										<span class="icon-bar"></span>
									</button>
								</div>
								<div id="tg-navigation" class="collapse navbar-collapse tg-navigation">
									<ul>
										<li class="current-menu-item menu-item-has-children">
											<a href="javascript:void(0);">Home</a>
											<ul class="sub-menu">
												<li class="current-menu-item"><a href="index-2.html">Home V-one</a></li>
												<li><a href="index2.html">Home V-two</a></li>
												<li><a href="index3.html">Home V-three</a></li>
												<li><a href="index4.html">Home V-four</a></li>
											</ul>
										</li>
										<li class="menu-item-has-mega-menu">
											<a href="javascript:void(0);">Courses</a>
											<div class="mega-menu">
												<ul class="mega-menu-row">
													<li class="mega-menu-col">
														<a href="javascript:void(0);">Course Categories</a>
														<ul>
															<li><a href="courseslist.html">Course List</a></li>
															<li><a href="coursesgrid.html">Course gird</a></li>
															<li><a href="coursedetail.html">Course Detail</a></li>
														</ul>
													</li>
													<li class="mega-menu-col">
														<a href="javascript:void(0);">Faculties</a>
														<ul>
															<li><a href="faculties.html">faculties</a></li>
															<li><a href="facultydetail.html">faculty detail</a></li>
														</ul>
													</li>
												</ul>
												<ul class="mega-menu-row">
													<li class="mega-menu-col">
														<figure><img src={img02} alt="image description"/></figure>
														<div class="tg-textbox">
															<strong>excellent service &amp; support</strong>
															<div class="tg-description">
																<p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam quistance nostrud exercitation ullamco laboris nisi ut aliquip commodo.</p>
															</div>
															<a class="tg-btn tg-bgn-sm" href="javascript:void(0);">contact now</a>
														</div>
													</li>
												</ul>
											</div>
										</li>
										<li class="menu-item-has-mega-menu">
											<a href="javascript:void(0);">Events</a>
											<div class="mega-menu tg-fullmegamenu">
												<ul class="mega-menu-row">
													<li class="mega-menu-col">
														<div class="tg-themetabs">
															<ul class="tg-themetabnav" role="tablist">
																<li role="presentation" class="active">
																	<a href="#tg-science" aria-controls="tg-science" role="tab" data-toggle="tab">Science</a>
																</li>
																<li role="presentation">
																	<a href="#tg-management" aria-controls="tg-management" role="tab" data-toggle="tab">Management</a>
																</li>
																<li role="presentation">
																	<a href="#tg-medical" aria-controls="tg-medical" role="tab" data-toggle="tab">Medical</a>
																</li>
																<li role="presentation">
																	<a href="#tg-arts" aria-controls="tg-arts" role="tab" data-toggle="tab">Arts</a>
																</li>
																<li role="presentation">
																	<a href="#tg-informationtechnology" aria-controls="tg-informationtechnology" role="tab" data-toggle="tab">Information Technology</a>
																</li>
																<li role="presentation">
																	<a href="#tg-history" aria-controls="tg-history" role="tab" data-toggle="tab">History</a>
																</li>
																<li role="presentation">
																	<a href="#tg-economics" aria-controls="tg-economics" role="tab" data-toggle="tab">Economics</a>
																</li>
																<li role="presentation">
																	<a href="#tg-accounts" aria-controls="tg-accounts" role="tab" data-toggle="tab">Accounts</a>
																</li>
															</ul>
															<div class="tab-content tg-themetabcontent">
																<div role="tabpanel" class="tab-pane tg-tabpane active" id="tg-science">
																	<strong>Latest Science Courses</strong>
																	<div class="tg-posts">
																		<div id="tg-navtabslider" class="tg-navtabslider tg-megamenuslider owl-carousel">
																			<div class="item">
																				<article class="tg-themepost">
																					<figure class="tg-featuredimg">
																						<a href="javascript:void(0);">
																							<img src={themepost_img01} alt="image description"/>
																						</a>
																					</figure>
																					<div class="tg-themepostcontent">
																						<ul class="tg-themeposttags">
																							<li><a href="javascript:void(0);">Management</a></li>
																							<li><a href="javascript:void(0);">Science</a></li>
																						</ul>
																						<div class="tg-themeposttitle">
																							<h3><a href="eventslist.html">Become a Proffesional Teacher</a></h3>
																						</div>
																						<ul class="tg-matadata">
																							<li>
																								<a href="javascript:void(0);">
																									<i class="fa fa-user"></i>
																									<span>1205</span>
																								</a>
																							</li>
																							<li>
																								<a href="javascript:void(0);">
																									<i class="fa fa-comment-o"></i>
																									<span>1205</span>
																								</a>
																							</li>
																						</ul>
																						<span class="tg-pricebox"><a href="javascript:void(0);">$36/pm</a></span>
																					</div>
																				</article>
																			</div>
																			<div class="item">
																				<article class="tg-themepost">
																					<figure class="tg-featuredimg">
																						<a href="javascript:void(0);">
																							<img src={themepost_img02} alt="image description"/>
																						</a>
																					</figure>
																					<div class="tg-themepostcontent">
																						<ul class="tg-themeposttags">
																							<li><a href="javascript:void(0);">Management</a></li>
																							<li><a href="javascript:void(0);">Science</a></li>
																						</ul>
																						<div class="tg-themeposttitle">
																							<h3><a href="eventsgrid.html">One Day Crash Course on Skills Improvement</a></h3>
																						</div>
																						<ul class="tg-matadata">
																							<li>
																								<a href="javascript:void(0);">
																									<i class="fa fa-user"></i>
																									<span>1205</span>
																								</a>
																							</li>
																							<li>
																								<a href="javascript:void(0);">
																									<i class="fa fa-comment-o"></i>
																									<span>1205</span>
																								</a>
																							</li>
																						</ul>
																						<span class="tg-pricebox"><a href="javascript:void(0);">$36/pm</a></span>
																					</div>
																				</article>
																			</div>
																			<div class="item">
																				<article class="tg-themepost">
																					<figure class="tg-featuredimg">
																						<a href="javascript:void(0);">
																							<img src={themepost_img03} alt="image description"/>
																						</a>
																					</figure>
																					<div class="tg-themepostcontent">
																						<ul class="tg-themeposttags">
																							<li><a href="javascript:void(0);">Management</a></li>
																							<li><a href="javascript:void(0);">Science</a></li>
																						</ul>
																						<div class="tg-themeposttitle">
																							<h3><a href="eventdetail.html">Back To School, Open Discussion</a></h3>
																						</div>
																						<ul class="tg-matadata">
																							<li>
																								<a href="javascript:void(0);">
																									<i class="fa fa-user"></i>
																									<span>1205</span>
																								</a>
																							</li>
																							<li>
																								<a href="javascript:void(0);">
																									<i class="fa fa-comment-o"></i>
																									<span>1205</span>
																								</a>
																							</li>
																						</ul>
																						<span class="tg-pricebox"><a href="javascript:void(0);">$36/pm</a></span>
																					</div>
																				</article>
																			</div>
																			<div class="item">
																				<article class="tg-themepost">
																					<figure class="tg-featuredimg">
																						<a href="javascript:void(0);">
																							<img src={GCET_Jammu1} alt="image description"/>
																						</a>
																					</figure>
																					<div class="tg-themepostcontent">
																						<ul class="tg-themeposttags">
																							<li><a href="javascript:void(0);">Management</a></li>
																							<li><a href="javascript:void(0);">Science</a></li>
																						</ul>
																						<div class="tg-themeposttitle">
																							<h3><a href="eventslist.html">Make a Goal For Successful Your Life</a></h3>
																						</div>
																						<ul class="tg-matadata">
																							<li>
																								<a href="javascript:void(0);">
																									<i class="fa fa-user"></i>
																									<span>1205</span>
																								</a>
																							</li>
																							<li>
																								<a href="javascript:void(0);">
																									<i class="fa fa-comment-o"></i>
																									<span>1205</span>
																								</a>
																							</li>
																						</ul>
																						<span class="tg-pricebox"><a href="javascript:void(0);">$36/pm</a></span>
																					</div>
																				</article>
																			</div>
																			<div class="item">
																				<article class="tg-themepost">
																					<figure class="tg-featuredimg">
																						<a href="javascript:void(0);">
																							<img src={themepost_img01} alt="image description"/>
																						</a>
																					</figure>
																					<div class="tg-themepostcontent">
																						<ul class="tg-themeposttags">
																							<li><a href="javascript:void(0);">Management</a></li>
																							<li><a href="javascript:void(0);">Science</a></li>
																						</ul>
																						<div class="tg-themeposttitle">
																							<h3><a href="eventslist.html">Become a Proffesional Teacher</a></h3>
																						</div>
																						<ul class="tg-matadata">
																							<li>
																								<a href="javascript:void(0);">
																									<i class="fa fa-user"></i>
																									<span>1205</span>
																								</a>
																							</li>
																							<li>
																								<a href="javascript:void(0);">
																									<i class="fa fa-comment-o"></i>
																									<span>1205</span>
																								</a>
																							</li>
																						</ul>
																						<span class="tg-pricebox"><a href="javascript:void(0);">$36/pm</a></span>
																					</div>
																				</article>
																			</div>
																			<div class="item">
																				<article class="tg-themepost">
																					<figure class="tg-featuredimg">
																						<a href="javascript:void(0);">
																							<img src={themepost_img02} alt="image description"/>
																						</a>
																					</figure>
																					<div class="tg-themepostcontent">
																						<ul class="tg-themeposttags">
																							<li><a href="javascript:void(0);">Management</a></li>
																							<li><a href="javascript:void(0);">Science</a></li>
																						</ul>
																						<div class="tg-themeposttitle">
																							<h3><a href="eventsgrid.html">One Day Crash Course on Skills Improvement</a></h3>
																						</div>
																						<ul class="tg-matadata">
																							<li>
																								<a href="javascript:void(0);">
																									<i class="fa fa-user"></i>
																									<span>1205</span>
																								</a>
																							</li>
																							<li>
																								<a href="javascript:void(0);">
																									<i class="fa fa-comment-o"></i>
																									<span>1205</span>
																								</a>
																							</li>
																						</ul>
																						<span class="tg-pricebox"><a href="javascript:void(0);">$36/pm</a></span>
																					</div>
																				</article>
																			</div>
																		</div>
																	</div>
																</div>
																<div role="tabpanel" class="tab-pane tg-tabpane" id="tg-management">
																	<strong>Latest Management Courses</strong>
																	<div class="tg-posts">
																		<div id="tg-navtabslider" class="tg-navtabslider tg-megamenuslider owl-carousel">
																			<div class="item">
																				<article class="tg-themepost">
																					<figure class="tg-featuredimg">
																						<a href="javascript:void(0);">
																							<img src={themepost_img03} alt="image description"/>
																						</a>
																					</figure>
																					<div class="tg-themepostcontent">
																						<ul class="tg-themeposttags">
																							<li><a href="javascript:void(0);">Management</a></li>
																							<li><a href="javascript:void(0);">Science</a></li>
																						</ul>
																						<div class="tg-themeposttitle">
																							<h3><a href="eventsgrid.html">Back To School, Open Discussion</a></h3>
																						</div>
																						<ul class="tg-matadata">
																							<li>
																								<a href="javascript:void(0);">
																									<i class="fa fa-user"></i>
																									<span>1205</span>
																								</a>
																							</li>
																							<li>
																								<a href="javascript:void(0);">
																									<i class="fa fa-comment-o"></i>
																									<span>1205</span>
																								</a>
																							</li>
																						</ul>
																						<span class="tg-pricebox"><a href="javascript:void(0);">$36/pm</a></span>
																					</div>
																				</article>
																			</div>
																			<div class="item">
																				<article class="tg-themepost">
																					<figure class="tg-featuredimg">
																						<a href="javascript:void(0);">
																							<img src={themepost_img04} alt="image description"/>
																						</a>
																					</figure>
																					<div class="tg-themepostcontent">
																						<ul class="tg-themeposttags">
																							<li><a href="javascript:void(0);">Management</a></li>
																							<li><a href="javascript:void(0);">Science</a></li>
																						</ul>
																						<div class="tg-themeposttitle">
																							<h3><a href="eventdetail.html">Make a Goal For Successful Your Life</a></h3>
																						</div>
																						<ul class="tg-matadata">
																							<li>
																								<a href="javascript:void(0);">
																									<i class="fa fa-user"></i>
																									<span>1205</span>
																								</a>
																							</li>
																							<li>
																								<a href="javascript:void(0);">
																									<i class="fa fa-comment-o"></i>
																									<span>1205</span>
																								</a>
																							</li>
																						</ul>
																						<span class="tg-pricebox"><a href="javascript:void(0);">$36/pm</a></span>
																					</div>
																				</article>
																			</div>
																			<div class="item">
																				<article class="tg-themepost">
																					<figure class="tg-featuredimg">
																						<a href="javascript:void(0);">
																							<img src={themepost_img01} alt="image description"/>
																						</a>
																					</figure>
																					<div class="tg-themepostcontent">
																						<ul class="tg-themeposttags">
																							<li><a href="javascript:void(0);">Management</a></li>
																							<li><a href="javascript:void(0);">Science</a></li>
																						</ul>
																						<div class="tg-themeposttitle">
																							<h3><a href="eventslist.html">Become a Proffesional Teacher</a></h3>
																						</div>
																						<ul class="tg-matadata">
																							<li>
																								<a href="javascript:void(0);">
																									<i class="fa fa-user"></i>
																									<span>1205</span>
																								</a>
																							</li>
																							<li>
																								<a href="javascript:void(0);">
																									<i class="fa fa-comment-o"></i>
																									<span>1205</span>
																								</a>
																							</li>
																						</ul>
																						<span class="tg-pricebox"><a href="javascript:void(0);">$36/pm</a></span>
																					</div>
																				</article>
																			</div>
																			<div class="item">
																				<article class="tg-themepost">
																					<figure class="tg-featuredimg">
																						<a href="javascript:void(0);">
																							<img src={themepost_img02} alt="image description"/>
																						</a>
																					</figure>
																					<div class="tg-themepostcontent">
																						<ul class="tg-themeposttags">
																							<li><a href="javascript:void(0);">Management</a></li>
																							<li><a href="javascript:void(0);">Science</a></li>
																						</ul>
																						<div class="tg-themeposttitle">
																							<h3><a href="eventsgrid.html">One Day Crash Course on Skills Improvement</a></h3>
																						</div>
																						<ul class="tg-matadata">
																							<li>
																								<a href="javascript:void(0);">
																									<i class="fa fa-user"></i>
																									<span>1205</span>
																								</a>
																							</li>
																							<li>
																								<a href="javascript:void(0);">
																									<i class="fa fa-comment-o"></i>
																									<span>1205</span>
																								</a>
																							</li>
																						</ul>
																						<span class="tg-pricebox"><a href="javascript:void(0);">$36/pm</a></span>
																					</div>
																				</article>
																			</div>
																			<div class="item">
																				<article class="tg-themepost">
																					<figure class="tg-featuredimg">
																						<a href="javascript:void(0);">
																							<img src={themepost_img03} alt="image description"/>
																						</a>
																					</figure>
																					<div class="tg-themepostcontent">
																						<ul class="tg-themeposttags">
																							<li><a href="javascript:void(0);">Management</a></li>
																							<li><a href="javascript:void(0);">Science</a></li>
																						</ul>
																						<div class="tg-themeposttitle">
																							<h3><a href="eventsgrid.html">Back To School, Open Discussion</a></h3>
																						</div>
																						<ul class="tg-matadata">
																							<li>
																								<a href="javascript:void(0);">
																									<i class="fa fa-user"></i>
																									<span>1205</span>
																								</a>
																							</li>
																							<li>
																								<a href="javascript:void(0);">
																									<i class="fa fa-comment-o"></i>
																									<span>1205</span>
																								</a>
																							</li>
																						</ul>
																						<span class="tg-pricebox"><a href="javascript:void(0);">$36/pm</a></span>
																					</div>
																				</article>
																			</div>
																			<div class="item">
																				<article class="tg-themepost">
																					<figure class="tg-featuredimg">
																						<a href="javascript:void(0);">
																							<img src={themepost_img04} alt="image description"/>
																						</a>
																					</figure>
																					<div class="tg-themepostcontent">
																						<ul class="tg-themeposttags">
																							<li><a href="javascript:void(0);">Management</a></li>
																							<li><a href="javascript:void(0);">Science</a></li>
																						</ul>
																						<div class="tg-themeposttitle">
																							<h3><a href="eventdetail.html">Make a Goal For Successful Your Life</a></h3>
																						</div>
																						<ul class="tg-matadata">
																							<li>
																								<a href="javascript:void(0);">
																									<i class="fa fa-user"></i>
																									<span>1205</span>
																								</a>
																							</li>
																							<li>
																								<a href="javascript:void(0);">
																									<i class="fa fa-comment-o"></i>
																									<span>1205</span>
																								</a>
																							</li>
																						</ul>
																						<span class="tg-pricebox"><a href="javascript:void(0);">$36/pm</a></span>
																					</div>
																				</article>
																			</div>
																		</div>
																	</div>
																</div>
																<div role="tabpanel" class="tab-pane tg-tabpane" id="tg-medical">
																	<strong>Latest Medical Courses</strong>
																	<div class="tg-posts">
																		<div id="tg-navtabslider" class="tg-navtabslider tg-megamenuslider owl-carousel">
																			<div class="item">
																				<article class="tg-themepost">
																					<figure class="tg-featuredimg">
																						<a href="javascript:void(0);">
																							<img src={themepost_img02} alt="image description"/>
																						</a>
																					</figure>
																					<div class="tg-themepostcontent">
																						<ul class="tg-themeposttags">
																							<li><a href="javascript:void(0);">Management</a></li>
																							<li><a href="javascript:void(0);">Science</a></li>
																						</ul>
																						<div class="tg-themeposttitle">
																							<h3><a href="eventdetail.html">One Day Crash Course on Skills Improvement</a></h3>
																						</div>
																						<ul class="tg-matadata">
																							<li>
																								<a href="javascript:void(0);">
																									<i class="fa fa-user"></i>
																									<span>1205</span>
																								</a>
																							</li>
																							<li>
																								<a href="javascript:void(0);">
																									<i class="fa fa-comment-o"></i>
																									<span>1205</span>
																								</a>
																							</li>
																						</ul>
																						<span class="tg-pricebox"><a href="javascript:void(0);">$36/pm</a></span>
																					</div>
																				</article>
																			</div>
																			<div class="item">
																				<article class="tg-themepost">
																					<figure class="tg-featuredimg">
																						<a href="javascript:void(0);">
																							<img src={themepost_img03} alt="image description"/>
																						</a>
																					</figure>
																					<div class="tg-themepostcontent">
																						<ul class="tg-themeposttags">
																							<li><a href="javascript:void(0);">Management</a></li>
																							<li><a href="javascript:void(0);">Science</a></li>
																						</ul>
																						<div class="tg-themeposttitle">
																							<h3><a href="eventslist.html">Back To School, Open Discussion</a></h3>
																						</div>
																						<ul class="tg-matadata">
																							<li>
																								<a href="javascript:void(0);">
																									<i class="fa fa-user"></i>
																									<span>1205</span>
																								</a>
																							</li>
																							<li>
																								<a href="javascript:void(0);">
																									<i class="fa fa-comment-o"></i>
																									<span>1205</span>
																								</a>
																							</li>
																						</ul>
																						<span class="tg-pricebox"><a href="javascript:void(0);">$36/pm</a></span>
																					</div>
																				</article>
																			</div>
																			<div class="item">
																				<article class="tg-themepost">
																					<figure class="tg-featuredimg">
																						<a href="javascript:void(0);">
																							<img src={themepost_img01} alt="image description"/>
																						</a>
																					</figure>
																					<div class="tg-themepostcontent">
																						<ul class="tg-themeposttags">
																							<li><a href="javascript:void(0);">Management</a></li>
																							<li><a href="javascript:void(0);">Science</a></li>
																						</ul>
																						<div class="tg-themeposttitle">
																							<h3><a href="eventsgrid.html">Become a Proffesional Teacher</a></h3>
																						</div>
																						<ul class="tg-matadata">
																							<li>
																								<a href="javascript:void(0);">
																									<i class="fa fa-user"></i>
																									<span>1205</span>
																								</a>
																							</li>
																							<li>
																								<a href="javascript:void(0);">
																									<i class="fa fa-comment-o"></i>
																									<span>1205</span>
																								</a>
																							</li>
																						</ul>
																						<span class="tg-pricebox"><a href="javascript:void(0);">$36/pm</a></span>
																					</div>
																				</article>
																			</div>
																			<div class="item">
																				<article class="tg-themepost">
																					<figure class="tg-featuredimg">
																						<a href="javascript:void(0);">
																							<img src={themepost_img04} alt="image description"/>
																						</a>
																					</figure>
																					<div class="tg-themepostcontent">
																						<ul class="tg-themeposttags">
																							<li><a href="javascript:void(0);">Management</a></li>
																							<li><a href="javascript:void(0);">Science</a></li>
																						</ul>
																						<div class="tg-themeposttitle">
																							<h3><a href="eventdetail.html">Make a Goal For Successful Your Life</a></h3>
																						</div>
																						<ul class="tg-matadata">
																							<li>
																								<a href="javascript:void(0);">
																									<i class="fa fa-user"></i>
																									<span>1205</span>
																								</a>
																							</li>
																							<li>
																								<a href="javascript:void(0);">
																									<i class="fa fa-comment-o"></i>
																									<span>1205</span>
																								</a>
																							</li>
																						</ul>
																						<span class="tg-pricebox"><a href="javascript:void(0);">$36/pm</a></span>
																					</div>
																				</article>
																			</div>
																			<div class="item">
																				<article class="tg-themepost">
																					<figure class="tg-featuredimg">
																						<a href="javascript:void(0);">
																							<img src={themepost_img02} alt="image description"/>
																						</a>
																					</figure>
																					<div class="tg-themepostcontent">
																						<ul class="tg-themeposttags">
																							<li><a href="javascript:void(0);">Management</a></li>
																							<li><a href="javascript:void(0);">Science</a></li>
																						</ul>
																						<div class="tg-themeposttitle">
																							<h3><a href="eventdetail.html">One Day Crash Course on Skills Improvement</a></h3>
																						</div>
																						<ul class="tg-matadata">
																							<li>
																								<a href="javascript:void(0);">
																									<i class="fa fa-user"></i>
																									<span>1205</span>
																								</a>
																							</li>
																							<li>
																								<a href="javascript:void(0);">
																									<i class="fa fa-comment-o"></i>
																									<span>1205</span>
																								</a>
																							</li>
																						</ul>
																						<span class="tg-pricebox"><a href="javascript:void(0);">$36/pm</a></span>
																					</div>
																				</article>
																			</div>
																			<div class="item">
																				<article class="tg-themepost">
																					<figure class="tg-featuredimg">
																						<a href="javascript:void(0);">
																							<img src={themepost_img03} alt="image description"/>
																						</a>
																					</figure>
																					<div class="tg-themepostcontent">
																						<ul class="tg-themeposttags">
																							<li><a href="javascript:void(0);">Management</a></li>
																							<li><a href="javascript:void(0);">Science</a></li>
																						</ul>
																						<div class="tg-themeposttitle">
																							<h3><a href="eventslist.html">Back To School, Open Discussion</a></h3>
																						</div>
																						<ul class="tg-matadata">
																							<li>
																								<a href="javascript:void(0);">
																									<i class="fa fa-user"></i>
																									<span>1205</span>
																								</a>
																							</li>
																							<li>
																								<a href="javascript:void(0);">
																									<i class="fa fa-comment-o"></i>
																									<span>1205</span>
																								</a>
																							</li>
																						</ul>
																						<span class="tg-pricebox"><a href="javascript:void(0);">$36/pm</a></span>
																					</div>
																				</article>
																			</div>
																		</div>
																	</div>
																</div>
																<div role="tabpanel" class="tab-pane tg-tabpane" id="tg-arts">
																	<strong>Latest Arts Courses</strong>
																	<div class="tg-posts">
																		<div id="tg-navtabslider" class="tg-navtabslider tg-megamenuslider owl-carousel">
																			<div class="item">
																				<article class="tg-themepost">
																					<figure class="tg-featuredimg">
																						<a href="javascript:void(0);">
																							<img src={themepost_img01} alt="image description"/>
																						</a>
																					</figure>
																					<div class="tg-themepostcontent">
																						<ul class="tg-themeposttags">
																							<li><a href="javascript:void(0);">Management</a></li>
																							<li><a href="javascript:void(0);">Science</a></li>
																						</ul>
																						<div class="tg-themeposttitle">
																							<h3><a href="eventslist.html">Become a Proffesional Teacher</a></h3>
																						</div>
																						<ul class="tg-matadata">
																							<li>
																								<a href="javascript:void(0);">
																									<i class="fa fa-user"></i>
																									<span>1205</span>
																								</a>
																							</li>
																							<li>
																								<a href="javascript:void(0);">
																									<i class="fa fa-comment-o"></i>
																									<span>1205</span>
																								</a>
																							</li>
																						</ul>
																						<span class="tg-pricebox"><a href="javascript:void(0);">$36/pm</a></span>
																					</div>
																				</article>
																			</div>
																			<div class="item">
																				<article class="tg-themepost">
																					<figure class="tg-featuredimg">
																						<a href="javascript:void(0);">
																							<img src={themepost_img02} alt="image description"/>
																						</a>
																					</figure>
																					<div class="tg-themepostcontent">
																						<ul class="tg-themeposttags">
																							<li><a href="javascript:void(0);">Management</a></li>
																							<li><a href="javascript:void(0);">Science</a></li>
																						</ul>
																						<div class="tg-themeposttitle">
																							<h3><a href="eventsgrid.html">One Day Crash Course on Skills Improvement</a></h3>
																						</div>
																						<ul class="tg-matadata">
																							<li>
																								<a href="javascript:void(0);">
																									<i class="fa fa-user"></i>
																									<span>1205</span>
																								</a>
																							</li>
																							<li>
																								<a href="javascript:void(0);">
																									<i class="fa fa-comment-o"></i>
																									<span>1205</span>
																								</a>
																							</li>
																						</ul>
																						<span class="tg-pricebox"><a href="javascript:void(0);">$36/pm</a></span>
																					</div>
																				</article>
																			</div>
																			<div class="item">
																				<article class="tg-themepost">
																					<figure class="tg-featuredimg">
																						<a href="javascript:void(0);">
																							<img src={themepost_img03} alt="image description"/>
																						</a>
																					</figure>
																					<div class="tg-themepostcontent">
																						<ul class="tg-themeposttags">
																							<li><a href="javascript:void(0);">Management</a></li>
																							<li><a href="javascript:void(0);">Science</a></li>
																						</ul>
																						<div class="tg-themeposttitle">
																							<h3><a href="eventdetail.html">Back To School, Open Discussion</a></h3>
																						</div>
																						<ul class="tg-matadata">
																							<li>
																								<a href="javascript:void(0);">
																									<i class="fa fa-user"></i>
																									<span>1205</span>
																								</a>
																							</li>
																							<li>
																								<a href="javascript:void(0);">
																									<i class="fa fa-comment-o"></i>
																									<span>1205</span>
																								</a>
																							</li>
																						</ul>
																						<span class="tg-pricebox"><a href="javascript:void(0);">$36/pm</a></span>
																					</div>
																				</article>
																			</div>
																			<div class="item">
																				<article class="tg-themepost">
																					<figure class="tg-featuredimg">
																						<a href="javascript:void(0);">
																							<img src={themepost_img04} alt="image description"/>
																						</a>
																					</figure>
																					<div class="tg-themepostcontent">
																						<ul class="tg-themeposttags">
																							<li><a href="javascript:void(0);">Management</a></li>
																							<li><a href="javascript:void(0);">Science</a></li>
																						</ul>
																						<div class="tg-themeposttitle">
																							<h3><a href="eventdetail.html">Make a Goal For Successful Your Life</a></h3>
																						</div>
																						<ul class="tg-matadata">
																							<li>
																								<a href="javascript:void(0);">
																									<i class="fa fa-user"></i>
																									<span>1205</span>
																								</a>
																							</li>
																							<li>
																								<a href="javascript:void(0);">
																									<i class="fa fa-comment-o"></i>
																									<span>1205</span>
																								</a>
																							</li>
																						</ul>
																						<span class="tg-pricebox"><a href="javascript:void(0);">$36/pm</a></span>
																					</div>
																				</article>
																			</div>
																			<div class="item">
																				<article class="tg-themepost">
																					<figure class="tg-featuredimg">
																						<a href="javascript:void(0);">
																							<img src={themepost_img01} alt="image description"/>
																						</a>
																					</figure>
																					<div class="tg-themepostcontent">
																						<ul class="tg-themeposttags">
																							<li><a href="javascript:void(0);">Management</a></li>
																							<li><a href="javascript:void(0);">Science</a></li>
																						</ul>
																						<div class="tg-themeposttitle">
																							<h3><a href="eventslist.html">Become a Proffesional Teacher</a></h3>
																						</div>
																						<ul class="tg-matadata">
																							<li>
																								<a href="javascript:void(0);">
																									<i class="fa fa-user"></i>
																									<span>1205</span>
																								</a>
																							</li>
																							<li>
																								<a href="javascript:void(0);">
																									<i class="fa fa-comment-o"></i>
																									<span>1205</span>
																								</a>
																							</li>
																						</ul>
																						<span class="tg-pricebox"><a href="javascript:void(0);">$36/pm</a></span>
																					</div>
																				</article>
																			</div>
																			<div class="item">
																				<article class="tg-themepost">
																					<figure class="tg-featuredimg">
																						<a href="javascript:void(0);">
																							<img src={themepost_img02} alt="image description"/>
																						</a>
																					</figure>
																					<div class="tg-themepostcontent">
																						<ul class="tg-themeposttags">
																							<li><a href="javascript:void(0);">Management</a></li>
																							<li><a href="javascript:void(0);">Science</a></li>
																						</ul>
																						<div class="tg-themeposttitle">
																							<h3><a href="eventsgrid.html">One Day Crash Course on Skills Improvement</a></h3>
																						</div>
																						<ul class="tg-matadata">
																							<li>
																								<a href="javascript:void(0);">
																									<i class="fa fa-user"></i>
																									<span>1205</span>
																								</a>
																							</li>
																							<li>
																								<a href="javascript:void(0);">
																									<i class="fa fa-comment-o"></i>
																									<span>1205</span>
																								</a>
																							</li>
																						</ul>
																						<span class="tg-pricebox"><a href="javascript:void(0);">$36/pm</a></span>
																					</div>
																				</article>
																			</div>
																		</div>
																	</div>
																</div>
																<div role="tabpanel" class="tab-pane tg-tabpane" id="tg-informationtechnology">
																	<strong>Latest Information Technology Courses</strong>
																	<div class="tg-posts">
																		<div id="tg-navtabslider" class="tg-navtabslider tg-megamenuslider owl-carousel">
																			<div class="item">
																				<article class="tg-themepost">
																					<figure class="tg-featuredimg">
																						<a href="javascript:void(0);">
																							<img src={themepost_img03} alt="image description"/>
																						</a>
																					</figure>
																					<div class="tg-themepostcontent">
																						<ul class="tg-themeposttags">
																							<li><a href="javascript:void(0);">Management</a></li>
																							<li><a href="javascript:void(0);">Science</a></li>
																						</ul>
																						<div class="tg-themeposttitle">
																							<h3><a href="eventslist.html">Back To School, Open Discussion</a></h3>
																						</div>
																						<ul class="tg-matadata">
																							<li>
																								<a href="javascript:void(0);">
																									<i class="fa fa-user"></i>
																									<span>1205</span>
																								</a>
																							</li>
																							<li>
																								<a href="javascript:void(0);">
																									<i class="fa fa-comment-o"></i>
																									<span>1205</span>
																								</a>
																							</li>
																						</ul>
																						<span class="tg-pricebox"><a href="javascript:void(0);">$36/pm</a></span>
																					</div>
																				</article>
																			</div>
																			<div class="item">
																				<article class="tg-themepost">
																					<figure class="tg-featuredimg">
																						<a href="javascript:void(0);">
																							<img src={themepost_img04} alt="image description"/>
																						</a>
																					</figure>
																					<div class="tg-themepostcontent">
																						<ul class="tg-themeposttags">
																							<li><a href="javascript:void(0);">Management</a></li>
																							<li><a href="javascript:void(0);">Science</a></li>
																						</ul>
																						<div class="tg-themeposttitle">
																							<h3><a href="eventsgrid.html">Make a Goal For Successful Your Life</a></h3>
																						</div>
																						<ul class="tg-matadata">
																							<li>
																								<a href="javascript:void(0);">
																									<i class="fa fa-user"></i>
																									<span>1205</span>
																								</a>
																							</li>
																							<li>
																								<a href="javascript:void(0);">
																									<i class="fa fa-comment-o"></i>
																									<span>1205</span>
																								</a>
																							</li>
																						</ul>
																						<span class="tg-pricebox"><a href="javascript:void(0);">$36/pm</a></span>
																					</div>
																				</article>
																			</div>
																			<div class="item">
																				<article class="tg-themepost">
																					<figure class="tg-featuredimg">
																						<a href="javascript:void(0);">
																							<img src={themepost_img01} alt="image description"/>
																						</a>
																					</figure>
																					<div class="tg-themepostcontent">
																						<ul class="tg-themeposttags">
																							<li><a href="javascript:void(0);">Management</a></li>
																							<li><a href="javascript:void(0);">Science</a></li>
																						</ul>
																						<div class="tg-themeposttitle">
																							<h3><a href="eventdetail.html">Become a Proffesional Teacher</a></h3>
																						</div>
																						<ul class="tg-matadata">
																							<li>
																								<a href="javascript:void(0);">
																									<i class="fa fa-user"></i>
																									<span>1205</span>
																								</a>
																							</li>
																							<li>
																								<a href="javascript:void(0);">
																									<i class="fa fa-comment-o"></i>
																									<span>1205</span>
																								</a>
																							</li>
																						</ul>
																						<span class="tg-pricebox"><a href="javascript:void(0);">$36/pm</a></span>
																					</div>
																				</article>
																			</div>
																			<div class="item">
																				<article class="tg-themepost">
																					<figure class="tg-featuredimg">
																						<a href="javascript:void(0);">
																							<img src={themepost_img02} alt="image description"/>
																						</a>
																					</figure>
																					<div class="tg-themepostcontent">
																						<ul class="tg-themeposttags">
																							<li><a href="javascript:void(0);">Management</a></li>
																							<li><a href="javascript:void(0);">Science</a></li>
																						</ul>
																						<div class="tg-themeposttitle">
																							<h3><a href="eventslist.html">One Day Crash Course on Skills Improvement</a></h3>
																						</div>
																						<ul class="tg-matadata">
																							<li>
																								<a href="javascript:void(0);">
																									<i class="fa fa-user"></i>
																									<span>1205</span>
																								</a>
																							</li>
																							<li>
																								<a href="javascript:void(0);">
																									<i class="fa fa-comment-o"></i>
																									<span>1205</span>
																								</a>
																							</li>
																						</ul>
																						<span class="tg-pricebox"><a href="javascript:void(0);">$36/pm</a></span>
																					</div>
																				</article>
																			</div>
																			<div class="item">
																				<article class="tg-themepost">
																					<figure class="tg-featuredimg">
																						<a href="javascript:void(0);">
																							<img src={themepost_img03} alt="image description"/>
																						</a>
																					</figure>
																					<div class="tg-themepostcontent">
																						<ul class="tg-themeposttags">
																							<li><a href="javascript:void(0);">Management</a></li>
																							<li><a href="javascript:void(0);">Science</a></li>
																						</ul>
																						<div class="tg-themeposttitle">
																							<h3><a href="eventslist.html">Back To School, Open Discussion</a></h3>
																						</div>
																						<ul class="tg-matadata">
																							<li>
																								<a href="javascript:void(0);">
																									<i class="fa fa-user"></i>
																									<span>1205</span>
																								</a>
																							</li>
																							<li>
																								<a href="javascript:void(0);">
																									<i class="fa fa-comment-o"></i>
																									<span>1205</span>
																								</a>
																							</li>
																						</ul>
																						<span class="tg-pricebox"><a href="javascript:void(0);">$36/pm</a></span>
																					</div>
																				</article>
																			</div>
																			<div class="item">
																				<article class="tg-themepost">
																					<figure class="tg-featuredimg">
																						<a href="javascript:void(0);">
																							<img src={themepost_img04} alt="image description"/>
																						</a>
																					</figure>
																					<div class="tg-themepostcontent">
																						<ul class="tg-themeposttags">
																							<li><a href="javascript:void(0);">Management</a></li>
																							<li><a href="javascript:void(0);">Science</a></li>
																						</ul>
																						<div class="tg-themeposttitle">
																							<h3><a href="eventsgrid.html">Make a Goal For Successful Your Life</a></h3>
																						</div>
																						<ul class="tg-matadata">
																							<li>
																								<a href="javascript:void(0);">
																									<i class="fa fa-user"></i>
																									<span>1205</span>
																								</a>
																							</li>
																							<li>
																								<a href="javascript:void(0);">
																									<i class="fa fa-comment-o"></i>
																									<span>1205</span>
																								</a>
																							</li>
																						</ul>
																						<span class="tg-pricebox"><a href="javascript:void(0);">$36/pm</a></span>
																					</div>
																				</article>
																			</div>
																		</div>
																	</div>
																</div>
																<div role="tabpanel" class="tab-pane tg-tabpane" id="tg-history">
																	<strong>Latest History Courses</strong>
																	<div class="tg-posts">
																		<div id="tg-navtabslider" class="tg-navtabslider tg-megamenuslider owl-carousel">
																			<div class="item">
																				<article class="tg-themepost">
																					<figure class="tg-featuredimg">
																						<a href="javascript:void(0);">
																							<img src={themepost_img02} alt="image description"/>
																						</a>
																					</figure>
																					<div class="tg-themepostcontent">
																						<ul class="tg-themeposttags">
																							<li><a href="javascript:void(0);">Management</a></li>
																							<li><a href="javascript:void(0);">Science</a></li>
																						</ul>
																						<div class="tg-themeposttitle">
																							<h3><a href="eventsgrid.html">One Day Crash Course on Skills Improvement</a></h3>
																						</div>
																						<ul class="tg-matadata">
																							<li>
																								<a href="javascript:void(0);">
																									<i class="fa fa-user"></i>
																									<span>1205</span>
																								</a>
																							</li>
																							<li>
																								<a href="javascript:void(0);">
																									<i class="fa fa-comment-o"></i>
																									<span>1205</span>
																								</a>
																							</li>
																						</ul>
																						<span class="tg-pricebox"><a href="javascript:void(0);">$36/pm</a></span>
																					</div>
																				</article>
																			</div>
																			<div class="item">
																				<article class="tg-themepost">
																					<figure class="tg-featuredimg">
																						<a href="javascript:void(0);">
																							<img src={themepost_img03} alt="image description"/>
																						</a>
																					</figure>
																					<div class="tg-themepostcontent">
																						<ul class="tg-themeposttags">
																							<li><a href="javascript:void(0);">Management</a></li>
																							<li><a href="javascript:void(0);">Science</a></li>
																						</ul>
																						<div class="tg-themeposttitle">
																							<h3><a href="eventdetail.html">Back To School, Open Discussion</a></h3>
																						</div>
																						<ul class="tg-matadata">
																							<li>
																								<a href="javascript:void(0);">
																									<i class="fa fa-user"></i>
																									<span>1205</span>
																								</a>
																							</li>
																							<li>
																								<a href="javascript:void(0);">
																									<i class="fa fa-comment-o"></i>
																									<span>1205</span>
																								</a>
																							</li>
																						</ul>
																						<span class="tg-pricebox"><a href="javascript:void(0);">$36/pm</a></span>
																					</div>
																				</article>
																			</div>
																			<div class="item">
																				<article class="tg-themepost">
																					<figure class="tg-featuredimg">
																						<a href="javascript:void(0);">
																							<img src={themepost_img01} alt="image description"/>
																						</a>
																					</figure>
																					<div class="tg-themepostcontent">
																						<ul class="tg-themeposttags">
																							<li><a href="javascript:void(0);">Management</a></li>
																							<li><a href="javascript:void(0);">Science</a></li>
																						</ul>
																						<div class="tg-themeposttitle">
																							<h3><a href="eventslist.html">Become a Proffesional Teacher</a></h3>
																						</div>
																						<ul class="tg-matadata">
																							<li>
																								<a href="javascript:void(0);">
																									<i class="fa fa-user"></i>
																									<span>1205</span>
																								</a>
																							</li>
																							<li>
																								<a href="javascript:void(0);">
																									<i class="fa fa-comment-o"></i>
																									<span>1205</span>
																								</a>
																							</li>
																						</ul>
																						<span class="tg-pricebox"><a href="javascript:void(0);">$36/pm</a></span>
																					</div>
																				</article>
																			</div>
																			<div class="item">
																				<article class="tg-themepost">
																					<figure class="tg-featuredimg">
																						<a href="javascript:void(0);">
																							<img src={themepost_img04} alt="image description"/>
																						</a>
																					</figure>
																					<div class="tg-themepostcontent">
																						<ul class="tg-themeposttags">
																							<li><a href="javascript:void(0);">Management</a></li>
																							<li><a href="javascript:void(0);">Science</a></li>
																						</ul>
																						<div class="tg-themeposttitle">
																							<h3><a href="eventsgrid.html">Make a Goal For Successful Your Life</a></h3>
																						</div>
																						<ul class="tg-matadata">
																							<li>
																								<a href="javascript:void(0);">
																									<i class="fa fa-user"></i>
																									<span>1205</span>
																								</a>
																							</li>
																							<li>
																								<a href="javascript:void(0);">
																									<i class="fa fa-comment-o"></i>
																									<span>1205</span>
																								</a>
																							</li>
																						</ul>
																						<span class="tg-pricebox"><a href="javascript:void(0);">$36/pm</a></span>
																					</div>
																				</article>
																			</div>
																			<div class="item">
																				<article class="tg-themepost">
																					<figure class="tg-featuredimg">
																						<a href="javascript:void(0);">
																							<img src={themepost_img02} alt="image description"/>
																						</a>
																					</figure>
																					<div class="tg-themepostcontent">
																						<ul class="tg-themeposttags">
																							<li><a href="javascript:void(0);">Management</a></li>
																							<li><a href="javascript:void(0);">Science</a></li>
																						</ul>
																						<div class="tg-themeposttitle">
																							<h3><a href="eventsgrid.html">One Day Crash Course on Skills Improvement</a></h3>
																						</div>
																						<ul class="tg-matadata">
																							<li>
																								<a href="javascript:void(0);">
																									<i class="fa fa-user"></i>
																									<span>1205</span>
																								</a>
																							</li>
																							<li>
																								<a href="javascript:void(0);">
																									<i class="fa fa-comment-o"></i>
																									<span>1205</span>
																								</a>
																							</li>
																						</ul>
																						<span class="tg-pricebox"><a href="javascript:void(0);">$36/pm</a></span>
																					</div>
																				</article>
																			</div>
																			<div class="item">
																				<article class="tg-themepost">
																					<figure class="tg-featuredimg">
																						<a href="javascript:void(0);">
																							<img src={themepost_img03} alt="image description"/>
																						</a>
																					</figure>
																					<div class="tg-themepostcontent">
																						<ul class="tg-themeposttags">
																							<li><a href="javascript:void(0);">Management</a></li>
																							<li><a href="javascript:void(0);">Science</a></li>
																						</ul>
																						<div class="tg-themeposttitle">
																							<h3><a href="eventdetail.html">Back To School, Open Discussion</a></h3>
																						</div>
																						<ul class="tg-matadata">
																							<li>
																								<a href="javascript:void(0);">
																									<i class="fa fa-user"></i>
																									<span>1205</span>
																								</a>
																							</li>
																							<li>
																								<a href="javascript:void(0);">
																									<i class="fa fa-comment-o"></i>
																									<span>1205</span>
																								</a>
																							</li>
																						</ul>
																						<span class="tg-pricebox"><a href="javascript:void(0);">$36/pm</a></span>
																					</div>
																				</article>
																			</div>
																		</div>
																	</div>
																</div>
																<div role="tabpanel" class="tab-pane tg-tabpane" id="tg-economics">
																	<strong>Latest Economics Courses</strong>
																	<div class="tg-posts">
																		<div id="tg-navtabslider" class="tg-navtabslider tg-megamenuslider owl-carousel">
																			<div class="item">
																				<article class="tg-themepost">
																					<figure class="tg-featuredimg">
																						<a href="javascript:void(0);">
																							<img src={themepost_img03} alt="image description"/>
																						</a>
																					</figure>
																					<div class="tg-themepostcontent">
																						<ul class="tg-themeposttags">
																							<li><a href="javascript:void(0);">Management</a></li>
																							<li><a href="javascript:void(0);">Science</a></li>
																						</ul>
																						<div class="tg-themeposttitle">
																							<h3><a href="eventdetail.html">Back To School, Open Discussion</a></h3>
																						</div>
																						<ul class="tg-matadata">
																							<li>
																								<a href="javascript:void(0);">
																									<i class="fa fa-user"></i>
																									<span>1205</span>
																								</a>
																							</li>
																							<li>
																								<a href="javascript:void(0);">
																									<i class="fa fa-comment-o"></i>
																									<span>1205</span>
																								</a>
																							</li>
																						</ul>
																						<span class="tg-pricebox"><a href="javascript:void(0);">$36/pm</a></span>
																					</div>
																				</article>
																			</div>
																			<div class="item">
																				<article class="tg-themepost">
																					<figure class="tg-featuredimg">
																						<a href="javascript:void(0);">
																							<img src={themepost_img01} alt="image description"/>
																						</a>
																					</figure>
																					<div class="tg-themepostcontent">
																						<ul class="tg-themeposttags">
																							<li><a href="javascript:void(0);">Management</a></li>
																							<li><a href="javascript:void(0);">Science</a></li>
																						</ul>
																						<div class="tg-themeposttitle">
																							<h3><a href="eventslist.html">Become a Proffesional Teacher</a></h3>
																						</div>
																						<ul class="tg-matadata">
																							<li>
																								<a href="javascript:void(0);">
																									<i class="fa fa-user"></i>
																									<span>1205</span>
																								</a>
																							</li>
																							<li>
																								<a href="javascript:void(0);">
																									<i class="fa fa-comment-o"></i>
																									<span>1205</span>
																								</a>
																							</li>
																						</ul>
																						<span class="tg-pricebox"><a href="javascript:void(0);">$36/pm</a></span>
																					</div>
																				</article>
																			</div>
																			<div class="item">
																				<article class="tg-themepost">
																					<figure class="tg-featuredimg">
																						<a href="javascript:void(0);">
																							<img src={themepost_img02} alt="image description"/>
																						</a>
																					</figure>
																					<div class="tg-themepostcontent">
																						<ul class="tg-themeposttags">
																							<li><a href="javascript:void(0);">Management</a></li>
																							<li><a href="javascript:void(0);">Science</a></li>
																						</ul>
																						<div class="tg-themeposttitle">
																							<h3><a href="eventsgrid.html">One Day Crash Course on Skills Improvement</a></h3>
																						</div>
																						<ul class="tg-matadata">
																							<li>
																								<a href="javascript:void(0);">
																									<i class="fa fa-user"></i>
																									<span>1205</span>
																								</a>
																							</li>
																							<li>
																								<a href="javascript:void(0);">
																									<i class="fa fa-comment-o"></i>
																									<span>1205</span>
																								</a>
																							</li>
																						</ul>
																						<span class="tg-pricebox"><a href="javascript:void(0);">$36/pm</a></span>
																					</div>
																				</article>
																			</div>
																			<div class="item">
																				<article class="tg-themepost">
																					<figure class="tg-featuredimg">
																						<a href="javascript:void(0);">
																							<img src={themepost_img04} alt="image description"/>
																						</a>
																					</figure>
																					<div class="tg-themepostcontent">
																						<ul class="tg-themeposttags">
																							<li><a href="javascript:void(0);">Management</a></li>
																							<li><a href="javascript:void(0);">Science</a></li>
																						</ul>
																						<div class="tg-themeposttitle">
																							<h3><a href="eventdetail.html">Make a Goal For Successful Your Life</a></h3>
																						</div>
																						<ul class="tg-matadata">
																							<li>
																								<a href="javascript:void(0);">
																									<i class="fa fa-user"></i>
																									<span>1205</span>
																								</a>
																							</li>
																							<li>
																								<a href="javascript:void(0);">
																									<i class="fa fa-comment-o"></i>
																									<span>1205</span>
																								</a>
																							</li>
																						</ul>
																						<span class="tg-pricebox"><a href="javascript:void(0);">$36/pm</a></span>
																					</div>
																				</article>
																			</div>
																			<div class="item">
																				<article class="tg-themepost">
																					<figure class="tg-featuredimg">
																						<a href="javascript:void(0);">
																							<img src={themepost_img03} alt="image description"/>
																						</a>
																					</figure>
																					<div class="tg-themepostcontent">
																						<ul class="tg-themeposttags">
																							<li><a href="javascript:void(0);">Management</a></li>
																							<li><a href="javascript:void(0);">Science</a></li>
																						</ul>
																						<div class="tg-themeposttitle">
																							<h3><a href="eventdetail.html">Back To School, Open Discussion</a></h3>
																						</div>
																						<ul class="tg-matadata">
																							<li>
																								<a href="javascript:void(0);">
																									<i class="fa fa-user"></i>
																									<span>1205</span>
																								</a>
																							</li>
																							<li>
																								<a href="javascript:void(0);">
																									<i class="fa fa-comment-o"></i>
																									<span>1205</span>
																								</a>
																							</li>
																						</ul>
																						<span class="tg-pricebox"><a href="javascript:void(0);">$36/pm</a></span>
																					</div>
																				</article>
																			</div>
																			<div class="item">
																				<article class="tg-themepost">
																					<figure class="tg-featuredimg">
																						<a href="javascript:void(0);">
																							<img src={themepost_img01} alt="image description"/>
																						</a>
																					</figure>
																					<div class="tg-themepostcontent">
																						<ul class="tg-themeposttags">
																							<li><a href="javascript:void(0);">Management</a></li>
																							<li><a href="javascript:void(0);">Science</a></li>
																						</ul>
																						<div class="tg-themeposttitle">
																							<h3><a href="eventslist.html">Become a Proffesional Teacher</a></h3>
																						</div>
																						<ul class="tg-matadata">
																							<li>
																								<a href="javascript:void(0);">
																									<i class="fa fa-user"></i>
																									<span>1205</span>
																								</a>
																							</li>
																							<li>
																								<a href="javascript:void(0);">
																									<i class="fa fa-comment-o"></i>
																									<span>1205</span>
																								</a>
																							</li>
																						</ul>
																						<span class="tg-pricebox"><a href="javascript:void(0);">$36/pm</a></span>
																					</div>
																				</article>
																			</div>
																		</div>
																	</div>
																</div>
																<div role="tabpanel" class="tab-pane tg-tabpane" id="tg-accounts">
																	<strong>Latest Accounts Courses</strong>
																	<div class="tg-posts">
																		<div id="tg-navtabslider" class="tg-navtabslider tg-megamenuslider owl-carousel">
																			<div class="item">
																				<article class="tg-themepost">
																					<figure class="tg-featuredimg">
																						<a href="javascript:void(0);">
																							<img src={themepost_img01} alt="image description"/>
																						</a>
																					</figure>
																					<div class="tg-themepostcontent">
																						<ul class="tg-themeposttags">
																							<li><a href="javascript:void(0);">Management</a></li>
																							<li><a href="javascript:void(0);">Science</a></li>
																						</ul>
																						<div class="tg-themeposttitle">
																							<h3><a href="eventslist.html">Become a Proffesional Teacher</a></h3>
																						</div>
																						<ul class="tg-matadata">
																							<li>
																								<a href="javascript:void(0);">
																									<i class="fa fa-user"></i>
																									<span>1205</span>
																								</a>
																							</li>
																							<li>
																								<a href="javascript:void(0);">
																									<i class="fa fa-comment-o"></i>
																									<span>1205</span>
																								</a>
																							</li>
																						</ul>
																						<span class="tg-pricebox"><a href="javascript:void(0);">$36/pm</a></span>
																					</div>
																				</article>
																			</div>
																			<div class="item">
																				<article class="tg-themepost">
																					<figure class="tg-featuredimg">
																						<a href="javascript:void(0);">
																							<img src={themepost_img02} alt="image description"/>
																						</a>
																					</figure>
																					<div class="tg-themepostcontent">
																						<ul class="tg-themeposttags">
																							<li><a href="javascript:void(0);">Management</a></li>
																							<li><a href="javascript:void(0);">Science</a></li>
																						</ul>
																						<div class="tg-themeposttitle">
																							<h3><a href="eventsgrid.html">One Day Crash Course on Skills Improvement</a></h3>
																						</div>
																						<ul class="tg-matadata">
																							<li>
																								<a href="javascript:void(0);">
																									<i class="fa fa-user"></i>
																									<span>1205</span>
																								</a>
																							</li>
																							<li>
																								<a href="javascript:void(0);">
																									<i class="fa fa-comment-o"></i>
																									<span>1205</span>
																								</a>
																							</li>
																						</ul>
																						<span class="tg-pricebox"><a href="javascript:void(0);">$36/pm</a></span>
																					</div>
																				</article>
																			</div>
																			<div class="item">
																				<article class="tg-themepost">
																					<figure class="tg-featuredimg">
																						<a href="javascript:void(0);">
																							<img src={themepost_img03} alt="image description"/>
																						</a>
																					</figure>
																					<div class="tg-themepostcontent">
																						<ul class="tg-themeposttags">
																							<li><a href="javascript:void(0);">Management</a></li>
																							<li><a href="javascript:void(0);">Science</a></li>
																						</ul>
																						<div class="tg-themeposttitle">
																							<h3><a href="eventdetail.html">Back To School, Open Discussion</a></h3>
																						</div>
																						<ul class="tg-matadata">
																							<li>
																								<a href="javascript:void(0);">
																									<i class="fa fa-user"></i>
																									<span>1205</span>
																								</a>
																							</li>
																							<li>
																								<a href="javascript:void(0);">
																									<i class="fa fa-comment-o"></i>
																									<span>1205</span>
																								</a>
																							</li>
																						</ul>
																						<span class="tg-pricebox"><a href="javascript:void(0);">$36/pm</a></span>
																					</div>
																				</article>
																			</div>
																			<div class="item">
																				<article class="tg-themepost">
																					<figure class="tg-featuredimg">
																						<a href="javascript:void(0);">
																							<img src={themepost_img04} alt="image description"/>
																						</a>
																					</figure>
																					<div class="tg-themepostcontent">
																						<ul class="tg-themeposttags">
																							<li><a href="javascript:void(0);">Management</a></li>
																							<li><a href="javascript:void(0);">Science</a></li>
																						</ul>
																						<div class="tg-themeposttitle">
																							<h3><a href="eventslist.html">Make a Goal For Successful Your Life</a></h3>
																						</div>
																						<ul class="tg-matadata">
																							<li>
																								<a href="javascript:void(0);">
																									<i class="fa fa-user"></i>
																									<span>1205</span>
																								</a>
																							</li>
																							<li>
																								<a href="javascript:void(0);">
																									<i class="fa fa-comment-o"></i>
																									<span>1205</span>
																								</a>
																							</li>
																						</ul>
																						<span class="tg-pricebox"><a href="javascript:void(0);">$36/pm</a></span>
																					</div>
																				</article>
																			</div>
																			<div class="item">
																				<article class="tg-themepost">
																					<figure class="tg-featuredimg">
																						<a href="javascript:void(0);">
																							<img src={themepost_img01} alt="image description"/>
																						</a>
																					</figure>
																					<div class="tg-themepostcontent">
																						<ul class="tg-themeposttags">
																							<li><a href="javascript:void(0);">Management</a></li>
																							<li><a href="javascript:void(0);">Science</a></li>
																						</ul>
																						<div class="tg-themeposttitle">
																							<h3><a href="eventslist.html">Become a Proffesional Teacher</a></h3>
																						</div>
																						<ul class="tg-matadata">
																							<li>
																								<a href="javascript:void(0);">
																									<i class="fa fa-user"></i>
																									<span>1205</span>
																								</a>
																							</li>
																							<li>
																								<a href="javascript:void(0);">
																									<i class="fa fa-comment-o"></i>
																									<span>1205</span>
																								</a>
																							</li>
																						</ul>
																						<span class="tg-pricebox"><a href="javascript:void(0);">$36/pm</a></span>
																					</div>
																				</article>
																			</div>
																			<div class="item">
																				<article class="tg-themepost">
																					<figure class="tg-featuredimg">
																						<a href="javascript:void(0);">
																							<img src={themepost_img02} alt="image description"/>
																						</a>
																					</figure>
																					<div class="tg-themepostcontent">
																						<ul class="tg-themeposttags">
																							<li><a href="javascript:void(0);">Management</a></li>
																							<li><a href="javascript:void(0);">Science</a></li>
																						</ul>
																						<div class="tg-themeposttitle">
																							<h3><a href="eventsgrid.html">One Day Crash Course on Skills Improvement</a></h3>
																						</div>
																						<ul class="tg-matadata">
																							<li>
																								<a href="javascript:void(0);">
																									<i class="fa fa-user"></i>
																									<span>1205</span>
																								</a>
																							</li>
																							<li>
																								<a href="javascript:void(0);">
																									<i class="fa fa-comment-o"></i>
																									<span>1205</span>
																								</a>
																							</li>
																						</ul>
																						<span class="tg-pricebox"><a href="javascript:void(0);">$36/pm</a></span>
																					</div>
																				</article>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</li>
												</ul>
											</div>
										</li>
										<li><a data-new="new" href="results.html">Results</a></li>
										<li class="menu-item-has-children">
											<a href="javascript:void(0);">Admissions</a>
											<ul class="sub-menu">
												<li><a href="admissions.html">Admissions</a></li>
												<li><a href="admissionsdetail.html">Admission Detail</a></li>
											</ul>
										</li>
										<li class="menu-item-has-children">
											<a href="javascript:void(0);">Depts</a>
											<ul class="sub-menu">
												<li><a href="departments.html">Departments</a></li>
												<li><a href="departmentdetail.html">Department Detail</a></li>
											</ul>
										</li>
										<li><a href="campuses.html">Campuses</a></li>
										<li class="menu-item-has-children">
											<a href="javascript:void(0);">Contact us</a>
											<ul class="sub-menu">
												<li><a href="contactusvone.html">Contact us V-one</a></li>
												<li><a href="contactusvtwo.html">Contact us V-two</a></li>
											</ul>
										</li>
										<li class="menu-item-has-children">
											<a href="javascript:void(0);">Pages</a>
											<ul class="sub-menu">
												<li class="menu-item-has-children">
													<a href="javascript:void(0);">About University</a>
													<ul class="sub-menu">
														<li><a href="aboutcampuslife.html">Our Campus Life</a></li>
														<li><a href="abouthonorsawards.html">Our Honor &amp; Awards</a></li>
														<li><a href="aboutleadership.html">Our Leadership</a></li>
														<li><a href="aboutobjectives.html">OurObjectives</a></li>
														<li><a href="aboutouridentity.html">Our Identity</a></li>
														<li><a href="aboutrectormessage.html">Rector Message</a></li>
														<li><a href="aboutvisionmission.html">Our Missions</a></li>
													</ul>
												</li>
												<li class="menu-item-has-children">
													<a href="javascript:void(0);">News</a>
													<ul class="sub-menu">
														<li><a href="newslist.html">News List</a></li>
														<li><a href="newsgrid.html">News Grid</a></li>
														<li><a href="newsgridsidebar.html">News Grid Sidebar</a></li>
														<li><a href="newsdetail.html">News Detail</a></li>
													</ul>
												</li>
												<li class="menu-item-has-children">
													<a href="javascript:void(0);">Our Jobs</a>
													<ul class="sub-menu">
														<li><a href="jobs.html">Jobs</a></li>
														<li><a href="jobdetail.html">Job Detail</a></li>
													</ul>
												</li>
												<li class="menu-item-has-children">
													<a href="javascript:void(0);">Others</a>
													<ul class="sub-menu">
														<li><a href="gallery.html">gallary</a></li>
														<li><a href="faqs.html">FAQ</a></li>
														<li><a href="404error.html">404 Error</a></li>
														<li><a href="comingsoon.html">coming soon</a></li>
													</ul>
												</li>
											</ul>
										</li>
									</ul>
								</div>
							</nav>
							<div class="tg-searchbox">
								<a id="tg-btnsearch" class="tg-btnsearch" href="javascript:void(0);"><i class="icon-magnifier"></i></a>
								<form class="tg-formtheme tg-formsearch">
									<fieldset><input type="search" name="search" class="form-control" placeholder="Start Your Search Here"/></fieldset>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
  );
}
export default navbar;
