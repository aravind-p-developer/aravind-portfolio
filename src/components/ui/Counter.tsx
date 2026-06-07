/**
 * Counter component — animated number counter
 */
import { motion } from 'framer-motion';
import { cn } from '../../utils';
import { useCounterAnimation } from '../../hooks';

interface CounterProps {
  value: number;
  suffix: string;
  duration?: number;
  variant?: 'hero' | 'impact' | 'default';
  formatThousands?: boolean;
  className?: string;
}

function formatCounterValue(value: number, formatThousands?: boolean): string {
  if (formatThousands && value >= 1000) {
    return value.toLocaleString('en-US');
  }
  return String(value);
}

const variantClasses = {
  hero: 'metric-value',
  impact: 'impact-metric-value',
  default: 'font-display-lg text-display-lg text-brand-blue tabular-nums',
};

export function Counter({
  value,
  suffix,
  duration = 2500,
  variant = 'default',
  formatThousands = false,
  className,
}: CounterProps) {
  const { currentValue, elementRef } = useCounterAnimation({
    targetValue: value,
    duration,
    triggerOnScroll: true,
  });

  return (
    <motion.div
      ref={elementRef}
      className={cn(variantClasses[variant], className)}
    >
      {formatCounterValue(currentValue, formatThousands)}
      {suffix}
    </motion.div>
  );
}
