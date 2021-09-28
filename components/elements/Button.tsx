const Button = ({ children, props = {}, onClick, disabled }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    {...props}
    className="rounded-md bg-blue-500 px-2 py-1 text-white"
  >
    {children}
  </button>
);

export { Button };
