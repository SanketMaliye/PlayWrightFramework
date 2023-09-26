const { test, page ,expect} = require('@playwright/test');

async function loginAndNavigateToDashboard(page) {
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
  }

test('Deposit', async ({ page }) => {
    await loginAndNavigateToDashboard(page);
    await expect(page.getByRole('button', { name: 'Deposit' })).toBeVisible();
    await page.getByRole('button', { name: 'Deposit' }).click();
    await expect(page.getByPlaceholder('amount')).toBeVisible();
    await page.getByPlaceholder('amount').fill('10000');
    await expect(page.getByRole('form').getByRole('button', { name: 'Deposit' })).toBeVisible();
    await page.getByRole('form').getByRole('button', { name: 'Deposit' }).click();
    await expect(page.getByText('Deposit Successful')).toBeVisible();
    await expect(page.getByText('Account Number : 1004 , Balance : 10000 , Currency : Dollar')).toBeVisible();  
})

test('Withdrawl', async ({ page }) => {
    await loginAndNavigateToDashboard(page);
    await expect(page.getByRole('button', { name: 'Deposit' })).toBeVisible();
    await page.getByRole('button', { name: 'Deposit' }).click();
    await expect(page.getByPlaceholder('amount')).toBeVisible();
    await page.getByPlaceholder('amount').fill('10000');
    await expect(page.getByRole('form').getByRole('button', { name: 'Deposit' })).toBeVisible();
    await page.getByRole('form').getByRole('button', { name: 'Deposit' }).click();
    await expect(page.getByText('Deposit Successful')).toBeVisible();
    await expect(page.getByText('Account Number : 1004 , Balance : 10000 , Currency : Dollar')).toBeVisible();  
    await expect(page.getByRole('button', { name: 'Withdrawl' })).toBeVisible();
    await page.getByRole('button', { name: 'Withdrawl' }).click();
    await page.getByPlaceholder('amount').click();
    await page.waitForTimeout(2000);
    await page.locator('input[type="number"]').fill('1000',{force:true}); 
    await page.getByRole('button', { name: 'Withdraw', exact: true }).click(); 
    await expect(page.getByText('Transaction successful')).toBeVisible(); 
    await expect(page.getByText('Account Number : 1004 , Balance : 9000 , Currency : Dollar')).toBeVisible();
})

test('Transactions', async ({ page }) => {
    await loginAndNavigateToDashboard(page);
    await expect(page.getByRole('button', { name: 'Deposit' })).toBeVisible();
    await page.getByRole('button', { name: 'Deposit' }).click();
    await expect(page.getByPlaceholder('amount')).toBeVisible();
    await page.getByPlaceholder('amount').fill('10000');
    await expect(page.getByRole('form').getByRole('button', { name: 'Deposit' })).toBeVisible();
    await page.getByRole('form').getByRole('button', { name: 'Deposit' }).click();
    await expect(page.getByText('Deposit Successful')).toBeVisible();
    await expect(page.getByText('Account Number : 1004 , Balance : 10000 , Currency : Dollar')).toBeVisible();  
    await expect(page.getByRole('button', { name: 'Withdrawl' })).toBeVisible();
    await page.getByRole('button', { name: 'Withdrawl' }).click();
    await page.getByPlaceholder('amount').click();
    await page.waitForTimeout(2000);
    await page.locator('input[type="number"]').fill('1000',{force:true}); 
    await page.getByRole('button', { name: 'Withdraw', exact: true }).click(); 
    await expect(page.getByText('Transaction successful')).toBeVisible(); 
    await expect(page.getByText('Account Number : 1004 , Balance : 9000 , Currency : Dollar')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Transactions' })).toBeVisible(); 
    await page.getByRole('button', { name: 'Transactions' }).click();
    await expect(page.getByRole('cell', { name: 'Date-Time' })).toBeVisible(); 
    await expect(page.getByRole('cell', { name: 'Amount' })).toBeVisible(); 
    await expect(page.getByRole('cell', { name: 'Transaction Type' })).toBeVisible(); 
    await expect(page.getByRole('button', { name: 'Reset' })).toBeVisible(); 
    await page.getByRole('button', { name: 'Reset' }).click();
    await expect(page.getByRole('button', { name: 'Back' })).toBeVisible(); 
    await page.getByRole('button', { name: 'Back' }).click();
    await expect(page.getByRole('button', { name: 'Logout' })).toBeVisible(); 
    await page.getByRole('button', { name: 'Logout' }).click();
})