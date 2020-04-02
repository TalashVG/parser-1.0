const webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

let driver = new webdriver.Builder().forBrowser('firefox').build();
driver.get("https://www.facebook.com/zuck");

var mark = {
    "education": "/html/body/div[1]/div[3]/div[1]/div/div[2]/div[2]/div[1]/div/div[2]/div/div[1]/div[1]/div[2]/div/div/div[1]/div/div[2]/ul/li[1]/div/div/div/div/div[2]/div[1]/a",
    "job2": "/html/body/div[1]/div[3]/div[1]/div/div[2]/div[2]/div[1]/div/div[2]/div/div[1]/div[1]/div[2]/div/div/div[1]/div/div[1]/ul/li[2]/div/div/div/div/div[2]/div[1]/a",
    "job1": "/html/body/div[1]/div[3]/div[1]/div/div[2]/div[2]/div[1]/div/div[2]/div/div[1]/div[1]/div[2]/div/div/div[1]/div/div[1]/ul/li[1]/div/div/div/div/div[2]/div[1]/a",
    "name": "/html/body/div[1]/div[3]/div[1]/div/div[2]/div[2]/div[1]/div/div[1]/div[1]/div[3]/div/div[1]/div/div/h1/span[1]/a"
}

і
for (let key of Object.keys(mark)) {
    driver.findElement(By.xpath(mark[key])).getText().then(function(txt){
        console.log(key + " " + txt);
    });
}
