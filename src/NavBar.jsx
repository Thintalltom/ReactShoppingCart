import { Component } from "react";
class NavBar extends Component{

  state= {
    img:"https://mypatricia.co/_nuxt/9f537f89a91585d5eb25df5cd34e56aa.svg",
    img1:"https://mypatricia.co/_nuxt/4478c745d855946a3b7d93c024637477.svg",
    img2:"https://images.ctfassets.net/pmphlmr7rdvc/SZok4KfbMDWe4nD1Mm5KK/7ad226d4ad540fa27ce627051b1cb8e8/Group_2341.png",
    img3: "https://images.ctfassets.net/pmphlmr7rdvc/SZok4KfbMDWe4nD1Mm5KK/7ad226d4ad540fa27ce627051b1cb8e8/Group_2341.png",
    img4: "https://mypatricia.co/_nuxt/87dc83a587628e68e9cd896525ce0915.svg"
  }
    render()
    {
        return(
        <div>
          
       
          <div className="bg">
        <nav className="navbar navbar-expand-lg text-white thisone shadow-sm sticky-top">
  <div className="container-fluid">
    <a className="navbar-brand p-2" href="#">
          <img src={this.state.img} alt="" />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
     data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
     aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse text-center justify-content-center" id="navbarSupportedContent">
      <ul className="navbar-nav  gap-5 ">

        <li className="nav-item">
          <a className="nav-link active text-white" aria-current="page" href="/#">About us</a>
        </li>

        <li className="nav-item">
          <a className="nav-link text-white" href="/#">About Ceo</a>
        </li>

      
        <li className="nav-item">
          <a className="nav-link text-white" href="/#">Product</a>
        </li>

        <li className="nav-item">
          <a className="nav-link text-white" href="/#">Learn</a>
        </li>

        <li className="nav-item">
          <a className="nav-link text-white" href="/#">Career</a>
        </li>
      </ul>
    </div> 
  </div>
</nav>
<div className="container up">
  <h1 className="text-center text-white">The one and only crypto lounge</h1>
<p className="text-center">Trade your cryptocurrency with us and have peace of mind <br />Trade your cryptocurrency with us and have peace of mind</p>
<div className="container text-center">
  <button className="btn btn-danger"> buy crypto</button>
  <button className="btn btn-danger ms-5"> buy crypto</button>
</div>
  <p className="text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora maiores fugiat labore architecto, <br /> dolor nesciunt reiciendis, 
    esse repellendus saepe sapiente blanditiis sed odit pers</p>


</div>

  <div className="leftimg">
  <img src={this.state.img2} alt="" className="leftimg d-none d-lg-block"/>
  </div>
</div>
        </div>
        );
    }

}
export default  NavBar;