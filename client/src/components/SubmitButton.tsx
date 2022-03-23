export interface Props {
  disabled?: boolean;
  text: string;
}

export function SubmitButton(props: Props) {
  return (
    <button
      className="
        bg-black 
        hover:bg-lightgrey 
        text-white 
        hover:text-black 
        border
        border-white 
        hover:border-black 
        font-bold 
        py-2 
        px-4 
        rounded 
        focus:bg-lightgrey 
        focus:text-black
        "
      type="submit"
      disabled={props.disabled}
    >
      {props.text}
    </button>
  );
}
