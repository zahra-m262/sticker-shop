import { useRouteError } from "react-router-dom";

export default function NotFound() {
  const error = useRouteError();
  console.error(error);

  return (
    <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
      <h1>وای نه!!!🤕</h1>
      <p>صفحه ای که دنبالش هستی رو نمیتونم پیداش کنم,مطمینی درست اومدی؟🤪</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
