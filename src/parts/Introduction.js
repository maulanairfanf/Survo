import React from 'react';
import Logo from 'assets/images/BigLogo.png';
import Circle from 'assets/images/circle-intro.png';
import Facebook from 'assets/icon/Facebook-Icon.png';
import Twitter from 'assets/icon/Instagram-Icon.png';
import Instagram from 'assets/icon/Linkedin-Icon.png';
import Linkedin from 'assets/icon/Twitter-Icon.png';

export default function Introduction() {
  return (
    <div className="">
      <div className="flex justify-around items-center mt-10">
        <div className="font-semibold	text-3xl">
          <p>Survo merupakan layanan survei online yang</p>
          <p>memudahkan dalam melakukan riset, sehingga</p>
          <p>para peneliti bisa mendapatkan responden</p>
          <p>dengan mudah dan cepat</p>
        </div>
        <div>
          <img src={Logo} alt="Logo" />
        </div>
      </div>
      <div className="mt-10">
        <div className="flex justify-evenly items-center w-2/4">
          <a href="">
            <img src={Facebook} alt="Facebook" />
          </a>
          <a href="">
            <img src={Instagram} alt="Instagram" />
          </a>{' '}
          <a href="">
            <img src={Linkedin} alt="Linkedin" />
          </a>{' '}
          <a href="">
            <img src={Twitter} alt="Twitter" />
          </a>
        </div>
        <img className="fixed bottom-0" src={Circle} alt="" />
      </div>
    </div>
  );
}
