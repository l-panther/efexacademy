					<!-- Main -->
                    <main role="main" class="w3-hide-large" id="main">
						
						<?php include 'includes/primarynav.html'; ?>

						<!-- Animate container -->
						<div class="w3-animate-left">
							<!-- Upper section -->
							<section class="upper-section">
								<p class="w3-center w3-padding-top w3-margin-bottom slogan">All your exhibition <span class="w3-hide-small">and display </span>requirements</p>
								<div class="banner">
									<img src="images/8.stand-design/banner-small.png" alt="Large print">
								</div>
							</section> <!-- End upper section -->

							<!-- Section -->
							<section class="w3-white w3-container w3-padding-bottom">
								<?php include 'views/content-stand-design.html'; ?>
							</section> <!-- End secgtion -->

							<!-- Stroke -->
							<img src="images/main/stroke.png" alt="" class="stroke">
							
							<!-- Lower section -->
							<div class="lower-section">
								<div class="w3-row-padding" >
									<div class="w3-col m6 s6">
										<img src="images/8.stand-design/image1.jpg" alt="Image">
									</div>
									<div class="w3-col m6 s6 w3-margin-bottom">
										<img src="images/8.stand-design/image2.jpg" alt="Image">
									</div>

									<div class="w3-container">
										<div class="w3-col m12 s12" id="contact">
											<?php include 'views/content-contact.html' ?>
										</div>
									</div>
								</div> 
							</div> <!-- End lower section -->
						</div> <!-- End animate container -->		
                        
                    </main> <!-- End main -->

					<!-- Large desktop -->
                    <div class="w3-hide-small w3-hide-medium" id="main-large">
                        <div class="w3-row">                      
                            <div id="left-col">
                                <div class="w3-row-padding" id="index-image">
                                    <div class="w3-col s12" id="nav-box">
                                        <div id="nav-left">
                                        <?php include 'includes/primarynav-large.html'; ?>
                                        </div>
                                        <div class="w3-display-container" id="image-right">
                                            <img src="images/8.stand-design/banner-large.png" alt="Picture" class="image1">
                                        </div>
                                    </div>
                                    <div class="w3-col m6 s6">
                                        <img src="images/8.stand-design/image1.jpg" alt="Image">
                                    </div>
                                    <div class="w3-col m6 s6">
                                        <img src="images/8.stand-design/image2.jpg" alt="Image">
                                    </div>
                                </div>
                            </div>
                            <div class="right-col">
                                <?php 
                                    include 'views/content-stand-design-large.php';
                                ?>
                            </div>
                        </div>
                    </div> <!-- End large desktop -->