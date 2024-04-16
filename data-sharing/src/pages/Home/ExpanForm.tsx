// import { useState } from "react";
// import { number } from "zod";

import { useState } from "react";

// interface FormValues {
//   children: React.ReactNode;
//   title: number;
// }
// const ExpanForm = ({ title, children }: FormValues) => {
//   const [isClick, setIsClick] = useState<boolean>(false);
//   console.log(isClick);

//   const handleClick = () => {
//     setIsClick(!isClick);
//   };

//   const handleHideClick = () => {
//     setIsClick(isClick);
//   };
//   return (
//     <div className="h-52">
//       <span>
//         hello janjyoti college{" "}
//         {!isClick ? (
//           <button
//             onClick={handleClick}
//             className="border border-slate-900  px-5 py-2 ml-20 bg-blue-900 text-white cursor-pointer"
//           >
//             Expand
//           </button>
//         ) : (
//           <button
//             onClick={handleHideClick}
//             className="border border-slate-900  px-5 py-2 ml-20 bg-blue-900 text-white cursor-pointer"
//           >
//             Less
//           </button>
//         )}
//         {isClick === true ? <p>{children.length > 20 ? ` - ${children.slice(0, 20)}...` : ` - ${children}`}</p> : ""}
//       </span>
//     </div>
//   );
// };

// export default ExpanForm;

interface Props {
  children: string;
  maxChars?: number;
}

const ExpanForm = ({ children, maxChars = 100 }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  if (children.length <= maxChars) return <p>{children}</p>;

  const text = isExpanded ? children : children.substring(0, maxChars);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <p>
      {text}..
      <button onClick={handleClick}>{isExpanded ? "less" : "more"}</button>
    </p>
  );
};

export default ExpanForm;
