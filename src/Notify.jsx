export const Notify = ({ errorMessage }) => {
  if (!errorMessage) return null;

  return (
    <div
      style={{
        background: "yellow",
        color: "red",
        position: "fixed",
        top: 0,
        width: "100%",
      }}
    >
      {errorMessage}
    </div>
  );
};
