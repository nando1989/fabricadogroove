import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import './style.css';

const videos = [
  "https://www.youtube.com/embed/dQw4w9WgXcQ", // Exemplo
  "https://www.youtube.com/embed/3JZ_D3ELwOQ",
  "https://www.youtube.com/embed/tgbNymZ7vqY",
];

const VideoSlider = () => {
  return (
    <div>
      <div className="container-slide">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          style={{ width: "100%", maxWidth: "800px", marginTop: "150px" }}
        >
          {videos.map((videoUrl, index) => (
            <SwiperSlide key={index}>
              <div className="video-container">
                <iframe
                  src={videoUrl}
                  title={`YouTube Video ${index + 1}`}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      

      
    </div>
  );
};

export default VideoSlider;
