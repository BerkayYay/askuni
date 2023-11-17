import React from "react";
import Divider from "../Divider";

const Footer = () => {
  return (
    <footer class="bg-gray-200 pt-10 pb-10">
      <div class="mx-auto flex justify-center mb-12">
        {/* <!-- 1st Column --> */}
        <div class="flex flex-col w-64 mr-10">
          <img
            src={
              "https://www.askuni.com/_next/image/?url=%2Fimages%2Faskuni.png&w=384&q=75"
            }
            alt="Logo"
            class="mb-4"
            width={140}
          />
          <p className="text-gray-600 flex-wrap mb-4">
            Halkalı Merkez Mah. Halkalı Cad. 281/23 Zaim Teknopark No:6 34303
            Küçükçekmece/Istanbul
          </p>
          <p className="text-gray-600 flex-wrap mb-4">+90 123 456 78 90</p>
          <p className="text-gray-600 flex-wrap mb-4">info@askuni.com</p>
        </div>
        <div className="flex flex-row justify-between w-2/5 mr-10">
          {/* <!-- 2nd Column --> */}
          <div className="flex flex-col">
            <h3 className="mb-4 font-semibold text-gray-600">Navigations</h3>
            <ul className="flex flex-col text-gray-600">
              <li className="mb-4">
                <a href="#">About Us</a>
              </li>
              <li className="mb-4">
                <a href="#">Programs</a>
              </li>
              <li className="mb-4">
                <a href="#">Universities</a>
              </li>
              <li className="mb-4">
                <a href="#">Articles</a>
              </li>
              <li className="mb-4">
                <a href="#">Contact</a>
              </li>
              <li className="mb-4">
                <a href="#">Fairs</a>
              </li>
              <li>
                <a href="#">Become a Partner</a>
              </li>
            </ul>
          </div>
          {/* <!-- 3rd Column --> */}
          <div className="flex flex-col">
            <h3 className="mb-4 font-semibold text-gray-600">For Students</h3>
            <ul className="flex flex-col text-gray-600">
              <li className="mb-4">
                <a href="#">How To Apply</a>
              </li>
              <li className="mb-4">
                <a href="#">Candidate Form</a>
              </li>
            </ul>
          </div>
          {/* <!-- 4th Column --> */}
          <div className="flex flex-col">
            <h3 className="mb-4 font-semibold text-gray-600">Legal</h3>
            <ul className="flex flex-col text-gray-600">
              <li className="mb-4">
                <a href="#">Privacy Policy</a>
              </li>
              <li className="mb-4">
                <a href="#">Terms and Conditions</a>
              </li>
              <li className="mb-4">
                <a href="#">Cookie Policy</a>
              </li>
              <li className="mb-4">
                <a href="#">Disclaimer</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex justify-center w-full border-t border-gray-400 pt-4 mt-4"></div>
      <div className="text-center text-gray-500 text-16px flex flex-row w-full justify-evenly">
        <p className="text-gray-600 flex-wrap mb-4 text-center">
          © 2023- 2023 Askuni. All Rights Reserved
        </p>
        <div className="flex-row flex items-center justify-center">
          <a href="https://www.facebook.com" className="mr-2">
            Facebook
          </a>
          <a href="https://twitter.com" className="mr-2">
            Twitter
          </a>
          <a href="https://www.instagram.com" className="mr-2">
            Instagram
          </a>

          <a href="https://tr.linkedin.com">LinkedIn</a>
        </div>
      </div>
    </footer>

    // <footer className="bg-gray-800 text-white p-4 w-full">
    //   <div className="container mx-auto justify-center">
    //     <div className="flex justify-evenly items-">
    //       <div className="w-full md:w-1/4 mb-4">
    //         <h5 className="text-lg font-bold mb-2">Contact</h5>
    //         <p>
    //           Halkalı Merkez Mah. Halkalı Cad. 281/23 Zaim Teknopark No:6 34303
    //           Küçükçekmece/Istanbul
    //         </p>
    //         <p>+(90) 552 367 43 36</p>
    //         <p>info@askuni.com</p>
    //       </div>

    //       <div className="w-full md:w-1/4 mb-4">
    //         <h5 className="text-lg font-bold mb-2">Navigations</h5>
    //         <ul>
    //           <li>
    //             <a href="#about-us">About Us</a>
    //           </li>
    //           <li>
    //             <a href="#programs">Programs</a>
    //           </li>
    //           <li>
    //             <a href="#universities">Universities</a>
    //           </li>
    //           <li>
    //             <a href="#articles">Articles</a>
    //           </li>
    //           <li>
    //             <a href="#contact">Contact</a>
    //           </li>
    //           <li>
    //             <a href="#fairs">Fairs</a>
    //           </li>
    //           <li>
    //             <a href="#partner">Become a Partner</a>
    //           </li>
    //         </ul>
    //       </div>

    //       <div className="w-full md:w-1/4 mb-4">
    //         <h5 className="text-lg font-bold mb-2">For Students</h5>
    //         <ul>
    //           <li>
    //             <a href="#apply">How To Apply</a>
    //           </li>
    //           <li>
    //             <a href="#form">Candidate Form</a>
    //           </li>
    //         </ul>
    //       </div>

    //       <div className="w-full md:w-1/4 mb-4">
    //         <h5 className="text-lg font-bold mb-2">Legal</h5>
    //         <ul>
    //           <li>
    //             <a href="#privacy-policy">Privacy Policy</a>
    //           </li>
    //           <li>
    //             <a href="#terms">Terms and Conditions</a>
    //           </li>
    //           <li>
    //             <a href="#cookie-policy">Cookie Policy</a>
    //           </li>
    //           <li>
    //             <a href="#disclaimer">Disclaimer</a>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>

    //     <div className="border-t border-gray-700 pt-4 mt-4">
    //       <p>© 2023- 2023 Askuni. All Rights Reserved</p>
    //       <div className="flex mt-2">
    //         <a href="https://www.facebook.com" className="mr-2">
    //           Facebook
    //         </a>
    //         <a href="https://twitter.com" className="mr-2">
    //           Twitter
    //         </a>
    //         <a href="https://www.instagram.com" className="mr-2">
    //           Instagram
    //         </a>
    //         <a href="https://tr.linkedin.com">LinkedIn</a>
    //       </div>
    //     </div>
    //   </div>
    // </footer>
  );
};

export default Footer;
