import React from 'react';
import img1 from "./assets/1.png";
import img3 from "./assets/img8.png";
function loginformop1() {
	const rightPanelActive = event => {
		event.currentTarget.classList.add("right-panel-active");
	  };
  return (
    <div class="container" id="container" onClick={rightPanelActive}>
	<div class="form-container sign-up-container">
		<form action="#">
			<h1>Login Here</h1>
			<span>Happy working!!</span>
			<input type="email" placeholder="Email" />
			<input type="password" placeholder="Password" />
			<a href="#">Forgot your password?</a>
			<button>Log In</button>
		</form>
	</div>
	<div class="form-container sign-in-container">
		<form action="#">
			<h1>Welcome!! Let's get started.</h1>
			<button class="button-ln"  onClick={rightPanelActive}>Admin Log In</button>
			<button class="button-ln" onClick={rightPanelActive}>HR Log In</button>
			<button class="button-ln" onClick={rightPanelActive}>Employee Log In</button>
		</form>
	</div>
	<div class="overlay-container">
		<div class="overlay">
			<div class="overlay-panel overlay-left">
				<img class="image1" src={img3} alt="Women working"/>
			</div>
			<div class="overlay-panel overlay-right">
				<img class="image2" src={img1} alt="Women working"/>
			</div>
		</div>
	</div>
</div>
  )
}

export default loginformop1;