export default function Notification({ type = "success", message }) {
  const styles = {
    success: {
      container: "border-emerald-200 bg-emerald-50",
      icon: "text-emerald-600",
      text: "text-emerald-800",
      symbol: "✓",
    },
    error: {
      container: "border-red-200 bg-red-50",
      icon: "text-red-600",
      text: "text-red-800",
      symbol: "!",
    },
  };

  const currentStyle = styles[type] || styles.error;

  if (!message) return null;

  return (
    <div
      role={type === "error" ? "alert" : "status"}
      className={`flex items-center gap-3 rounded-lg border px-4 py-3 absolute top-2 left-1/2 -translate-x-1/2 ${currentStyle.container}`}
    >
      <span
        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-sm font-bold ${currentStyle.icon}`}
      >
        {currentStyle.symbol}
      </span>

      <p className={`text-sm font-medium ${currentStyle.text}`}>{message}</p>
    </div>
  );
}
