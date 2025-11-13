import { useEffect, useState } from 'react';
import { abTestManager, ABTestResult } from '@/lib/ab-testing';

export function useABTest(testId: string): ABTestResult {
  const [result, setResult] = useState<ABTestResult>(() => 
    abTestManager.getVariant(testId)
  );

  useEffect(() => {
    const variant = abTestManager.getVariant(testId);
    setResult(variant);

    // Track impression
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'ab_test_impression', {
        test_id: testId,
        variant: variant.variant,
      });
    }
  }, [testId]);

  return result;
}

export function trackABConversion(testId: string, conversionType: string): void {
  abTestManager.trackConversion(testId, conversionType);
}
