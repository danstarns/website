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

  const timeStr = internalDate.toLocaleTimeString();
  const dateStr = internalDate.toLocaleDateString();

  return (
    <time
      title={`Time Posted: ${internalDate.toUTCString()}`}
      dateTime={new Date(
        internalDate.toISOString().split(" ")[0]
      ).toISOString()}
    >
      {dateStr} - {timeStr}
    </time>
  );
}
