import { Selector } from 'testcafe';

fixture`Getting Started`
    .page`http://localhost:3000/auth/user-login`;

test('login user test with Wrong Credentials', async t => {
    await t
    .setTestSpeed(0.2)
        .typeText('#username', 'abc')
        .typeText('#password', '12')
        .click('#submit_btn');
});