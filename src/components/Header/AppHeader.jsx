import { motion } from "framer-motion";

export default function AppHeader({
  title,
  subtitle,
  icon: Icon,
  iconSize = 24,
  iconColor = "#ffffff",
  animationType = "float",
  className = "",
}) {
  const animations = {
    float: {
      y: [0, -6, 0, 4, 0],
      scale: [1, 1.05, 1, 0.98, 1],
    },
    rotate: {
      rotate: [0, -6, 6, -3, 0],
      scale: [1, 1.05, 1],
    },
    pulse: {
      scale: [1, 1.15, 1],
    },
    none: {},
  };

  return (
    <motion.div
      className={`flex flex-col items-center text-center space-y-2 ${className}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* TÍTULO + ÍCONE */}
      <div className="flex items-center justify-center gap-2">
        <h1 className="text-3xl font-bold tracking-wide text-white">
          {title}
        </h1>

        {Icon && (
          <motion.span
            className="inline-block"
            animate={animations[animationType]}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          >
            <Icon size={iconSize} color={iconColor} strokeWidth={1.5} />
          </motion.span>
        )}
      </div>

      {/* SUBTÍTULO */}
      {subtitle && (
        <motion.p
          className="text-sm font-light text-white/80 max-w-sm"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
