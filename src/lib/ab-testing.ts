import { useEffect, useState } from 'react';

export interface ABTest {
  id: string;
  variants: string[];
  defaultVariant: string;
}

export interface ABTestResult {
  variant: string;
  isControl: boolean;
}

class ABTestManager {
  private tests: Map<string, ABTest> = new Map();
  private assignments: Map<string, string> = new Map();

  constructor() {
    this.loadAssignments();
  }

  private loadAssignments(): void {
    try {
      const stored = localStorage.getItem('ab_tests');
      if (stored) {
        const parsed = JSON.parse(stored);
        this.assignments = new Map(Object.entries(parsed));
      }
    } catch (error) {
      console.error('Failed to load AB test assignments:', error);
    }
  }

  private saveAssignments(): void {
    try {
      const obj = Object.fromEntries(this.assignments);
      localStorage.setItem('ab_tests', JSON.stringify(obj));
    } catch (error) {
      console.error('Failed to save AB test assignments:', error);
    }
  }

  registerTest(test: ABTest): void {
    this.tests.set(test.id, test);
  }

  getVariant(testId: string): ABTestResult {
    const test = this.tests.get(testId);
    if (!test) {
      console.warn(`AB test "${testId}" not found`);
      return { variant: 'control', isControl: true };
    }

    // Check if already assigned
    let variant = this.assignments.get(testId);
    
    if (!variant || !test.variants.includes(variant)) {
      // Assign random variant
      variant = test.variants[Math.floor(Math.random() * test.variants.length)];
      this.assignments.set(testId, variant);
      this.saveAssignments();
    }

    return {
      variant,
      isControl: variant === test.defaultVariant,
    };
  }

  trackConversion(testId: string, conversionType: string): void {
    const variant = this.assignments.get(testId);
    if (!variant) return;

    // Track to analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'ab_test_conversion', {
        test_id: testId,
        variant,
        conversion_type: conversionType,
      });
    }
  }

  reset(testId?: string): void {
    if (testId) {
      this.assignments.delete(testId);
    } else {
      this.assignments.clear();
    }
    this.saveAssignments();
  }
}

export const abTestManager = new ABTestManager();

// Define tests
abTestManager.registerTest({
  id: 'hero_headline',
  variants: ['control', 'benefit_focused', 'problem_focused'],
  defaultVariant: 'control',
});

abTestManager.registerTest({
  id: 'contact_form_placement',
  variants: ['sidebar', 'inline', 'modal'],
  defaultVariant: 'inline',
});

abTestManager.registerTest({
  id: 'cta_button_text',
  variants: ['get_started', 'book_demo', 'learn_more'],
  defaultVariant: 'get_started',
});
