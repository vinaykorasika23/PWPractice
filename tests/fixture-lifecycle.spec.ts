import {test, expect} from './fixtures/fixtures';


test('test1',async({practicePage})=>{
   console.log('[TEST 1 START]');
  await expect(practicePage).toHaveURL(/expandtesting/);
  console.log('[TEST 1 END]');
});

test('test2',async({practicePage})=>{
 console.log('[TEST 2 START]');
  await expect(practicePage).toHaveTitle(/Practice/i);
  console.log('[TEST 2 END]');
});

// do a cherry pick to main 2350f34..b588d85  practice/rebase -> practice/rebase