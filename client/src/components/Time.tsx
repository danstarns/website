import { format } from "date-fns";

export interface Props {
  str?: string;
  date?: Date;
}

export function Time(props: Props) {
  let internalDate: Date = new Date();

  if (props.date) {
    internalDate = props.date;
  } else if (props.str) {
    // Safari Compat,
    const strippedDate = props.str.split(" ").join("T");
    internalDate = new Date(strippedDate);
  }

  return (
    <time
      title={`Time Posted: ${internalDate.toUTCString()}`}
      dateTime={new Date(
        internalDate.toISOString().split(" ")[0]
      ).toISOString()}
    >
      {format(internalDate, "h:mm a - MMM d, y")}
    </time>
  );
}
