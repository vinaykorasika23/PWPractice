type TestStatus = 'passed' | 'failed' | 'skipped';

export function countStatuses(statuses: TestStatus[]) {
  let passed = 0;
  let failed = 0;
  let skipped = 0;

  for (const status of statuses) {
    if (status === 'passed') {
      passed++;
    } else if (status === 'failed') {
      failed++;
    } else if (status === 'skipped') {
      skipped++;
    }
  }

  return {
    total: statuses.length,
    passed,
    failed,
    skipped,
  };
}
