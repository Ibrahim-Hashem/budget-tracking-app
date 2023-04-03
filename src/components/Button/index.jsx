export function Button({ btnText = 'default' }) {
  return (
    <button className="text-blue-500 border-solid border-2 border-blue-500 rounded-md mx-2 px-4 hover:border-dotted">
      {btnText}
    </button>
  );
}

export function ButtonWhite({ btnText = 'default' }) {
  return (
    <button className="text-white bg-blue-500 border-solid border-2 border-white rounded-md mx-2 px-4">
      {btnText}
    </button>
  );
}
