export function Input({required, type, placeholder, value, onChange }) {
  return (
    <input
      type={type}
      required={required}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="bg-card-elevated-1 text-white placeholder:text-gray-500 border border-border/20 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-border"
    />
  );
}