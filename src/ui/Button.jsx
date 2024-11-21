import { Link } from "react-router-dom";

function Button({ children, disabled, to, type, onClick }) {
  // const className =
  //   "focus:ring-yellow inline-block rounded-full bg-yellow-400 px-4 py-3 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed";
  const base =
    "text-sm focus:ring-yellow inline-block rounded-full bg-stone-100 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed";
  const styles = {
    //注意如此用加法使用時類別時，加法跟加法string之間要留出一格空格
    primary: base + " px-6 py-3 sm:py-4",
    small: base + " px-4 py-2 md:px-5 md:py-2.5 text-xs",
    round: base + " px-2.5 py-1 md:px-3.5 md:py-2 text-sm",
    secondary:
      "text-sm focus:text-stone-800 inline-block rounded-full bg-transparent font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-300 hover:bg-stone-300 border-2 border-stone-300 focus:ring hover:text-stone-800 focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed  px-4 py-2.5 sm:py-4 md:py-3.5",
  };

  if (to)
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );
  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
