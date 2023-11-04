import React from "react";
import './Home.css';


const Slide = () => {

let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');

let lengthItems = items.length - 1;
let active = 0;

// next.onclick = function(){
//     active = active + 1 <= lengthItems ? active + 1 : 0;
//     reloadSlider();
// }
// prev.onclick = function(){
//     active = active - 1 >= 0 ? active - 1 : lengthItems;
//     reloadSlider();
// }
// let refreshInterval = setInterval(()=> {next.click()}, 3000);
// function reloadSlider(){
//     slider.style.left = -items[active].offsetLeft + 'px';
//     // 
//     let last_active_dot = document.querySelector('.slider .dots li.active');
//     last_active_dot.classList.remove('active');
//     dots[active].classList.add('active');

//     clearInterval(refreshInterval);
//     refreshInterval = setInterval(()=> {next.click()}, 3000);

    
// }

// dots.forEach((li, key) => {
//     li.addEventListener('click', ()=>{
//          active = key;
//          reloadSlider();
//     })
// })
// window.onresize = function(event) {
//     reloadSlider();
// };




    return(
        <>
        <div>
  <div className="slider">
    <div className="list">
      <div className="item">
        <img src="/img/slide_1.webp" alt="" />
      </div>
      <div className="item">
        <img src="/img/slide_2.webp" alt="" />
      </div>
      <div className="item">
        <img src="/img/slide_3.webp" alt="" />
      </div>
      <div className="item">
        <img src="/img/slide_4.webp" alt="" />
      </div>
      <div className="item">
        <img src="/img/slide_5.webp" alt="" />
      </div>
    </div>
    <div className="buttons">
      <button id="prev"> &lt; </button>
      <button id="next">&gt;</button>
    </div>
    <ul className="dots">
      <li className="active" />
      <li />
      <li />
      <li />
      <li />
    </ul>
  </div>
  <div className="section_about container">
    <div className="title">Enjoy Your Youth!</div>
    <div className="content">
      <div className="content">
        Không chỉ là thời trang, TEELAB còn là “phòng thí nghiệm” của tuổi trẻ - nơi nghiên cứu và
        cho ra đời nguồn năng lượng mang tên “Youth”. Chúng mình luôn muốn tạo nên những trải nghiệm vui vẻ,
        năng động và trẻ trung.
      </div>
    </div>
  </div>
</div>

        </>
    );
};

export default Slide;