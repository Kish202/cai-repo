import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
// Import react-slick for carousel functionality
import Slider from 'react-slick';


export default function TestimonialSection() {
  const [isHovering, setIsHovering] = useState(null);
  const sliderRef = useRef(null);
  
  // Sample testimonial data for now, future me api s request krenge
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO, TechVision",
      image: "/api/placeholder/60/60",
      content: "Cratic AI transformed our business operations completely. The implementation was seamless and the results have been extraordinary."
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CTO, Innovate Solutions",
      image: "/api/placeholder/60/60",
      content: "Working with Cratic AI has been a game-changer for our development team. Their tools streamlined our workflow and boosted productivity."
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      role: "Product Manager, NextGen",
      image: "/api/placeholder/60/60",
      content: "The insights we've gained from Cratic AI have helped us make better strategic decisions and stay ahead of market trends."
    },
    {
      id: 4,
      name: "Alex Thompson",
      role: "Director of Operations, Quantum",
      image: "/api/placeholder/60/60",
      content: "I was skeptical at first, but Cratic AI exceeded all our expectations. Their customer support is exceptional and the product delivers results."
    },
    {
      id: 5,
      name: "Priya Patel",
      role: "Head of Marketing, GrowthX",
      image: "/api/placeholder/60/60",
      content: "Our marketing campaigns have seen a 40% increase in conversion rates since implementing Cratic AI's recommendation engine."
    }
  ];

  // Calculate how many cards to show based on screen width responsiveness liye
  const [slidesToShow, setSlidesToShow] = useState(3);
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Carousel settings for react-slick
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
    customPaging: (i) => (
      <div
        className={`h-2 w-2 rounded-full transition-all duration-300 bg-violet-800 hover:bg-violet-600 mx-1
          ${sliderRef.current?.slickCurrentSlide === i ? 'w-8 bg-violet-400' : ''}`}
      />
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <section id="testimonials" className="relative py-20 overflow-hidden bg-gradient-to-r mt-10 mb-10 md:mt-36 md:mb-36 from-black via-violet-950 to-purple-950">
      {/* Background decorative circles */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-60 h-60 bg-violet-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            <span className="bg-gradient-to-r from-violet-400 via-purple-300 to-fuchsia-500 bg-clip-text text-transparent">
              What Our Clients Say
            </span>
          </h2>
          <p className="text-violet-200/80 max-w-2xl mx-auto text-lg">
            Don't just take our word for it — hear from the businesses and individuals
            who have experienced the power of our AI solutions.
          </p>
        </div>

        <div className="relative px-4 md:px-10">
          {/* Custom Navigation Buttons */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 z-20">
            <Button
              onClick={() => sliderRef.current?.slickPrev()}
              variant="outline"
              size="icon"
              className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-black/30 border border-violet-700/50 hover:bg-violet-900/50
                text-violet-300 hover:text-white shadow-lg
                backdrop-blur-sm transition-all duration-300"
            >
              <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
            </Button>
          </div>
          
          <div className="absolute top-1/2 right-0 -translate-y-1/2 z-20">
            <Button
              onClick={() => sliderRef.current?.slickNext()}
              variant="outline"
              size="icon"
              className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-black/30 border border-violet-700/50 hover:bg-violet-900/50
                text-violet-300 hover:text-white shadow-lg
                backdrop-blur-sm transition-all duration-300"
            >
              <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
            </Button>
          </div>

          {/* React Slick Carousel */}
          <div className="mx-8 md:mx-16">
            <Slider ref={sliderRef} {...settings} className="testimonial-slider">
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className="px-3">
                  <div
                    onMouseEnter={() => setIsHovering(index)}
                    onMouseLeave={() => setIsHovering(null)}
                    className={`h-full transition-all duration-300 transform ${
                      isHovering === index ? 'scale-105 -rotate-1' : ''
                    }`}
                  >
                    <Card className="h-full  mt-3 bg-gradient-to-br from-violet-950/80 to-black/90 
                      backdrop-blur-md border border-violet-800/50 rounded-xl overflow-hidden
                      shadow-xl hover:shadow-purple-600/20
                      hover:border-violet-700/80 transition-all duration-300 px-6 py-8 flex flex-col">
                      
                      {/* Quote icon */}
                      <div className="absolute top-6 right-6 opacity-10">
                        <Quote className="h-8 w-8 text-violet-300" />
                      </div>
                      
                      {/* Client image and info */}
                      <div className="flex items-center mb-6">
                        <div className="h-14 w-14 rounded-full overflow-hidden mr-4 bg-gradient-to-br from-violet-600 to-purple-900 p-0.5">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name}
                            className="w-full h-full object-cover rounded-full"
                          />
                        </div>
                        <div>
                          <h4 className="font-bold text-lg text-white">{testimonial.name}</h4>
                          <p className="text-violet-300/90 text-sm">{testimonial.role}</p>
                        </div>
                      </div>
                      
                      {/* Testimonial content */}
                      <p className="text-violet-100/80 leading-relaxed flex-grow">
                        "{testimonial.content}"
                      </p>
                    </Card>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      
      {/* y animation liye css h */}
      <style jsx global>{`
        /* Customize the dots container */
        .testimonial-slider .slick-dots {
          bottom: -40px;
          display: flex !important;
          justify-content: center;
          align-items: center;
          gap: 8px;
        }
        
        /* Hide the default button style */
        .testimonial-slider .slick-dots li button:before {
          display: none;
        }
        
        /* Customize active dot */
        .testimonial-slider .slick-dots li.slick-active div {
          width: 32px !important;
          background-color: rgb(167, 139, 250) !important;
        }
      `}</style>
    </section>
  );
}