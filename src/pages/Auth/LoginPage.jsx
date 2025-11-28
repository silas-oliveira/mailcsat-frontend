// import { motion } from "framer-motion";
// import { Mail, Lock } from "lucide-react";
// import FormInput from "../../components/FormInput/FormInput.jsx";
// import useLoginForm from "./login.js";
// import { useNavigate } from "react-router-dom";

// const MotionForm = motion.form;

// export default function Login() {
//   const navigate = useNavigate();

//   const {
//     emailInput,
//     passwordInput,
//     emailInputError,
//     passwordInputError,
//     handleEmailChange,
//     handlePasswordChange,
//     handleSubmit,
//     formError,
//   } = useLoginForm();

//   return (
//     <div className="flex flex-col items-center justify-center w-full max-w-md">

//       <MotionForm
//         onSubmit={handleSubmit}
//         initial={{ opacity: 0, y: -40, scale: 0.95 }}
//         animate={{ opacity: 1, y: 0, scale: 1 }}
//         transition={{ duration: 0.5, ease: 'easeOut' }}

//         className="
//           relative w-full p-10 rounded-2xl space-y-7

//           bg-[#0f131a]/65

//           border border-[#1d2736]
//           shadow-[0_0_60px_rgba(0,0,0,0.65)]
//         "
//       >

//         {/* Borda superior premium */}
//         <div
//           className="
//             absolute -top-[1px] left-0 right-0 h-[2px]
//             bg-gradient-to-r
//             from-transparent 
//             via-[#9bc1ff]/75 
//             to-transparent
//             blur-[2px]
//           "
//         />

//         {/* Glow interno premium */}
//         <div
//           className="
//             absolute inset-0 rounded-2xl
//             bg-[radial-gradient(500px_at_50%_20%,rgba(110,150,255,0.08),transparent)]
//             pointer-events-none
//           "
//         />

//         <h2 className="text-3xl font-semibold text-center text-white tracking-wide">
//           Login
//         </h2>

//         {/* INPUT EMAIL */}
//         <FormInput
//           type="email"
//           placeholder="E-mail"
//           autoComplete="email"
//           value={emailInput}
//           onChange={handleEmailChange}
//           error={
//             emailInputError === 'required'
//               ? 'Preencha o campo E-mail.'
//               : emailInputError === 'invalid'
//                 ? 'Digite um e-mail válido.'
//                 : ''
//           }
//           icon={Mail}
//           className="
//             w-full rounded-lg

//             bg-[#0d1117]
//             focus:bg-[#0d1117]
//             border border-[#2e3b4d]
//             text-[#e8eef9] placeholder-[#aab4c7]

//             shadow-[inset_0_0_10px_rgba(0,0,0,0.35)]

//             focus:outline-none
//             focus:border-[#8abcfb]/80
//             focus:ring-2 focus:ring-[#8abcfb]/40    

//             transition-all
//           "
//         />

//         {/* INPUT SENHA */}
//         <FormInput
//           type="password"
//           placeholder="Senha"
//           autoComplete="current-password"
//           value={passwordInput}
//           onChange={handlePasswordChange}
//           error={
//             passwordInputError === 'required'
//               ? 'Preencha o campo Senha.'
//               : passwordInputError === 'short'
//                 ? 'A senha precisa ter pelo menos 6 caracteres.'
//                 : ''
//           }
//           icon={Lock}
//           className="
//             w-full p-3 rounded-lg

//             bg-[#0d1117]
//             focus:bg-[#0d1117]
//             border border-[#2e3b4d]
//             text-[#e8eef9] placeholder-[#aab4c7]

//             shadow-[inset_0_0_10px_rgba(0,0,0,0.35)]

//             focus:outline-none
//             focus:border-[#8abcfb]/80
//             focus:ring-2 focus:ring-[#8abcfb]/40    

//             transition-all
//           "
//         />

//         {formError && (
//           <div className="text-red-400 text-sm text-center">{formError}</div>
//         )}

//         {/* BOTÃO PREMIUM DEFINITIVO */}
//         <button
//           type="submit"
//           className="
//             w-full py-3 rounded-lg font-semibold text-white text-lg

//             bg-gradient-to-b
//             from-[#26334e]
//             via-[#202a3d]
//             to-[#161c27]

//             border border-[#3c4f72]/40

//             shadow-[0_12px_34px_rgba(90,120,180,0.30)]
//             hover:shadow-[0_18px_45px_rgba(110,150,230,0.40)]
//             hover:brightness-110

//             active:scale-[0.97]

//             transition-all
//           "
//         >
//           Entrar
//         </button>

//         <div className="text-center text-sm text-white/70 mt-2">
//           Não tem uma conta?{" "}
//           <button
//             type="button"
//             onClick={() => navigate('/auth/register')}
//             className="underline text-[#bcd3ff] hover:text-white transition"
//           >
//             Registrar
//           </button>
//         </div>

//       </MotionForm>

//     </div>
//   );
// }




import { motion } from "framer-motion";
import { Mail, Lock } from "lucide-react";
import FormInput from "../../components/FormInput/FormInput.jsx";
import useLoginForm from "./login.js";
import { useNavigate } from "react-router-dom";

const MotionForm = motion.form;

export default function Login() {
  const navigate = useNavigate();

  const {
    emailInput,
    passwordInput,
    emailInputError,
    passwordInputError,
    handleEmailChange,
    handlePasswordChange,
    handleSubmit,
    formError,
  } = useLoginForm();

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-md">

      <MotionForm
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: -40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="card-premium"
      >

        {/* Borda superior premium */}
        <div
          className="card-premium-top-border"
        />

        {/* Glow interno premium */}
        <div
          className="card-premium-glow"
        />

        <h2 className="text-3xl font-semibold text-center text-white tracking-wide">
          Login
        </h2>

        {/* INPUT EMAIL */}
        <FormInput
          type="email"
          placeholder="E-mail"
          autoComplete="email"
          value={emailInput}
          onChange={handleEmailChange}
          error={
            emailInputError === "required"
              ? "Preencha o campo E-mail."
              : emailInputError === "invalid"
                ? "Digite um e-mail válido."
                : ""
          }
          icon={Mail}
        />

        {/* INPUT SENHA */}
        <FormInput
          type="password"
          placeholder="Senha"
          autoComplete="current-password"
          value={passwordInput}
          onChange={handlePasswordChange}
          error={
            passwordInputError === "required"
              ? "Preencha o campo Senha."
              : passwordInputError === "short"
                ? "A senha precisa ter pelo menos 6 caracteres."
                : ""
          }
          icon={Lock}
        />

        {formError && (
          <div className="text-red-400 text-sm text-center">{formError}</div>
        )}

        {/* BOTÃO PREMIUM DEFINITIVO */}
        <button
          type="submit"
          className="btn-premium"
        >
          Entrar
        </button>

        <div className="text-center text-sm text-white/70 mt-2">
          Não tem uma conta?{" "}
          <button
            type="button"
            onClick={() => navigate("/auth/register")}
            className="underline text-[#bcd3ff] hover:text-white transition"
          >
            Registrar
          </button>
        </div>

      </MotionForm>

    </div>
  );
}
