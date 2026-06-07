/**
 * ProfileAvatar — Stitch-style circular profile with glass frame
 */
import { motion } from "framer-motion";
import { cn } from "../../utils";
import profileImage from "../../assets/Aravind_Pic.png";

interface ProfileAvatarProps {
  size?: "sm" | "hero";
  className?: string;
}

const sizeClasses = {
  sm: "w-20 h-20 sm:w-24 sm:h-24",
  // ISSUE 5 FIX: reduced hero max sizes — mobile 180px, tablet 220px, desktop 320px
  hero: "w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] lg:w-[320px] lg:h-[320px]",
};

const roundedClasses = {
  sm: "rounded-2xl",
  hero: "rounded-[2.5rem]",
};

export function ProfileAvatar({
  size = "hero",
  className,
}: ProfileAvatarProps) {
  const roundedClass = roundedClasses[size];

  return (
    <motion.div
      className={cn("relative group shrink-0", sizeClasses[size], className)}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Soft blue glow behind the portrait */}
      <div
        className={cn(
          "absolute -inset-2 bg-brand-blue/15 blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0",
          roundedClass
        )}
      />

      {/* Main squircle container */}
      <div
        className={cn(
          "w-full h-full bg-surface-container/30 border border-brand-border overflow-hidden relative flex items-center justify-center z-10",
          roundedClass
        )}
      >
        <div
          className="absolute inset-0 bg-gradient-to-tr from-brand-blue/20 to-transparent opacity-40 group-hover:opacity-75 transition-opacity duration-500 z-20 pointer-events-none"
          aria-hidden="true"
        />
        {/* ISSUE 6 FIX: meaningful alt text */}
        <img
          src={profileImage}
          alt="Aravind Puranam — Android Developer based in Hyderabad, India"
          className="w-full h-full object-cover z-10 grayscale-0 lg:grayscale lg:group-hover:grayscale-0 transition-all duration-700"
        />
      </div>
    </motion.div>
  );
}
