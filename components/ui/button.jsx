export default function Button({ children, onClick, className }) {
  return (
    <button
      className="bg-[#571244] font-semibold text-[18px]"
      onClick={onClick}
      className={className}
    >
      {children}
    </button>
  );
}
