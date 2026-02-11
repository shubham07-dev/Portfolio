import { useEffect, useState } from "react";

const highlights = [
 {
  img: "/h1.jpg",
  link: "https://www.linkedin.com/posts/shubham-shukla07_techforearth-innovation-sustainability-activity-7198713540357107712-peu2?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE5fEOMB81Agid0h1BC8_l14HfchM8GbhUk",
  title: "Tech on Earth Winner",
  desc: "Won the Tech on Earth competition.",
},
{
  img: "/h2.jpg",
  link: "https://www.linkedin.com/posts/shubham-shukla07_leetcode-100daysofcode-codingjourney-activity-7399454698849591296-zUwB?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE5fEOMB81Agid0h1BC8_l14HfchM8GbhUk",
  title: "100 Days of LeetCode",
  desc: "Completed 100 days of consistent DSA practice.",
},
{
  img: "/h3.jpg",
  link: "https://www.linkedin.com/posts/shubham-shukla07_kalampragati-makex-erafoundation-activity-7368336519419285505-J_Rp?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE5fEOMB81Agid0h1BC8_l14HfchM8GbhUk",
  title: "Internship Completed",
  desc: "Successfully completed internship at Era Foundation.",
},
{
  img: "/h4.jpg",
  link: "https://www.linkedin.com/posts/shubham-shukla07_googlecloud-studyjams-cloudcomputing-activity-7381675469571776512-rIdd?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE5fEOMB81Agid0h1BC8_l14HfchM8GbhUk",
  title: "GDGC Cohort Organizer",
  desc: "Organized Cohort 1 as Technical Lead.",
},
{
  img: "/h5.jpg",
  link: "https://www.linkedin.com/posts/shubham-shukla07_dsa-java-hackerrank-activity-7400542872934182916-pNaS?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE5fEOMB81Agid0h1BC8_l14HfchM8GbhUk",
  title: "Top 10 in DSA Competition",
  desc: "Secured 9th rank among 100+ students.",
},


];

export const Highlights = () => {
  const [index, setIndex] = useState(0);

  // auto change every 3 sec
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % highlights.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-6">
      {/* Title */}
    
<h3 className="
  text-3xl md:text-4xl lg:text-5xl 
  font-semibold glow-text 
  text-center
  lg:pr-4 relative right-3 md:right-10
">
  Highlights
</h3>


      {/* Card Stack */}
     <div className="relative w-full h-[420px] flex items-center justify-center right-4 md:right-10">
  {highlights.map((item, i) => {
    const position = (i - index + highlights.length) % highlights.length;

    return (
      <a
        key={i}
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className={`
          absolute w-[320px] h-[420px] rounded-3xl overflow-hidden
          bg-white/5 backdrop-blur-md
          border border-white/20
          shadow-[0_20px_60px_rgba(0,0,0,0.5)]
          transition-all duration-700 ease-in-out

          hover:scale-110 hover:shadow-[0_30px_80px_rgba(59,130,246,0.35)]
          
        ${position === 0 ? "z-40 scale-100" : ""}
${position === 1 ? "z-30 scale-95 translate-x-10 translate-y-8 opacity-80" : ""}
${position === 2 ? "z-20 scale-90 translate-x-16 translate-y-14 opacity-60" : ""}
${position === 3 ? "z-10 scale-85 translate-x-22 translate-y-20 opacity-40" : ""}
${position >= 4 ? "opacity-0 scale-75" : ""}

        `}
      >
     {/* image area */}
<div className="h-[80%] w-full bg-black flex items-center justify-center p-4">
 <img
  src={item.img}
  alt="highlight"
  className={`
    w-full h-full rounded-xl
    ${["/h3.jpg", "/h4.jpg", "/h5.jpg"].includes(item.img)
      ? "object-contain"
      : "object-cover"}
  `}
/>

</div>

<hr className="opacity-0"/>

{/* text area */}
<div className="h-[30%] p-4 bg-black">
  <h4 className="text-sm font-semibold text-white">
    {item.title}
  </h4>
  <p className="text-xs text-gray-300 mt-1">
    {item.desc}
  </p>
</div>



        {/* glowing border */}
        <div className="absolute inset-0 rounded-3xl border border-primary/30 shadow-[0_0_30px_rgba(59,130,246,0.25)]" />
      </a>
    );
  })}
</div>
    </div>
  );
};
