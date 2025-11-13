import React from 'react';
import { useABTest } from '@/hooks/useABTest';

interface ABTestVariantProps {
  testId: string;
  variants: Record<string, React.ReactNode>;
  children?: React.ReactNode;
}

export function ABTestVariant({ testId, variants, children }: ABTestVariantProps) {
  const { variant } = useABTest(testId);
  
  const content = variants[variant] || variants.control || children;
  
  return <>{content}</>;
}
