export interface Props {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  defaultValue?: string;
  required: boolean;
  disabled?: boolean;
  textArea?: boolean;
}

export const className =
  "form-control sm:w-3/6 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline";

export const FormInput = (props: Props) => {
  return (
    <div>
      <label className="block font-bold mb-2">{props.label}:</label>
      {props.textArea ? (
        <textarea
          className={`${className}`}
          id={props.id}
          name={props.id}
          placeholder={props.placeholder}
          required={true}
          defaultValue={props.defaultValue}
          disabled={props.disabled}
        ></textarea>
      ) : (
        <input
          className={`${className}`}
          id={props.id}
          name={props.id}
          type={props.type}
          placeholder={props.placeholder}
          required={true}
          defaultValue={props.defaultValue}
          disabled={props.disabled}
        />
      )}
    </div>
  );
};
