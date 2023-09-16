import "./App.css";
import { useEffect, useState } from "react";

export default function App() {
  const images = [
    {
      image_url:"https://img4.hkrtcdn.com/30204/bnr_3020363_m.jpg",
      caption: "Image 1"
    },
    {
      image_url:
        "https://img8.hkrtcdn.com/30056/bnr_3005537_m.jpg",
      caption: "Image 2"
    },
    {
      image_url:
        "https://img2.hkrtcdn.com/30154/bnr_3015391_m.jpg",
      caption: "Image 3"
    },
    {
      image_url:"https://img6.hkrtcdn.com/30114/bnr_3011395_m.jpg",
      caption: "Image 4"
    }
  ];

  return (
    <div className="App">
      <SlideShow images={images} />
    </div>
  );
}

const SlideShow = ({ images }) => {
  const [active, setActive] = useState(0);

  const onNext = () => {
    if (active < images.length - 1) {
      setActive(active + 1);
    }
  };

  const onPrev = () => {
    if (active > 0) {
      setActive(active - 1);
    }
  };

  useEffect(()=>{
const interval = setInterval(()=>{
if(active<images.length-1)
{
  setActive(active+1)
}
else{
  setActive(0)
}

},1000)
return(()=>{
  clearInterval(interval)
})
  },[active])
  return (
    <div className="slideshow">
      {images.map((e, i) => (
        <Slide {...e} key={e.caption} active={i === active} />
      ))}
      <div className="bulleted-navigation">
        {images.map((e, i) => (
          <div
            className={`dot ${i === active ? "active" : ""}`}
            key={e.caption}
            onClick={() => setActive(i)}
          />
        ))}
      </div>
      <div className="next-prev-navigation">
        <div className="navigation next" onClick={onNext}>
          &gt;
        </div>
        <div className="navigation prev" onClick={onPrev}>
          &lt;
        </div>
      </div>
    </div>
  );
};

const Slide = ({ image_url, caption, active }) => {
  return (
    <div className={`slide ${active ? "active" : ""}`}>
      <img src={image_url} alt={caption} />
      <span>{caption}</span>
    </div>
  );
};
