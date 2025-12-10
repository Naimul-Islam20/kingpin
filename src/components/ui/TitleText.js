export default function DynamicTitle({ blackText, redText, Icon, className }) {
  return (
    <h2
      className={`
        col-span-full 
        text-2xl sm:text-2xl md:text-4xl 
        font-bold md:font-bold
        text-center 
        flex items-center justify-center 
        gap-1 sm:gap-2 md:gap-3
        py-1 sm:py-3 md:py-4 
        px-2 sm:px-3 md:px-4
        ${className || ""}
      `}
    >
      <span className="text-black">{blackText}</span>
      <span className="text-red-600">{redText}</span>
      {Icon && <span className="text-red-600">{Icon}</span>}
    </h2>
  );
}
