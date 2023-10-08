export default function Home() {
  return (
    <>
      <div className="space-x-1">
        <input id="mytodo" type="checkbox" />
        <label htmlFor="mytodo" className="text-slate-200 text-sm">
          Do something
        </label>
      </div>

      <div className="space-x-1">
        <input id="mytodo2" type="checkbox" />
        <label htmlFor="mytodo2" className="text-slate-200 text-sm">
          Do something
        </label>
      </div>

      <div className="space-x-1">
        <input id="mytodo3" type="checkbox" />
        <label htmlFor="mytodo3" className="text-slate-200 text-sm">
          Do something
        </label>
      </div>
    </>
  );
}
