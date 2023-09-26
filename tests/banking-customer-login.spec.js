const { test, page ,expect} = require('@playwright/test');

test('Login Test', async ({ page }) => {
    await page.goto('/angularJs-protractor/BankingProject/#/login');
    const CustomerLoginButton = await page.getByRole('button', { name: 'Customer Login' });
    await expect(CustomerLoginButton).toBeVisible();
    await expect(CustomerLoginButton).toHaveText(/Customer Login/);
    await CustomerLoginButton.click();
    await page.locator('#userSelect').selectOption('2');
    const LoginButton = await page.getByRole('button', { name: 'Login' });
    await expect(LoginButton).toBeVisible();
    await expect(LoginButton).toHaveText(/Login/);
    await LoginButton.click();
    await expect(page).toHaveURL('/angularJs-protractor/BankingProject/#/account');
    const LogoutButton = await page.getByRole('button', { name: 'Logout' });
    await expect(LogoutButton).toBeVisible();
    await expect(LogoutButton).toHaveText(/Logout/);
    await LogoutButton.click();
    await expect(page).toHaveURL('/angularJs-protractor/BankingProject/#/customer');
})

// test('Login Test', async ({ page }) => {  
//     await page.goto('https://www.stg-ds.com/');
//     await page.locator('#newsLetterSubscriptionClose').click();
//     await page.getByRole('link', { name: 'Register' }).click();
//     await page.getByLabel('Email').click();
//     await page.getByLabel('Email').fill('abc343@gmail.com');
//     await page.getByLabel('Password').click();
//     await page.getByLabel('Password').fill('Sanket123');
//     await page.locator('#passwordConfirm').click();
//     await page.locator('#passwordConfirm').fill('abc123');
//     await page.getByLabel('First Name (English)').click();
//     await page.getByLabel('First Name (English)').fill('abc');
//     await page.locator('#lastName').click();
//     await page.locator('#lastName').fill('abc');
//     await page.locator('[id="customer\\.mobileNumber"]').click();
//     await page.locator('[id="customer\\.mobileNumber"]').fill('543211234');
//     await page.getByRole('button', { name: 'Register' }).click();
//     await page.getByPlaceholder('What are you looking for?').click();
//     await page.getByPlaceholder('What are you looking for?').fill('iphone');
//     await page.locator('[class="btn btn-primary btn-simple btn-search"]').click();
// })

