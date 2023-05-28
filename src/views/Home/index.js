import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Home.scss";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation, FreeMode } from "swiper";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";

function Home() {
  const [inputText, setInputText] = useState("");
  const [neonColor, setNeonColor] = useState("#faeddf");
  const [neonFont, setNeonFont] = useState("Audrey Sans");
  const [neonSize, setNeonSize] = useState(2);
  const [isNeon, setNeon] = useState(true);
  const [cutType, setCutType] = useState("rectangle");
  const [neonHeight, setNeonHeight] = useState("40cm");
  const [neonWidth, setNeonWidth] = useState("80cm");
  const [isWaterProof, setWaterProof] = useState("no");
  const [dimmer, setDimmer] = useState("yes");
  const [sizeStandard, setSizeStandard] = useState("large");
  const [isScrolled, setScrolled] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [isFullScreen, setFullScreen] = useState(false);
  const PreLoader = useRef(null);
  const bannerSection = useRef(null);
  const customizeSection = useRef(null);
  const customizeSection1 = useRef(null);
  const customizeSection2 = useRef(null);
  const customizeSection3 = useRef(null);
  const customizeSection4 = useRef(null);
  const finalSection = useRef(null);

  const inputRef = useRef(null);

  useEffect(() => {
    PreLoader.current.style.display = "none";

    let inputTxt = localStorage.getItem("inputTxt");

    const { query } = require("url").parse(document.location.href, true);
    let text = query["text"];
    setInputText(text ? text : inputTxt);
    inputRef.current.focus();
  }, []);

  function handleTextChange(event) {
    setInputText(event.target.value);
    autoResize(event);
    localStorage.setItem("inputTxt", event.target.value);
  }

  const colorSliderRef = useRef(null);

  function handleThumbs(id) {
    console.log("colorSliderRef :: ", colorSliderRef, "id ::", id);
    colorSliderRef.go(id);
  }

  function handleColorSlideChange(newIndex, prevIndex, destIndex) {
    let colorIdx = colors && prevIndex.slideIndex % colors.length;
    let currentColor = colors[colorIdx] && colors[colorIdx].color;
    setNeonColor(currentColor);
  }

  function handleFontSlideChange(event) {
    let fontIdx = event.realIndex;
    let currentFont = fonts[fontIdx];
    setNeonFont(currentFont);
  }

  function handleFontSizeChange(event) {
    setNeonSize(event.target.value);
  }

  function autoResize(event) {
    let targetInput = event.target;
    targetInput.style.height = "auto";
    targetInput.style.height = targetInput.scrollHeight - 20 + "px";
  }

  function textAreaAdjust(event) {
    let targetInput = event.target;
    console.log("targetInput.scrollHeight ", targetInput.scrollHeight);
    if (event.key === "Enter") {
      if (targetInput.scrollHeight < 145) {
        targetInput.style.height = "1px";
        targetInput.style.height = 5 + targetInput.scrollHeight + "px";
      }
    } else if (event.key === "Backspace") {
      if (targetInput.scrollHeight > 60) {
        targetInput.style.height = "1px";
        targetInput.style.height = 5 - targetInput.scrollHeight + "px";
      }
    }
  }

  function getShadow(color, type, shadowType) {
    let shadow = "";
    if (shadowType === "rectangle") {
      shadow = `0px 6px 61px -38px ${color}`;
      // shadow = `#fff 0px 0px 0.1rem, ${color} 0px 0px 0.1rem, ${color} 0px 0px 0.1rem, ${color} 0px 0px 0.1rem, ${color} 0px 0px 0.1rem`;
    } else {
      if (type === "text") {
        shadow = `0 0 0.3rem #fff, 0 0 0.8rem ${color}, 0 0 1.1rem ${color},
            0 0 1.8rem ${color}, 0 0 3.2rem ${color}`;
      } else {
        shadow = `0 0 0.2rem #fff, 0 0 2rem ${color}, 0 0 0.8rem ${color},
            0 0 2.8rem ${color}, inset 0 0 0.4rem ${color}`;
      }
    }

    if (shadowType === "waterProof") {
      console.log("waterproof", shadowType);
      shadow = `3px 3px 2px ${color} !important`;
    }

    return shadow;
  }

  function handleSectionScroll(ref) {
    ref.current.scrollIntoView({ behavior: "smooth" });
  }

  // function handleSubSectionScroll() {
  //   setScrolled(true)
  //   setTimeout(() => {
  //     setScrolled(false)
  //   }, 1000)
  // }

  //   function handleSubSectionScroll(e) {
  //     setScrolled(true)
  //     var atSnappingPoint = e.target.scrollLeft % e.target.offsetWidth === 0;
  //     var timeOut         = atSnappingPoint ? 0 : 150; //see notes

  //     clearTimeout(e.target.scrollTimeout); //clear previous timeout

  //     e.target.scrollTimeout = setTimeout(function() {
  //         setScrolled(false)
  //     }, timeOut);
  // }

  function handleInputFocus() {
    handleSectionScroll(bannerSection);
    setTimeout(() => inputRef.current.focus(), 500);
  }

  const colors = [
    {
      name: "White",
      color: "#faeddf",
    },
    {
      name: "Cool White",
      color: "#dbf1ff",
    },
    {
      name: "Yellow",
      color: "#fdfd4a",
    },
    {
      name: "Orange",
      color: "#f5b034",
    },
    {
      name: "Gold",
      color: "#f88a0a",
    },
    {
      name: "Red",
      color: "#fd0847",
    },
    {
      name: "Hot Pink",
      color: "#f602ee",
    },
    {
      name: "Baby Pink",
      color: "#fe7adc",
    },
    {
      name: "Purple",
      color: "#9200f1",
    },
    {
      name: "Blue",
      color: "#054bec",
    },
    {
      name: "Ice Blue",
      color: "#02f5f2",
    },
    {
      name: "Green",
      color: "#02ef38",
    },
  ];

  const fonts = [
    "Audrey Sans",
    "BEON",
    "Bristol Signature",
    "Cosmopolitan Sans",
    "Cosmopolitan Script",
    "Crystal Sky",
    "Dream Catchers Sans",
    "Marquee Moon",
    "Qulliness",
    "Rodagear",
    "Saturday Champagne",
    "Scarlette",
    "Star Rabit Script",
    "Vontage",
    "WildySign",
  ];

  function toggleFullScreen(type) {
    let userAgent = navigator.userAgent;
    if (type === "enable") {
      setFullScreen(true);

      if (userAgent.match(/chrome|chromium|crios/i)) {
        document.body.webkitRequestFullscreen();
      } else if (userAgent.match(/firefox|fxios/i)) {
        document.body.mozRequestFullScreen();
      } else if (userAgent.match(/safari/i)) {
        document.body.webkitRequestFullscreen();
      } else if (userAgent.match(/opr\//i)) {
        document.body.webkitRequestFullscreen();
      } else if (userAgent.match(/edg/i)) {
        document.body.msRequestFullscreen();
      }
    } else {
      setFullScreen(false);
      if (userAgent.match(/chrome|chromium|crios/i)) {
        document.webkitExitFullscreen();
      } else if (userAgent.match(/firefox|fxios/i)) {
        document.mozCancelFullScreen();
      } else if (userAgent.match(/safari/i)) {
        document.webkitExitFullscreen();
      } else if (userAgent.match(/opr\//i)) {
        document.webkitExitFullscreen();
      } else if (userAgent.match(/edg/i)) {
        document.msExitFullscreen();
      }
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    let customUrl = `https://neonnights.co.nz/thankyou?text=${inputText}&color=${neonColor}&font=${neonFont}&size=${sizeStandard}&firstName=${firstName}&lastName=${lastName}&email=${email}`;
    console.log("customUrl :: ", customUrl);
    setTimeout(() => {
      window.open(customUrl, "_self");
    }, 500);
  }
  return (
    <div className="home">
      <div className="fullscreen-wrapper">
        {!isFullScreen ? (
          <svg
            onClick={() => toggleFullScreen("enable")}
            xmlns="http://www.w3.org/2000/svg"
            width="512"
            height="512"
            enableBackground="new 0 0 512 512"
            viewBox="0 0 24 24"
          >
            <path
              fill="#fff"
              d="M21 9a1 1 0 01-1-1V4h-4a1 1 0 010-2h4a2 2 0 012 2v4a1 1 0 01-1 1zm-1 13h-4a1 1 0 010-2h4v-4a1 1 0 012 0v4a2 2 0 01-2 2zM8 22H4a2 2 0 01-2-2v-4a1 1 0 012 0v4h4a1 1 0 010 2zM3 9a1 1 0 01-1-1V4a2 2 0 012-2h4a1 1 0 010 2H4v4a1 1 0 01-1 1z"
              data-name="Layer 6"
              data-original="#000000"
            ></path>
          </svg>
        ) : (
          <svg
            onClick={() => toggleFullScreen("disable")}
            xmlns="http://www.w3.org/2000/svg"
            width="512"
            height="512"
            enableBackground="new 0 0 512 512"
            viewBox="0 0 469.333 469.333"
          >
            <path
              fill="#fff"
              d="M160 0h-21.333A10.66 10.66 0 00128 10.667V128H10.667A10.66 10.66 0 000 138.667V160a10.66 10.66 0 0010.667 10.667H160A10.66 10.66 0 00170.667 160V10.667A10.66 10.66 0 00160 0zm298.667 128H341.333V10.667A10.66 10.66 0 00330.667 0h-21.333a10.66 10.66 0 00-10.667 10.667V160a10.66 10.66 0 0010.667 10.667h149.333A10.66 10.66 0 00469.334 160v-21.333A10.662 10.662 0 00458.667 128zm0 170.667H309.333a10.66 10.66 0 00-10.667 10.667v149.333a10.66 10.66 0 0010.667 10.667h21.333a10.66 10.66 0 0010.667-10.667V341.333h117.333a10.66 10.66 0 0010.667-10.667v-21.333a10.66 10.66 0 00-10.666-10.666zm-298.667 0H10.667A10.66 10.66 0 000 309.333v21.333a10.66 10.66 0 0010.667 10.667H128v117.333a10.66 10.66 0 0010.667 10.667H160a10.66 10.66 0 0010.667-10.667V309.333A10.66 10.66 0 00160 298.667z"
              data-original="#000000"
            ></path>
          </svg>
        )}
      </div>
      <div ref={PreLoader} className="preloader-wrapper">
        <div className="preload">
          <div className="preload-status">
            <div className="preload-status-bar"></div>
            <div className="preload-status-info">LOADING</div>
          </div>
        </div>
      </div>
      <section id="section1" ref={bannerSection} className="banner">
        <div className="section-heading">
          <h1 className="neon">Design your own custom neon sign!</h1>
          <p>
            Click the neon text <br />
            to type your sign message
          </p>
        </div>
        <div className="input-wrapper">
          <textarea
            type="text"
            placeholder={
              window.innerWidth > 980
                ? "Click here to start typing"
                : "Your custom text:"
            }
            ref={inputRef}
            name="inputText"
            value={inputText}
            // onKeyUp={textAreaAdjust}
            onChange={handleTextChange}
          />
        </div>
        <a
          onClick={() => handleSectionScroll(customizeSection)}
          className="scroll-btn"
        >
          <span></span>Scroll
        </a>
      </section>

      <section
        id="customize"
        ref={customizeSection}
        className={isNeon ? `customize-section` : "customize-section white"}
      >
        <div className="neonText-Container">
          <div className={`text-wrapper`} onDoubleClick={handleInputFocus}>
            <span
              style={{
                textShadow: isNeon
                  ? isWaterProof === "yes"
                    ? getShadow(neonColor, "text", "waterProof")
                    : getShadow(neonColor, "text")
                  : getShadow(neonColor, "text"),
                fontFamily: neonFont,
                fontSize:
                  inputText &&
                  (inputText.length > 70
                    ? `${neonSize / 2}cm`
                    : inputText.length > 50
                    ? `${neonSize / 1.7}cm`
                    : `${neonSize}cm`),
                color: isNeon ? "#ffffff" : "#f9f9fa",
              }}
            >
              {inputText}
            </span>
            <div className="hover-text">Double click to edit</div>
          </div>
        </div>
        <div className="sub-sectionContainer">
          <div className="sub-section">
            <div className="inner-container">
              <div id="colorSlides" className="slider-container color-slider">
                <Splide
                  ref={colorSliderRef}
                  options={{
                    rewind: true,
                    gap: "20px",
                    type: "loop",
                    drag: "free",
                    perPage: 9,
                    focus: "center",
                    arrows: true,
                    keyboard: true,
                    slideFocus: false,
                    isNavigation: true,
                    pagination: false,
                    breakpoints: {
                      // when window width is >= 425px
                      425: {
                        perPage: 4,
                      },
                      // when window width is >= 640px
                      640: {
                        perPage: 4,
                      },
                      // when window width is >= 768px
                      768: {
                        perPage: 5,
                      },
                      // when window width is >= 1024px
                      1024: {
                        perPage: 7,
                      },
                    },
                  }}
                  onActive={(newIndex, prevIndex, destIndex) =>
                    handleColorSlideChange(newIndex, prevIndex, destIndex)
                  }
                >
                  {React.Children.toArray(
                    colors.map((item, idx) => (
                      <SplideSlide className={`neon-slide slide-${idx}`}>
                        <div
                          className="neon-text"
                          style={{
                            textShadow: getShadow(item.color, "text"),
                          }}
                        >
                          {item.name}
                        </div>
                        <div
                          className="neon-box"
                          style={{
                            boxShadow: getShadow(item.color, "box"),
                          }}
                        ></div>
                      </SplideSlide>
                    ))
                  )}
                </Splide>
              </div>
            </div>
            <a
              onClick={() => handleSectionScroll(customizeSection1)}
              className="scroll-btn sub"
            >
              <span></span>Scroll
            </a>
          </div>
          <div ref={customizeSection1} className="sub-section">
            <div className="inner-container slider-inner-container">
              <div className="slider-container">
                <Swiper
                  slidesPerView={7}
                  spaceBetween={20}
                  slidesPerGroup={1}
                  loop={true}
                  loopFillGroupWithBlank={true}
                  navigation={true}
                  centeredSlides={true}
                  modules={[Navigation]}
                  onSlideChange={handleFontSlideChange}
                  slideToClickedSlide={true}
                  className="mySwiper fonts-Slider"
                  breakpoints={{
                    // when window width is >= 320px
                    320: {
                      slidesPerView: 2,
                    },
                    // when window width is >= 425px
                    425: {
                      slidesPerView: 4,
                    },
                    // when window width is >= 640px
                    640: {
                      slidesPerView: 4,
                    },
                    // when window width is >= 768px
                    768: {
                      slidesPerView: 5,
                    },
                    // when window width is >= 1024px
                    1024: {
                      slidesPerView: 7,
                    },
                  }}
                >
                  {React.Children.toArray(
                    fonts.map((item, idx) => (
                      <SwiperSlide className="neon-slide">
                        <div
                          className="neon-text font"
                          style={{
                            textShadow: getShadow(neonColor, "text"),
                            fontFamily: item,
                          }}
                        >
                          {item}
                        </div>
                        <div
                          className="item-number"
                          style={{
                            textShadow: getShadow(neonColor, "text"),
                            color: "#fff",
                            fontFamily: item,
                          }}
                        >
                          {idx + 1}
                        </div>
                      </SwiperSlide>
                    ))
                  )}
                </Swiper>
              </div>
            </div>
            <a
              onClick={() => handleSectionScroll(customizeSection2)}
              className="scroll-btn sub"
            >
              <span></span>Scroll
            </a>
          </div>

          {/*<div ref={customizeSection2} className="sub-section">
            <div className="inner-container">
              <h1 className="customize-title center">
                Specify your preferred method for cutting the backboard?
              </h1>

              <ul className="cut-boxes morphism  pd-extra">
                <li className="cut-box" onClick={() => setCutType("rectangle")}>
                  {cutType === "rectangle" ? (
                    <svg
                      version="1.1"
                      width="512"
                      height="512"
                      x="0"
                      y="0"
                      viewBox="0 0 52 52"
                      style={{ enableBackground: "new 0 0 512 512" }}
                    >
                      <g>
                        <g>
                          <path
                            d="M26,0C11.664,0,0,11.663,0,26s11.664,26,26,26s26-11.663,26-26S40.336,0,26,0z M40.495,17.329l-16,18
                        C24.101,35.772,23.552,36,22.999,36c-0.439,0-0.88-0.144-1.249-0.438l-10-8c-0.862-0.689-1.002-1.948-0.312-2.811
                        c0.689-0.863,1.949-1.003,2.811-0.313l8.517,6.813l14.739-16.581c0.732-0.826,1.998-0.9,2.823-0.166
                        C41.154,15.239,41.229,16.503,40.495,17.329z"
                            fill="#ffffff"
                            data-original="#ffffff"
                          ></path>
                        </g>
                      </g>
                    </svg>
                  ) : (
                    <svg
                      version="1.1"
                      width="512"
                      height="512"
                      x="0"
                      y="0"
                      viewBox="0 0 52 52"
                      style={{ enableBackground: "new 0 0 512 512" }}
                    >
                      <g>
                        <g>
                          <path
                            d="M26,0C11.664,0,0,11.663,0,26s11.664,26,26,26s26-11.663,26-26S40.336,0,26,0z M26,50C12.767,50,2,39.233,2,26
		S12.767,2,26,2s24,10.767,24,24S39.233,50,26,50z"
                            fill="#f9f9fa"
                            data-original="#f9f9fa"
                          ></path>
                          <path
                            d="M38.252,15.336l-15.369,17.29l-9.259-7.407c-0.43-0.345-1.061-0.274-1.405,0.156c-0.345,0.432-0.275,1.061,0.156,1.406
		l10,8C22.559,34.928,22.78,35,23,35c0.276,0,0.551-0.114,0.748-0.336l16-18c0.367-0.412,0.33-1.045-0.083-1.411
		C39.251,14.885,38.62,14.922,38.252,15.336z"
                            fill="#f9f9fa"
                            data-original="#f9f9fa"
                          ></path>
                        </g>
                      </g>
                    </svg>
                  )}

                  <span>Rectangle</span>
                </li>

                <li className="cut-box" onClick={() => setCutType("contour")}>
                  {cutType === "contour" ? (
                    <svg
                      version="1.1"
                      width="512"
                      height="512"
                      x="0"
                      y="0"
                      viewBox="0 0 52 52"
                      style={{ enableBackground: "new 0 0 512 512" }}
                    >
                      <g>
                        <g>
                          <path
                            d="M26,0C11.664,0,0,11.663,0,26s11.664,26,26,26s26-11.663,26-26S40.336,0,26,0z M40.495,17.329l-16,18
                        C24.101,35.772,23.552,36,22.999,36c-0.439,0-0.88-0.144-1.249-0.438l-10-8c-0.862-0.689-1.002-1.948-0.312-2.811
                        c0.689-0.863,1.949-1.003,2.811-0.313l8.517,6.813l14.739-16.581c0.732-0.826,1.998-0.9,2.823-0.166
                        C41.154,15.239,41.229,16.503,40.495,17.329z"
                            fill="#ffffff"
                            data-original="#ffffff"
                          ></path>
                        </g>
                      </g>
                    </svg>
                  ) : (
                    <svg
                      version="1.1"
                      width="512"
                      height="512"
                      x="0"
                      y="0"
                      viewBox="0 0 52 52"
                      style={{ enableBackground: "new 0 0 512 512" }}
                    >
                      <g>
                        <g>
                          <path
                            d="M26,0C11.664,0,0,11.663,0,26s11.664,26,26,26s26-11.663,26-26S40.336,0,26,0z M26,50C12.767,50,2,39.233,2,26
		S12.767,2,26,2s24,10.767,24,24S39.233,50,26,50z"
                            fill="#f9f9fa"
                            data-original="#f9f9fa"
                          ></path>
                          <path
                            d="M38.252,15.336l-15.369,17.29l-9.259-7.407c-0.43-0.345-1.061-0.274-1.405,0.156c-0.345,0.432-0.275,1.061,0.156,1.406
		l10,8C22.559,34.928,22.78,35,23,35c0.276,0,0.551-0.114,0.748-0.336l16-18c0.367-0.412,0.33-1.045-0.083-1.411
		C39.251,14.885,38.62,14.922,38.252,15.336z"
                            fill="#f9f9fa"
                            data-original="#f9f9fa"
                          ></path>
                        </g>
                      </g>
                    </svg>
                  )}

                  <span>Contour</span>
                </li>
              </ul>
            </div>
            <a
              onClick={() => handleSectionScroll(finalSection)}
              className="scroll-btn sub"
            >
              <span></span>Scroll
            </a>
                  </div> */}

          {/*  ###Note : Commented the Code For the Future Build  */}
          {/*<div ref={customizeSection3} className="sub-section">
            <div className="inner-container">
              <h1 className="customize-title center">Add On :</h1>
            </div>
            <div className="row  addOn-row pd-extra">
              <div className="addOn-box">
                <h1 className="customize-title">Waterproof?</h1>
                <div className="switch-field">
                  <div className="radio-box">
                    <input
                      type="radio"
                      id="waterProof1"
                      name="waterProof"
                      value="yes"
                      checked={isWaterProof === "yes"}
                      onChange={() => setWaterProof("yes")}
                    />
                    <label htmlFor="waterProof1">
                      <span>Yes</span>
                    </label>
                  </div>
                  <div className="radio-box">
                    <input
                      type="radio"
                      id="waterProof2"
                      name="waterProof"
                      value="no"
                      checked={isWaterProof === "no"}
                      onChange={() => setWaterProof("no")}
                    />
                    <label htmlFor="waterProof2">
                      <span>No</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="addOn-box">
                <h1 className="customize-title">Dimmer?</h1>
                <div className="switch-field">
                  <div className="radio-box">
                    <input
                      type="radio"
                      id="neonLights1"
                      name="neonLights"
                      value="colored"
                      checked={dimmer === "yes"}
                      onChange={() => setDimmer("yes")}
                    />
                    <label htmlFor="neonLights1">
                      <span>Yes</span>
                    </label>
                  </div>
                  <div className="radio-box">
                    <input
                      type="radio"
                      id="neonLights2"
                      name="neonLights"
                      value="white"
                      checked={dimmer === "no"}
                      onChange={() => setDimmer("no")}
                    />
                    <label htmlFor="neonLights2">
                      <span>No</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <a
              onClick={() => handleSectionScroll(customizeSection4)}
              className="scroll-btn sub"
            >
              <span></span>Scroll
            </a>
                  </div>*/}
        </div>
      </section>

      {/*  ###Note : Commented the Code For the Future Build  */}
      {/*<section
        ref={customizeSection4}
        className={
          isNeon
            ? "customize-section other-sections"
            : "customize-section other-sections white"
        }
      >
        <div className="neonText-Container">
          <div className="toggle-button-cover light-btn">
            <div className="button-cover">
              <div className="button r" id="button-1">
                <input
                  type="checkbox"
                  className="checkbox"
                  checked={isNeon}
                  onClick={() => setNeon(!isNeon)}
                />
                <div className="knobs"></div>
                <div className="layer"></div>
              </div>
            </div>
          </div>
          <div className={`text-wrapper`}>
            <span
              style={{
                // textShadow: isNeon
                //   ? getShadow(
                //       tubeSelection === "colored" ? neonColor : "#faeddf",
                //       "text"
                //     )
                //   : "none",
                fontFamily: neonFont,
                fontSize:
                  inputText && inputText.length > 70
                    ? `${neonSize / 2}cm`
                    : `${neonSize}cm`,
                color: isNeon ? "#ffffff" : "#000000",
                // opacity: isNeon ? "1" : "0.6",
                height: 40,
              }}
              // ref={ref}
              // style={{ fontSize, height: 40, width: 100 }}
            >
              <div className="size-length left">{neonHeight}</div>
              {inputText}
              <div className="size-length bottom">{neonWidth}</div>
            </span>
          </div>
        </div>
        <div className="sub-section">
          <div className="inner-container">
            <h1 className="customize-title">Select Size :</h1>

            <ul className="cut-boxes  pd-extra">
              <li
                className={
                  sizeStandard === "small" ? "cut-box checked" : "cut-box"
                }
                onClick={() => {
                  setSizeStandard("small");
                  setNeonHeight("20cm");
                  setNeonSize(1.6);
                }}
              >
                <span>Small</span>
              </li>
              <li
                className={
                  sizeStandard === "medium" ? "cut-box checked" : "cut-box"
                }
                onClick={() => {
                  setSizeStandard("medium");
                  setNeonHeight("30cm");
                  setNeonSize(1.8);
                }}
              >
                <span>Medium</span>
              </li>
              <li
                className={
                  sizeStandard === "large" ? "cut-box checked" : "cut-box"
                }
                onClick={() => {
                  setSizeStandard("large");
                  setNeonHeight("40cm");
                  setNeonSize(2);
                }}
              >
                <span>Large</span>
              </li>
              <li
                className={
                  sizeStandard === "extraLarge" ? "cut-box checked" : "cut-box"
                }
                onClick={() => {
                  setSizeStandard("extraLarge");
                  setNeonHeight("50cm");
                  setNeonSize(2.2);
                }}
              >
                <span>Extra Large</span>
              </li>
              <li
                className={
                  sizeStandard === "massive" ? "cut-box checked" : "cut-box"
                }
                onClick={() => {
                  setSizeStandard("massive");
                  setNeonHeight("60cm");
                  setNeonSize(2.4);
                }}
              >
                <span>Massive</span>
              </li>
              <li
                className={sizeStandard ? "cut-box checked" : "cut-box"}
                onClick={() =>
                  sizeStandard === "small"
                    ? setSizeStandard("")
                    : setSizeStandard("small")
                }
              >
                {sizeStandard === "small" ? (
                  <svg
                    version="1.1"
                    width="512"
                    height="512"
                    x="0"
                    y="0"
                    viewBox="0 0 52 52"
                    style={{ enableBackground: "new 0 0 512 512" }}
                  >
                    <g>
                      <g>
                        <path
                          d="M26,0C11.664,0,0,11.663,0,26s11.664,26,26,26s26-11.663,26-26S40.336,0,26,0z M40.495,17.329l-16,18
                        C24.101,35.772,23.552,36,22.999,36c-0.439,0-0.88-0.144-1.249-0.438l-10-8c-0.862-0.689-1.002-1.948-0.312-2.811
                        c0.689-0.863,1.949-1.003,2.811-0.313l8.517,6.813l14.739-16.581c0.732-0.826,1.998-0.9,2.823-0.166
                        C41.154,15.239,41.229,16.503,40.495,17.329z"
                          fill="#ffffff"
                          data-original="#ffffff"
                        ></path>
                      </g>
                    </g>
                  </svg>
                ) : (
                  <svg
                    version="1.1"
                    width="512"
                    height="512"
                    x="0"
                    y="0"
                    viewBox="0 0 52 52"
                    style={{ enableBackground: "new 0 0 512 512" }}
                  >
                    <g>
                      <g>
                        <path
                          d="M26,0C11.664,0,0,11.663,0,26s11.664,26,26,26s26-11.663,26-26S40.336,0,26,0z M26,50C12.767,50,2,39.233,2,26
		S12.767,2,26,2s24,10.767,24,24S39.233,50,26,50z"
                          fill="#f9f9fa"
                          data-original="#f9f9fa"
                        ></path>
                        <path
                          d="M38.252,15.336l-15.369,17.29l-9.259-7.407c-0.43-0.345-1.061-0.274-1.405,0.156c-0.345,0.432-0.275,1.061,0.156,1.406
		l10,8C22.559,34.928,22.78,35,23,35c0.276,0,0.551-0.114,0.748-0.336l16-18c0.367-0.412,0.33-1.045-0.083-1.411
		C39.251,14.885,38.62,14.922,38.252,15.336z"
                          fill="#f9f9fa"
                          data-original="#f9f9fa"
                        ></path>
                      </g>
                    </g>
                  </svg>
                )}

                <span>Small</span>
                </li>
            </ul>
          </div>
        </div>
        <a
          onClick={() => handleSectionScroll(finalSection)}
          className="scroll-btn sub"
        >
          <span></span>Scroll
        </a>
      </section>
              */}

      {/* <section className="other-sections customize-section">
        <div className="neonText-Container">
          <div className="toggle-button-cover light-btn">
            <div className="button-cover">
              <div className="button r" id="button-1">
                <input
                  type="checkbox"
                  className="checkbox"
                  checked={isNeon}
                  onClick={() => setNeon(!isNeon)}
                />
                <div className="knobs"></div>
                <div className="layer"></div>
              </div>
            </div>
          </div>
          <div className={`text-wrapper`}>
            <span
              style={{
                // textShadow: isNeon
                //   ? getShadow(
                //       tubeSelection === "colored" ? neonColor : "#faeddf",
                //       "text"
                //     )
                //   : "none",
                fontFamily: neonFont,
                fontSize:
                  inputText.length > 70 ? `${neonSize / 2}cm` : `${neonSize}cm`,
                color: isNeon ? "#ffffff" : "#f9f9fa",
                opacity: isNeon ? "1" : "0.6",
                height: 40,
              }}
              // ref={ref}
              // style={{ fontSize, height: 40, width: 100 }}
            >
              {inputText}
            </span>
          </div>
        </div>
        <div className="sub-section">
          <div className="inner-container">
            <h1 className="customize-title">What text size would you like?</h1>
            <div className="rangeSlider-container">
              <input
                type="range"
                min="2"
                max="8"
                value={neonSize}
                className="rangeSlider"
                id="myRange"
                onChange={handleFontSizeChange}
              />

              <span className="customize-title size-title">
                Size : {neonSize}cm
              </span>
            </div>
          </div>
        </div>
            </section> */}

      <section ref={finalSection} className="form-section">
        <div
          className={
            isNeon
              ? "neonText-Container customize-section other-sections"
              : "neonText-Container customize-section other-sections white"
          }
        >
          <div className="toggle-button-cover light-btn">
            <div className="button-cover">
              <div className="button r" id="button-1">
                <input
                  type="checkbox"
                  className="checkbox"
                  checked={isNeon}
                  onClick={() => setNeon(!isNeon)}
                />
                <div className="knobs"></div>
                <div className="layer"></div>
              </div>
            </div>
          </div>
          <div className={`text-wrapper`}>
            <span
              style={{
                textShadow: getShadow(neonColor, "text"),
                fontFamily: neonFont,
                fontSize:
                  inputText &&
                  (inputText.length > 70
                    ? `${neonSize / 2}cm`
                    : inputText.length > 50
                    ? `${neonSize / 1.7}cm`
                    : `${neonSize}cm`),
              }}
            >
              {inputText}
            </span>
          </div>

          <div className="sub-section">
            <div className="inner-container">
              <h1 className="customize-title center">
                What size would you like the sign to be?
              </h1>

              <ul className="cut-boxes  pd-extra">
                <li
                  className={
                    sizeStandard === "small" ? "cut-box checked" : "cut-box"
                  }
                  onClick={() => {
                    setSizeStandard("small");
                    setNeonHeight("20cm");
                    setNeonSize(1.6);
                  }}
                >
                  <span>Small</span>
                </li>
                <li
                  className={
                    sizeStandard === "medium" ? "cut-box checked" : "cut-box"
                  }
                  onClick={() => {
                    setSizeStandard("medium");
                    setNeonHeight("30cm");
                    setNeonSize(1.8);
                  }}
                >
                  <span>Medium</span>
                </li>
                <li
                  className={
                    sizeStandard === "large" ? "cut-box checked" : "cut-box"
                  }
                  onClick={() => {
                    setSizeStandard("large");
                    setNeonHeight("40cm");
                    setNeonSize(2);
                  }}
                >
                  <span>Large</span>
                </li>
                <li
                  className={
                    sizeStandard === "extraLarge"
                      ? "cut-box checked"
                      : "cut-box"
                  }
                  onClick={() => {
                    setSizeStandard("extraLarge");
                    setNeonHeight("50cm");
                    setNeonSize(2.2);
                  }}
                >
                  <span>Extra Large</span>
                </li>
                <li
                  className={
                    sizeStandard === "massive" ? "cut-box checked" : "cut-box"
                  }
                  onClick={() => {
                    setSizeStandard("massive");
                    setNeonHeight("60cm");
                    setNeonSize(2.4);
                  }}
                >
                  <span>Massive</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <form className="neonForm" onSubmit={handleSubmit}>
          <div className="row">
            <div className="form-group col-6">
              <label htmlFor="firstName">
                First Name <span>*</span>
              </label>
              <input
                id="firstName"
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div className="form-group col-6">
              <label htmlFor="lastName">Last Name</label>
              <input
                id="lastName"
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group col-12">
            <label htmlFor="email">
              Email <span>*</span>
            </label>
            <input
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          {/*  ###Note : Commented the Code For the Future Build  */}
          {/* <div className="form-group col-12">
            <label htmlFor="fileUpload">
              Have reference pictures? Upload them here
            </label>
            <input id="fileUpload" type="file" />
                </div> */}
          <div className="form-group col-12">
            <input className="cbutton" type="submit" value="Build my sign!" />
          </div>
        </form>
      </section>
    </div>
  );
}

export default Home;
