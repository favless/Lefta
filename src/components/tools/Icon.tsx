type iconProps = {
  type?: string;
};

function Icon(props: iconProps) {
  const url = props.type
    ? `../../src/assets/svg/${props.type}.svg`
    : "app/question-mark";

  return (
    <svg
      style={{
        mask: `url("${url}") center / contain no-repeat`,
        WebkitMask: `url("${url}") center / contain no-repeats`,
      }}
    ></svg>
  );
}

export default Icon;
