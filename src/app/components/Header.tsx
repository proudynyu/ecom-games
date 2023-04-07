export function Header() {
  return (
    <header className="w-full h-[100px] flex flex-col items-center justify-center bg-slate-800">
      <div className="h-full w-full border-b border-gray-950 flex items-center px-4">
        <img src="#" alt="logo" width={60} />
        <button>cart</button>
      </div>
      <div className="border-gray-950 h-full w-full flex items-center px-4">
        categories
      </div>
    </header>
  );
}
