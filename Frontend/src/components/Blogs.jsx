import Slider from "react-slick";
import AOS from 'aos'
import 'aos/dist/aos.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BlogCard from "./BlogCard";
import { useEffect, useState } from "react";
const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Fetching blogs data
    fetch("/blogs.json")
      .then((response) => response.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.error("Error loading blogs:", error));
  
    // Initializing AOS
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, []); // The empty dependency array ensures this effect runs only once on mount
  
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
   <div className="mt-24">
    <h1 className="font-bold text-[#010d6e] text-center text-4xl">Blogs</h1>
     <div className="pt-5 h-[35vh]">
     <Slider {...settings}>
           {blogs.map((blog) => (
            <BlogCard blog = {blog} key={blog.id}/>
           ))}
          </Slider>
          
    </div>
    
   </div>
  )
}

export default Blogs
