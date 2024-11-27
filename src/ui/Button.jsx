import { Link } from "react-router-dom";

function Button({ children, disabled, to, type, onClick }) {
  // const className =
  //   "focus:ring-yellow inline-block rounded-full bg-yellow-400 px-4 py-3 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed";
  const base =
    "text-sm focus:ring-green1-300 inline-block rounded-full bg-green1-400 font-semibold uppercase tracking-wide text-stone-50 transition-colors duration-300 hover:bg-green1-200 focus:outline-none focus:ring focus:ring-green1-300 focus:ring-offset-2 disabled:cursor-not-allowed";
  const styles = {
    //注意如此用加法使用時類別時，加法跟加法string之間要留出一格空格
    primary: base + " px-6 py-3 sm:py-4",
    small: base + " px-4 py-2 m-[4px] md:px-5 md:py-2.5 text-xs",
    round: base + " px-2.5 py-1 md:px-3.5 md:py-2 text-sm",
    afav: " rounded-full w-10 h-10 border-2 border-green1-400 bg-green1-400 text-sm relative",
    dfav: " rounded-full border-stone-200 border-2  w-10 h-10 text-sm relative ",
    secondary:
      "text-sm focus:text-green1-500 inline-block  bg-transparent font-semibold uppercase tracking-wide text-stone-50 transition-colors duration-300 hover:bg-stone-300 border-2 border-stone-300 focus:ring hover:text-green1-500 focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed  px-4 py-2.5 sm:py-4 md:py-3.5",
    text: "text-green1-500 text-sm w-fit",
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
