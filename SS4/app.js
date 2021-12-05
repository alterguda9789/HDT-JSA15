const components = {}

// dành cho thẻ form
components.form = `
<form style="margin: 10px 20px;">
<div class="mb-3">
  <label for="exampleInputEmail1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
  <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
</div>
<div class="mb-3">
  <label for="exampleInputPassword1" class="form-label">Password</label>
  <input type="password" class="form-control" id="exampleInputPassword1">
</div>
<div class="mb-3 form-check">
  <input type="checkbox" class="form-check-input" id="exampleCheck1">
  <label class="form-check-label" for="exampleCheck1">Check me out</label>
</div>
<button type="submit" class="btn btn-primary">Submit</button>
</form>
`


components.carousel = `
<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://s3.cloud.cmctelecom.vn/tinhte1/2010/12/2889567_games-wallpapers-1920x1080.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="https://s3.cloud.cmctelecom.vn/tinhte1/2010/12/2889567_games-wallpapers-1920x1080.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="https://s3.cloud.cmctelecom.vn/tinhte1/2010/12/2889567_games-wallpapers-1920x1080.jpg" class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
`


const div_root = document.getElementById("root");
// div_root.innerHTML = component.form;
div_root.innerHTML = components.form;