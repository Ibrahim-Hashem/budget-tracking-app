export default function WidgetWrapper({ children }) {
  return (
    <div className="grid grid-cols-1 gap-2 items-start md:grid-cols-2 lg:grid-cols-3">
      {children}
    </div>
  );
}
