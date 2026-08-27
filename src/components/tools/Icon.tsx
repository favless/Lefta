type iconProps = {
  type: string;
};

function Icon(props: iconProps) {
  const url = `../../src/assets/svg/${props.type}.svg`;

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
