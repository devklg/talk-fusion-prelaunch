const Card = ({ children }) => {
  return (
    <div className="bg-blue-800 p-8 rounded-3xl shadow-2xl border border-blue-500 w-full max-w-lg">
      {children}
    </div>
  );
};

export default Card;
