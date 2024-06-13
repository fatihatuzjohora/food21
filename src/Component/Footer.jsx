

const Footer = () => {
    return (
        <div>
           <footer className="footer p-10 bg-base-200 text-base-content">
  <aside>
  <img className="w-[100px]"  src="https://i.ibb.co/mDv1cxj/2747161aedfbfcfffd1675ee9638a2e6.png" alt="" />
    <p>ipsum dolor sit amet consectetur adipisicing elit. <br />
      Officia cum nostrum excepturi nihil expedita, <br /> ipsum minima, rerum tempora <br /> nesciunt facilis error distinctio <br />molestiae deleniti dignissimos voluptas porro?</p>
  </aside> 
  <nav>
    <h6 className="footer-title">Opening Restaurant</h6> 
    <a className="link link-hover">Sat-Wet: 09:00am-10:00PM</a>
    <a className="link link-hover">Thursdayt: 09:00am-11:00PM</a>
    <a className="link link-hover">Friday: 09:00am-8:00PM</a>
  </nav> 
  <nav>
    <h6 className="footer-title">User Link</h6> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Order Delivery</a>
    <a className="link link-hover">Payment & Tex</a>
    <a className="link link-hover">Terms of Services</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Contact Us</h6> 
    <a className="link link-hover">Mohammadpur, Dhaka</a>
    <a className="link link-hover">+88 017 0000 0000</a>
    <a className="link link-hover">+88 018 0000 0000</a>
    <p className="bg-white rounded-xl p-2 flex justify-between">
  <input type='text' placeholder="Enter your email..." />
  <button className="bg-orange-400 pr-2 pl-2 rounded-xl"> / </button>
</p>
  </nav>
</footer>
        </div>
    );
};

export default Footer;