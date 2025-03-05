const SelectField = ({ name, value, onChange, hasError }) => {
  return (
    <div>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full p-3 rounded-md border ${
          hasError ? "border-red-500" : "border-gray-300"
        }`}
      >
        <option value="">Select a Pack</option>
        <option value="StarterPack">Starter Pack - $175</option>
        <option value="ElitePack">Elite Pack - $350</option>
        <option value="Pro">Pro - $700</option>
      </select>
      {hasError && (
        <p className="text-red-500 text-sm">This field is required</p>
      )}
    </div>
  );
};

export default SelectField;
