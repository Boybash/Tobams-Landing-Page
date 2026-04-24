export default function Button({ children, onClick, className }) {
  return (
    <button
      className="bg-[#571244] font-semibold text-[18px]"
      onClick={onClick}
      className={`bg-[#571244] font-semibold text-[18px] ${className || ""}`}
    >
      {children}
    </button>
  );
}
