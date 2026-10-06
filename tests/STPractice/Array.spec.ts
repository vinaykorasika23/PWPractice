import { test, expect } from '@playwright/test';
import { countStatuses } from './Array';

test('counts passed, failed, and skipped results', () => {
  const result = countStatuses([
    'passed',
    'failed',
    'skipped',
    'passed',
  ]);

  expect(result).toEqual({
    total: 4,
    passed: 2,
    failed: 1,
    skipped: 1,
  });
});

test('handles an empty array', () => {
  expect(countStatuses([])).toEqual({
    total: 0,
    passed: 0,
    failed: 0,
    skipped: 0,
  });
});

test('does not count skipped results as failures', () => {
  expect(countStatuses(['skipped', 'skipped'])).toEqual({
    total: 2,
    passed: 0,
    failed: 0,
    skipped: 2,
  });
});