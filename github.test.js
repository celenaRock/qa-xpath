let yourProfileButton = await driver.findElement(By.xpath('//a[@data-hydro-click-hmac="e7e0dece5790eb93ffe9ce036e3056376c0e1dcb00d4db6a3c2615d0b1b4ce5d"]'))
   await yourProfileButton.click()
   await driver.sleep(2000)

   let editProfileButton = await driver.findElement(By.xpath('//button[@class="btn btn-block js-profile-editable-edit-button"]'))
   await editProfileButton.click()
   await driver.sleep(2000)


//    let changeBio = await driver.findElement(By.xpath('//[@id="js-pjax-container"]/div[2]/div/div[1]/div/div[2]/div[3]/div[2]/div[2]/button'))
//    await changeBio.click()
//    await driver.sleep(2000)

//    let insideBio = await driver.findElement(By.xpath('//[@id="user_profile_bio"]'))
//    await insideBio.click()
//    await driver.sleep(1000)


   let textArea = await driver.findElement(By.xpath('//[@id="user_profile_bio"]'))
   await textArea.sendKeys('Future QA analyst')
   await driver.sleep(2000)


   let saveBtn = await driver.findElement(By.xpath('//[@id="js-pjax-container"]/div[2]/div/div[1]/div/div[2]/div[3]/div[1]/form/div[7]/button[1]'))
   await saveBtn.click()
   await driver.sleep(5000)

   await driver.quit()