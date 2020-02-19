import { createCustomer } from '../src/customers';
import { createSubscription } from '../src/subscriptions';
import { fun } from './test-config';
import { getMockSource, mockUser } from './mocks';
fun.cleanup;


let user: any;
/// <reference types="jest" />





beforeAll( async () => {
  user = await mockUser();
  await createCustomer(user.uid);
});

test('createSubscription creates a Subscription', async () => {
  const plan = 'plan_Gl53WD33vJA3uR';

  const mockSource = await getMockSource();
  const sub = await createSubscription(user.uid, mockSource.id, plan);

  expect(sub.id).toContain('sub_');
  expect(sub.status).toBe('active');
});
