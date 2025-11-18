export default function DynamicTitle({ blackText, redText, Icon, className }) {
  return (
    <h2
      className={`col-span-full text-3xl font-semibold text-center flex items-center justify-center gap-2 ${
        className || ""
      }`}
    >
      <span className="text-black">{blackText}</span>
      <span className="text-red-600">{redText}</span>
      {Icon && <span className="text-red-600">{Icon}</span>}
    </h2>
  );
}
