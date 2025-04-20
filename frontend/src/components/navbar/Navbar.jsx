// import { useState, useEffect } from 'react';
// import { Menu } from 'lucide-react';
// import { Button } from '@/components/ui/button';

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//  const navItems = ['Features', 'Products', 'Pricing', 'About', 'Contact'];
//   // Handle scroll event to change navbar transparency
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 10) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   // Scroll to section function
//   const scrollToSection = (sectionId) => {
//     const section = document.getElementById(sectionId);
//     if (section) {
//       section.scrollIntoView({ behavior: 'smooth' });
//     }
//     setMobileMenuOpen(false);
//   };

//   return (
//     <nav
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
//         scrolled 
//           ? 'bg-black/70 backdrop-blur-md' 
//           : 'bg-gradient-to-r from-black via-violet-950 to-purple-900'
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16 md:h-20">
//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <a 
//               href="#hero" 
//               className="inline-block transition-all "
//               onClick={(e) => {
//                 e.preventDefault();
//                 scrollToSection('hero');
//               }}
//             >
//              <span className="relative z-10 text-2xl md:text-3xl font-bold 
//                 bg-gradient-to-r from-violet-600 via-purple-300 to-fuchsia-600 
//                 bg-clip-text text-transparent hover:drop-shadow-[0_0_7px_rgba(167,139,250,0.7)]
//                 transition-all duration-300 hover:scale-105">
//                 Cratic AI
//               </span>
//               {/* <div className="absolute inset-0 rounded-lg bg-black/10 opacity-0 group-hover:opacity-100 blur-md transition-opacity"></div> */}
//             </a>
//           </div>

//           {/* Desktop Menu Items */}
//           <div className="hidden md:block">
//           <div className="bg-gradient-to-r from-violet-900/40 to-purple-900/40 rounded-full px-6 py-2 
//               shadow-[inset_2px_2px_5px_rgba(0,0,0,0.7),inset_-2px_-2px_5px_rgba(255,255,255,0.1)] 
//               border border-purple-800/30 hover:border-purple-700/90 transition-all duration-300
//              hover:shadow-[inset_1px_1px_3px_rgba(0,0,0,0.5),inset_-1px_-1px_3px_rgba(255,255,255,0.08),0_-3px_6px_rgba(236,72,153,0.25)]">
//               <div className="flex space-x-8 items-center justify-center">
//                 {navItems.map((item) => (
//                   <a
//                     key={item}
//                     href="#"
//                     onClick={() => scrollToSection(item.toLowerCase())}
//                     className="text-gray-300 hover:text-white px-2 py-1  relative group"
//                   >
//                     <span className="relative z-10 hover:text-white  transition-all duration-300 hover:scale-110 inline-block p-1">{item}</span>
//                     {/* <div className="absolute inset-0 rounded-lg bg-purple-600/20 opacity-0 group-hover:opacity-100 blur-sm transition-opacity"></div> */}
//                   </a>
                  
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Sign Up Button */}
//           <div className="hidden md:block">
//   <Button 
//     variant="outline"
//     className="border-violet-900/50 text-violet-300 bg-transparent 
//       hover:bg-transparent hover:shadow-md hover:shadow-violet-300/50 
//       transition-all duration-300 hover:text-white"
//   >
//     Sign Up
//   </Button>
// </div>


//           {/* Mobile menu button */}
//           <div className="md:hidden flex items-center">
//             <button
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//               className="text-gray-300 hover:text-white p-2 rounded-lg hover:bg-purple-800/30 
//                 transition-all duration-300 shadow-[2px_2px_5px_rgba(0,0,0,0.3),-1px_-1px_3px_rgba(255,255,255,0.05)]"
//             >
//               <Menu className="h-6 w-6" />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile menu, show/hide based on menu state */}
//       {mobileMenuOpen && (
//         <div className="md:hidden bg-gradient-to-b from-black to-purple-900/90 pb-4 px-2 shadow-lg">
//           <div className="px-2 pt-2 pb-3 space-y-1 flex flex-col">
//             {['Features', 'Products', 'Pricing', 'About', 'Contact'].map((item) => (
//               <button
//                 key={item}
//                 onClick={() => scrollToSection(item.toLowerCase())}
//                 className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-base transition-all duration-300 
//                   hover:bg-purple-800/30 hover:scale-105 hover:shadow-[0_0_10px_rgba(139,92,246,0.4)]"
//               >
//                 {item}
//               </button>
//             ))}
//             <Button 
//               className="mt-3 bg-gradient-to-r from-violet-700 to-purple-600 text-white px-4 py-2 rounded-lg
//                 shadow-[2px_2px_8px_rgba(0,0,0,0.3),-2px_-2px_8px_rgba(255,255,255,0.1)] 
//                 hover:shadow-[0_0_15px_rgba(139,92,246,0.7)] hover:scale-105 
//                 transition-all duration-300 border border-purple-500/50"
//             >
//               Sign Up
//             </Button>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }

// import { useState, useEffect } from 'react';
// import { Menu, MessageCircle, Bot, Sparkles } from 'lucide-react';
// import { Button } from '@/components/ui/button';

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const navItems = ['Features', 'Products', 'Pricing', 'About', 'Contact'];
  
//   // Handle scroll event to change navbar transparency
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 10) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   // Scroll to section function
//   const scrollToSection = (sectionId) => {
//     const section = document.getElementById(sectionId);
//     if (section) {
//       section.scrollIntoView({ behavior: 'smooth' });
//     }
//     setMobileMenuOpen(false);
//   };

//   return (
//     <nav
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
//         scrolled 
//           ? 'bg-black/70 backdrop-blur-md' 
//           : 'bg-gradient-to-r from-black via-violet-950 to-purple-900'
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16 md:h-20">
//           {/* Logo with animated icons */}
//           <div className="flex-shrink-0 flex items-center">
//             {/* Floating bot icon */}
//             <div className="hidden md:block relative mr-2">
//               <Bot 
//                 className="w-6 h-6 text-purple-400 opacity-80 absolute animate-bounce" 
//                 style={{ animationDuration: '3s' }}
//               />
//             </div>
            
//             <a 
//               href="#hero" 
//               className="inline-block transition-all"
//               onClick={(e) => {
//                 e.preventDefault();
//                 scrollToSection('hero');
//               }}
//             >
//               <span className="relative z-10 text-2xl md:text-3xl font-bold 
//                 bg-gradient-to-r from-violet-600 via-purple-300 to-fuchsia-600 
//                 bg-clip-text text-transparent hover:drop-shadow-[0_0_7px_rgba(167,139,250,0.7)]
//                 transition-all duration-300 hover:scale-105">
//                 Cratic AI
//               </span>
//             </a>
            
//             {/* Pulsing sparkles icon */}
//             <div className="hidden md:block relative ml-2">
//               <Sparkles 
//                 className="w-5 h-5 text-pink-400 opacity-80 animate-pulse" 
//                 style={{ animationDuration: '2s' }}
//               />
//             </div>
//           </div>

//           {/* Desktop Menu Items */}
//           <div className="hidden md:block">
//             <div className="bg-gradient-to-r from-violet-900/40 to-purple-900/40 rounded-full px-6 py-2 
//                 shadow-[inset_2px_2px_5px_rgba(0,0,0,0.7),inset_-2px_-2px_5px_rgba(255,255,255,0.1)] 
//                 border border-purple-800/30 hover:border-purple-700/90 transition-all duration-300
//                 hover:shadow-[inset_1px_1px_3px_rgba(0,0,0,0.5),inset_-1px_-1px_3px_rgba(255,255,255,0.08),0_-3px_6px_rgba(236,72,153,0.25)]">
//               <div className="flex space-x-8 items-center justify-center">
//                 {navItems.map((item) => (
//                   <a
//                     key={item}
//                     href="#"
//                     onClick={() => scrollToSection(item.toLowerCase())}
//                     className="text-gray-300 hover:text-white px-2 py-1 relative group"
//                   >
//                     <span className="relative z-10 hover:text-white transition-all duration-300 hover:scale-110 inline-block p-1">{item}</span>
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Sign Up Button with animated message icon */}
//           <div className="hidden md:block relative">
//             <div className="absolute -left-8 top-1/2 transform -translate-y-1/2">
//               <MessageCircle 
//                 className="h-5 w-5 text-violet-400 animate-ping" 
//                 style={{ animationDuration: '3s', opacity: '0.6', animationIterationCount: 'infinite' }}
//               />
//             </div>
//             <Button 
//               variant="outline"
//               className="border-violet-900/50 text-violet-300 bg-transparent 
//                 hover:bg-transparent hover:shadow-md hover:shadow-violet-300/50 
//                 transition-all duration-300 hover:text-white"
//             >
//               Sign Up
//             </Button>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden flex items-center">
//             <button
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//               className="text-gray-300 hover:text-white p-2 rounded-lg hover:bg-purple-800/30 
//                 transition-all duration-300 shadow-[2px_2px_5px_rgba(0,0,0,0.3),-1px_-1px_3px_rgba(255,255,255,0.05)]"
//             >
//               <Menu className="h-6 w-6" />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile menu, show/hide based on menu state */}
//       {mobileMenuOpen && (
//         <div className="md:hidden bg-gradient-to-b from-black to-purple-900/90 pb-4 px-2 shadow-lg">
//           <div className="px-2 pt-2 pb-3 space-y-1 flex flex-col">
//             {['Features', 'Products', 'Pricing', 'About', 'Contact'].map((item) => (
//               <button
//                 key={item}
//                 onClick={() => scrollToSection(item.toLowerCase())}
//                 className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-base transition-all duration-300 
//                   hover:bg-purple-800/30 hover:scale-105 hover:shadow-[0_0_10px_rgba(139,92,246,0.4)]"
//               >
//                 {item}
//               </button>
//             ))}
//             <Button 
//               className="mt-3 bg-gradient-to-r from-violet-700 to-purple-600 text-white px-4 py-2 rounded-lg
//                 shadow-[2px_2px_8px_rgba(0,0,0,0.3),-2px_-2px_8px_rgba(255,255,255,0.1)] 
//                 hover:shadow-[0_0_15px_rgba(139,92,246,0.7)] hover:scale-105 
//                 transition-all duration-300 border border-purple-500/50 flex items-center gap-2"
//             >
//               <Bot className="h-4 w-4 animate-bounce" style={{ animationDuration: '2s' }} />
//               Sign Up
//             </Button>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }

import { useState, useEffect } from 'react';
import { Menu, Circle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navItems = ['Features', 'Products', 'Pricing', 'About', 'Contact'];
  
  // Handle scroll event to change navbar transparency
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Scroll to section function
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-gradient-to-r from-black/70 via-violet-950/70 to-purple-900/70 backdrop-blur-md' 
          : 'bg-gradient-to-r from-black via-violet-950 to-purple-900'
      } overflow-hidden`}
    >
      {/* Full width animations container */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        {/* Circle wavefront animation that moves left-right-left */}
        <div className="absolute top-1/4 left-0 w-6 h-6">
          <Circle 
            className="w-full h-full text-purple-400 opacity-40"
            style={{
              animation: 'moveBackAndForth 30s infinite ease-in-out'
            }}
          />
        </div>

        {/* Second circle with different timing */}
        <div className="absolute top-2/4 left-0 w-8 h-8">
          <Circle 
            className="w-full h-full text-pink-400 opacity-30"
            style={{
              animation: 'moveBackAndForth 34s 2s infinite ease-in-out'
            }}
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center relative">
            <a 
              href="#hero" 
              className="inline-block transition-all"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('hero');
              }}
            >
              <span className="relative z-10 text-2xl md:text-3xl font-bold 
                bg-gradient-to-r from-violet-600 via-purple-300 to-fuchsia-600 
                bg-clip-text text-transparent hover:drop-shadow-[0_0_7px_rgba(167,139,250,0.7)]
                transition-all duration-300 hover:scale-105">
                Cratic AI
              </span>
            </a>
          </div>

          {/* Desktop Menu Items */}
          <div className="hidden md:block">
            <div className="bg-gradient-to-r from-violet-900/40 to-purple-900/40 rounded-full px-6 py-2  md:ml-2 mr-2
                shadow-[inset_2px_2px_5px_rgba(0,0,0,0.7),inset_-2px_-2px_5px_rgba(255,255,255,0.1)] 
                border border-purple-800/30 hover:border-purple-700/90 transition-all duration-300
                hover:shadow-[inset_1px_1px_3px_rgba(0,0,0,0.5),inset_-1px_-1px_3px_rgba(255,255,255,0.08),0_-3px_6px_rgba(236,72,153,0.25)]">
              <div className="flex space-x-8 items-center justify-center">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href="#"
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-gray-300 hover:text-white px-2 py-1 relative group"
                  >
                    <span className="relative z-10 hover:text-white transition-all duration-300 hover:scale-110 inline-block p-1">{item}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Sign Up Button */}
          <div className="hidden md:block">
            <Button 
              variant="outline"
              className="border-violet-900/50 text-violet-300 bg-transparent 
                hover:bg-transparent hover:shadow-md hover:shadow-violet-300/50 
                transition-all duration-300 hover:text-white"
            >
              Sign Up
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-300 hover:text-white p-2 rounded-lg hover:bg-purple-800/30 
                transition-all duration-300 shadow-[2px_2px_5px_rgba(0,0,0,0.3),-1px_-1px_3px_rgba(255,255,255,0.05)]"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
 {mobileMenuOpen && (
  <div className="md:hidden bg-gradient-to-b from-black to-purple-900/90 pb-4 px-2 shadow-lg">
    <div className="px-2 pt-2 pb-3 space-y-1 flex flex-col items-center">
      {navItems.map((item) => (
        <button
          key={item}
          onClick={() => scrollToSection(item.toLowerCase())}
          className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-base transition-colors duration-300 
            hover:bg-purple-800/30 w-full text-center relative overflow-hidden group"
        >
          <span className="relative z-10">{item}</span>
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 
            shadow-[0_0_10px_rgba(139,92,246,0.4)] scale-105 pointer-events-none"></div>
        </button>
      ))}
      <Button 
        className="mt-3 w-52 bg-gradient-to-r from-violet-700 to-purple-600 text-white px-4 py-2 rounded-lg
          shadow-[2px_2px_8px_rgba(0,0,0,0.3),-2px_-2px_8px_rgba(255,255,255,0.1)] 
          hover:shadow-[0_0_15px_rgba(139,92,246,0.7)] group relative overflow-hidden
          transition-all duration-300 border border-purple-500/50 flex text-center gap-2"
      >
        <span className="relative z-10">Sign Up</span>
        <div className="absolute inset-0 group-hover:scale-105 transition-transform duration-300 pointer-events-none"></div>
      </Button>
    </div>
  </div>

  // y upr direct button pe hover scale se ripple effect hota h hover pe so to make it even make in group then hover on diffrent div that below it.
)}
      {/* CSS for back and forth animation */}
      <style jsx>{`
        @keyframes moveBackAndForth {
          0% { transform: translateX(0); }
          50% { transform: translateX(calc(100vw - 100%)); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </nav>
  );
}