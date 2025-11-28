// import React from "react";
// import classNames from "classnames";

// export default function FormInput({
//   type,
//   name,
//   autoComplete,
//   placeholder,
//   value,
//   onChange,
//   error,
//   icon: Icon,
//   className,
// }) {
//   return (
//     <div className="w-full space-y-1">
//       <div className={classNames("relative group")}>
//         {Icon && (
//           <Icon
//             className={classNames(
//               `
//               absolute
//               left-3
//               top-1/2 -translate-y-1/2
//               text-gray-400
//               transition-colors
//             `,
//               // se tem erro → ícone sempre vermelho
//               error
//                 ? "text-red-400"
//                 : "group-focus-within:text-[#8abcfb]/80"
//             )}
//             size={18}
//           />
//         )}

//         <input
//           type={type}
//           name={name}
//           autoComplete={autoComplete}
//           placeholder={placeholder}
//           value={value}
//           onChange={onChange}
//           className={classNames(
//             "input-premium pl-10",          // base premium (dark/light)
//             className,                      // extra customização (se você quiser)
//             error && "input-premium-error"  // erro SEMPRE por último (vermelho vence)
//           )}
//         />
//       </div>

//       {error && <p className="text-sm text-red-500">{error}</p>}
//     </div>
//   );
// }



import React from "react";
import classNames from "classnames";

export default function FormInput({
  type,
  name,
  autoComplete,
  placeholder,
  value,
  onChange,
  error,
  icon: Icon,
  className,
}) {
  return (
    <div className="w-full space-y-1">
      <div className="relative group">

        {Icon && (
          <Icon
            className={classNames(
              `
              absolute left-3 top-1/2 -translate-y-1/2
              transition-colors
            `,
              error ? "text-red-400" : "text-gray-400 group-focus-within:text-[#8abcfb]/80"
            )}
            size={18}
          />
        )}

        <input
          type={type}
          name={name}
          autoComplete={autoComplete}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={classNames(
            "input-premium input-premium-focus pl-10", // ⭐️ AQUI
            error && "input-premium-error",            // ⭐️ PRIORIDADE DO ERRO
            className
          )}
        />
      </div>

      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}
