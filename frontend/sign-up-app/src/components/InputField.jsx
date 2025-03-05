const InputField = ({ name, value, onChange, hasError }) => {
    return (
      <div>
        <input
          type="text"
          name={name}
          value={value}
          onChange={onChange}
          placeholder={name.charAt(0).toUpperCase() + name.slice(1)}
          className={`w-full p-3 rounded-md border ${hasError ? "border-red-500" : "border-gray-300"}`}
        />
      </div>
    );
  };
  
  export default InputField;
  