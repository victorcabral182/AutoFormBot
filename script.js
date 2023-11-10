const { Builder, By } = require("selenium-webdriver");

async function executeScriptRepeatedly() {
  const driver = await new Builder().forBrowser("chrome").build();
  await driver.get(
    "https://docs.google.com/forms/u/0/d/e/1FAIpQLScChrKs7kTizrR7wJ1qebJsaZ4r2LVncylaq0S-HAybuxk6mA/formResponse"
  );
  for (let i = 0; i < 100; i++) {
    await new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });
    await clicarEmElementos(driver);
    console.log(`Total de votos: ${i + 1} 🚀`);

    await new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });

    await driver.navigate().refresh();
  }
}

async function clicarEmElementos(driver) {
  const elemento1 = await driver.findElement(
    By.css('[data-value="LAIKA NO ESPAÇO"]')
  );
  const elemento2 = await driver.findElement(By.css(".NPEfkd.RveJvd.snByac"));
  await new Promise((resolve) => {
    setTimeout(resolve, 250);
  });
  await elemento1.click();
  await new Promise((resolve) => {
    setTimeout(resolve, 500);
  });
  await elemento2.click();
}

executeScriptRepeatedly().catch(console.error);
