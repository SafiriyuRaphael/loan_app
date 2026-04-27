type Props = {
  text: string;
  variant: "primary" | "secondary";
  onClick?: () => void;
  disabled?: boolean;
};

function Buttons({ text, variant, onClick }: Props) {
  return (
    <div>
      <button
        className={`rounded-3xl px-3 py-2 font-semibold transition-all duration-300 ${
          variant === "primary"
            ? "bg-green-700 text-white hover:bg-green-600 shadow-md hover:shadow-lg"
            : "border-2 border-green-700 text-green-700 hover:bg-green-700 hover:text-white"
        }`}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
}

export default Buttons;
