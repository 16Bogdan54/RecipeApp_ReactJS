export const Instruction = ({ instruction }) => {
  let h =
    Object.values(instruction).length !== 0
      ? "Instruction"
      : "Instruction wasn't added yet";

  return (
    <>
      <h4>{h}</h4>
      <ol>
        {Object.values(instruction).map((step, index) => {
          return (
            <li className="my-2" key={index}>
              {step.display_text}
            </li>
          );
        })}
      </ol>
    </>
  );
};
