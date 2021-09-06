await page.goto(
  'https://www.linkedin.com/login/pt?fromSignIn=true&trk=guest_homepage-basic_nav-header-signin'
);

await page.evaluate(() => {
  const emailInput = document.getElementById('username');
  emailInput.value = 'jhondoe@email.com';

  const passwordInput = document.getElementById('password');
  passwordInput.value = 'senha';

  const submitButton = document.querySelector("button[type='submit']");
  submitButton.click();
});
