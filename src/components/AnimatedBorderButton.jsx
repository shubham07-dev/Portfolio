export const AnimatedBorderButton = ({ children }) => {
  return (
    <a href="https://github.com/shubham07-dev" target="_blank">
    <button
      className="
         relative px-8 py-4 rounded-full text-lg font-medium
        border-2 border-primary text-foreground
        transition-all duration-300
        hover:border-primary hover:shadow-[0_0_20px_rgba(59,130,246,0.6)]
        hover:scale-105
        active:scale-95
        cursor-pointer
      "
    >
      {children}
    </button>
    </a>
  );
};
