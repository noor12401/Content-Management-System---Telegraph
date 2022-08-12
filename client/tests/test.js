const { Builder, By, Key, until } = require('selenium-webdriver');
const { expect } = require('chai');
const driver = new Builder().forBrowser('firefox').build();
driver.manage().window().maximize();
driver.sleep(1000);
driver.manage().deleteAllCookies();

// Testing as an Admin
describe('Testing for Admin Role', () => {
    
    it('Should Login and Go to Admin Dashboard', async () => {
        await driver.sleep(3000);
        await driver.get('http://localhost:3000/');
        await driver.wait(until.elementLocated(By.id('signin'))).click()
        await driver.wait(until.elementLocated(By.id('loginbutton'))).click();
        await driver.sleep(2000);
        let title = await driver.getCurrentUrl();
        expect(title).to.equal('http://localhost:3000/admin');
    });
    
    it('Admin can see create new post.', async () => {
        await driver.wait(until.elementLocated(By.id('admin-add-post'))).click()
        await driver.sleep(2000);
        let title = await driver.getCurrentUrl();
        await driver.wait(until.elementLocated(By.id('new-post-title'))).sendKeys("Sample Title given by Selenium");
        elm = driver.wait(until.elementLocated(By.className('ProseMirror')));
        await driver.executeScript("arguments[0].innerHTML = '<p>This text is by Selenium</p>';", elm);
        await driver.wait(until.elementLocated(By.id('featured-image'))).click()
        await driver.wait(until.elementLocated(By.id('rc-tabs-0-tab-2'))).click()
        await driver.wait(until.elementLocated(By.xpath('//*[@id="rc-tabs-0-panel-2"]/div/span[3]'))).click()
        await driver.wait(until.elementLocated(By.className('ant-modal-close-icon'))).click()
        await driver.sleep(1000);
        await driver.wait(until.elementLocated(By.id('new-post-publish'))).click()
        expect(title).to.equal('http://localhost:3000/admin/posts/new');
    });

    it('New post created and total post count increased!', async () => {
        await driver.sleep(3000);
        let count = await driver.wait(until.elementLocated(By.id('total-admin-post-count'))).getText()
        count = parseInt(count)
        expect(count).to.equal(5);
    });

    it('Admin can edit post!', async () => {
        await driver.sleep(2000);
        await driver.wait(until.elementLocated(By.xpath('//*[@id="__next"]/section/section/main/div/div/div/div/div/ul/li[1]/ul/li[1]/a'))).click()
        await driver.sleep(3000);
        await driver.wait(until.elementLocated(By.id('edit-post-title'))).sendKeys(" (Now Edited)");
        await driver.wait(until.elementLocated(By.id('edit-post-publish'))).click()
        await driver.sleep(2000);
        let editedTitle = await driver.wait(until.elementLocated(By.xpath('//*[@id="__next"]/section/section/main/div/div/div/div/div/ul/li[1]/div/div/h4'))).getText()
        expect(editedTitle).to.equal('Sample Title given by Selenium (Now Edited)');
    });

    it('Admin can delete post!', async () => {
        await driver.sleep(2000);
        await driver.wait(until.elementLocated(By.xpath('//*[@id="__next"]/section/section/main/div/div/div/div/div/ul/li[1]/ul/li[2]'))).click()
        driver.switchTo().alert().accept();
        await driver.sleep(1000);
        let count = await driver.wait(until.elementLocated(By.id('total-admin-post-count'))).getText()
        count = parseInt(count)
        expect(count).to.equal(4);
    });

    it('Admin can create new category!', async () => {
        await driver.wait(until.elementLocated(By.id('admin-all-categories'))).click()
        await driver.sleep(3000);
        await driver.wait(until.elementLocated(By.id('name'))).sendKeys("Selenium");
        await driver.wait(until.elementLocated(By.id('create-category'))).click()
        await driver.sleep(1000);
        let title = await driver.wait(until.elementLocated(By.xpath('//*[@id="__next"]/section/section/main/div/div[2]/div/div/div/ul/li[1]/div/div/h4'))).getText()
        expect(title).to.equal('Selenium');
    });

    it('Admin can edit and delete category!', async () => {
        await driver.wait(until.elementLocated(By.xpath('//*[@id="__next"]/section/section/main/div/div[2]/div/div/div/ul/li[1]/ul/li[2]/a'))).click()
        let title = await driver.getCurrentUrl();
        expect(title).to.equal('http://localhost:3000/admin/categories');
    });
    
    it('Admin can create new user!', async () => {
        await driver.wait(until.elementLocated(By.id('admin-add-user'))).click()
        await driver.sleep(3000);
        await driver.wait(until.elementLocated(By.id('user-name'))).sendKeys("Bot User");
        await driver.wait(until.elementLocated(By.id('user-email'))).sendKeys("random@google.com");
        await driver.wait(until.elementLocated(By.xpath('//*[@id="__next"]/section/section/main/div/div/div[2]/div/span[2]'))).click()
        await driver.wait(until.elementLocated(By.id('select-role'))).click()
        await driver.wait(until.elementLocated(By.id('user-create'))).click()
        await driver.sleep(2000);
        await driver.wait(until.elementLocated(By.id('admin-all-users'))).click()
        await driver.sleep(2000);
        let title = await driver.wait(until.elementLocated(By.xpath('//*[@id="__next"]/section/section/main/div/div/div/div/div/ul/li[10]/div[1]/div/h4'))).getText()
        expect(title).to.equal('Bot User');
    });

    it('Admin can delete user!', async () => {
        await driver.wait(until.elementLocated(By.xpath('//*[@id="__next"]/section/section/main/div/div/div/div/div/ul/li[10]/ul/li[2]/a'))).click()
        let title = await driver.wait(until.elementLocated(By.xpath('//*[@id="__next"]/section/section/main/div/div/div/div/div/ul/li[9]/div[1]/div/h4'))).getText();
        expect(title).to.equal('Arshad Rangrez');
    });

    it('Admin can update his profile!', async () => {
        await driver.wait(until.elementLocated(By.id('admin-profile'))).click()
        await driver.wait(until.elementLocated(By.id('update-website'))).sendKeys("telegraph.com");
        await driver.sleep(3000);
        let title = await driver.getCurrentUrl();
        await driver.wait(until.elementLocated(By.id('update-profile'))).click();
        expect(title).to.equal('http://localhost:3000/admin/62e12477705acd91a61273b8');
    });
    
    it('Admin can edit any comment!', async () => {
        await driver.sleep(1000);
        await driver.navigate().to('http://localhost:3000/posts');
        await driver.sleep(3000);
        await driver.wait(until.elementLocated(By.xpath('//*[@id="__next"]/div[3]/div[1]/a/div/div[2]/div/div/div'))).click()
        await driver.sleep(5000);
        let scrollTill = driver.wait(until.elementLocated(By.id('write-comment')));
        await driver.executeScript("arguments[0].scrollIntoView(true);", scrollTill);
        await driver.sleep(2000);
        await driver.wait(until.elementLocated(By.id('write-comment'))).sendKeys("Comment by Selenium");
        await driver.wait(until.elementLocated(By.id('post-comment'))).click()
        await driver.sleep(1000);
        await driver.navigate().to('http://localhost:3000/admin/comments');
        await driver.sleep(2000);
        await driver.wait(until.elementLocated(By.id('edit-comment'))).click()
        await driver.sleep(1000);
        await driver.wait(until.elementLocated(By.id('write-comment'))).sendKeys(" (Updated)");
        await driver.wait(until.elementLocated(By.id('post-comment'))).click()
        let title = await driver.getCurrentUrl();
        await driver.sleep(1000);
        expect(title).to.equal('http://localhost:3000/admin/comments');
    });

    it('Admin can delete any comment!', async () => {
        await driver.sleep(2000);
        await driver.wait(until.elementLocated(By.id('delete-comment'))).click()
        await driver.switchTo().alert().accept();
        await driver.wait(until.elementLocated(By.id('load-more-comments'))).click()
        await driver.sleep(1000);
        let title = await driver.wait(until.elementLocated(By.xpath('//*[@id="__next"]/section/section/main/div/div/div/div/div/ul/li[7]/div/div/h4'))).getText()
        expect(title).to.equal('Data Science is new and this bubble will burst.');
    });

});

// Testing as an Author
describe('Testing for Authors Role', () => {

    it('Logout and Login as an Author', async () => {
        await console.log("Testing for Admin Role Completed!");
        await driver.wait(until.elementLocated(By.id('signout'))).click();
        await driver.sleep(1000);
        let signinInput = await driver.findElement(By.id("normal_login_email"));
        signinInput.sendKeys(Key.CONTROL + "a");
        signinInput.sendKeys(Key.DELETE);
        signinInput.sendKeys("author3@gmail.com");
        await driver.sleep(5000);
        await driver.wait(until.elementLocated(By.id('loginbutton'))).click();
        await driver.sleep(2000);
        let title = await driver.getCurrentUrl();
        expect(title).to.equal('http://localhost:3000/author');
    });
  
    it('Author can see create new post.', async () => {
        await driver.wait(until.elementLocated(By.id('author-add-posts'))).click()
        await driver.sleep(2000);
        let title = await driver.getCurrentUrl();
        await driver.wait(until.elementLocated(By.id('new-post-title'))).sendKeys("Sample Title given by Selenium");
        elm = driver.wait(until.elementLocated(By.className('ProseMirror')));
        await driver.executeScript("arguments[0].innerHTML = '<p>This text is by Selenium</p>';", elm);
        await driver.wait(until.elementLocated(By.id('featured-image'))).click()
        await driver.wait(until.elementLocated(By.id('rc-tabs-0-tab-2'))).click()
        await driver.wait(until.elementLocated(By.xpath('//*[@id="rc-tabs-0-panel-2"]/div/span[3]'))).click()
        await driver.wait(until.elementLocated(By.className('ant-modal-close-icon'))).click()
        await driver.sleep(1000);
        await driver.wait(until.elementLocated(By.id('new-post-publish'))).click()
        expect(title).to.equal('http://localhost:3000/author/posts/new');
    });
  
    it('New post created by author and total post count increased!', async () => {
        await driver.sleep(3000);
        let count = await driver.wait(until.elementLocated(By.id('total-author-post-count'))).getText()
        count = parseInt(count)
        expect(count).to.equal(1);
    });
  
    it('Author can edit his post!', async () => {
        await driver.sleep(2000);
        await driver.wait(until.elementLocated(By.xpath('//*[@id="__next"]/section/section/main/div/div/div/div/div/ul/li/ul/li[1]/a'))).click()
        await driver.sleep(3000);
        //await driver.wait(until.elementLocated(By.id('edit-post-title'))).sendKeys(" (Now Edited)");
        await driver.wait(until.elementLocated(By.id('edit-post-publish'))).click()
        await driver.sleep(2000);
        let editedTitle = await driver.wait(until.elementLocated(By.xpath('//*[@id="__next"]/section/section/main/div/div/div/div/div/ul/li/div/div/h4'))).getText()
        expect(editedTitle).to.equal('Sample Title given by Selenium');
    });
  
    it('Author can delete his post!', async () => {
        await driver.sleep(2000);
        await driver.wait(until.elementLocated(By.xpath('//*[@id="__next"]/section/section/main/div/div/div/div/div/ul/li/ul/li[2]/a'))).click()
        driver.switchTo().alert().accept();
        await driver.sleep(1000);
        let count = await driver.wait(until.elementLocated(By.id('total-author-post-count'))).getText()
        count = parseInt(count)
        expect(count).to.equal(0);
    });
  
    it('Author can update his profile!', async () => {
        await driver.wait(until.elementLocated(By.id('author-profile'))).click()
        await driver.wait(until.elementLocated(By.id('update-website'))).sendKeys("telegraph.com");
        await driver.sleep(3000);
        let title = await driver.getCurrentUrl();
        await driver.wait(until.elementLocated(By.id('update-profile'))).click();
        expect(title).to.equal('http://localhost:3000/author/62ef862dd1eb916a28e75456');
    });
  
    it('Author can edit his comment!', async () => {
        await driver.navigate().to('http://localhost:3000/posts');
        await driver.sleep(3000);
        await driver.wait(until.elementLocated(By.xpath('//*[@id="__next"]/div[3]/div[1]/a/div/div[2]/div/div/div'))).click()
        await driver.sleep(5000);
        let scrollTill = driver.wait(until.elementLocated(By.id('write-comment')));
        await driver.executeScript("arguments[0].scrollIntoView(true);", scrollTill);
        await driver.sleep(2000);
        await driver.wait(until.elementLocated(By.id('write-comment'))).sendKeys("Comment by Selenium");
        await driver.wait(until.elementLocated(By.id('post-comment'))).click()
        await driver.sleep(1000);
        await driver.navigate().to('http://localhost:3000/author/comments');
        await driver.sleep(2000);
        await driver.wait(until.elementLocated(By.id('edit-comment'))).click()
        await driver.sleep(1000);
        await driver.wait(until.elementLocated(By.id('write-comment'))).sendKeys(" (Updated)");
        await driver.wait(until.elementLocated(By.id('post-comment'))).click()
        let title = await driver.getCurrentUrl();
        await driver.sleep(1000);
        expect(title).to.equal('http://localhost:3000/author/comments');
    });
  
    it('Author can delete his comment!', async () => {
        await driver.sleep(2000);
        await driver.wait(until.elementLocated(By.id('delete-comment'))).click()
        await driver.switchTo().alert().accept();
        await driver.sleep(2000);
        let count = await driver.wait(until.elementLocated(By.id('total-author-post-count'))).getText()
        count = parseInt(count)
        expect(count).to.equal(0);
    });
  
  
  });


// Testing as Subscriber
describe('Testing for Subscriber Role', () => {

    it('Logout and Login as User', async () => {
        await console.log("Testing for Author Role Completed!");
        await driver.wait(until.elementLocated(By.id('signout'))).click();
        await driver.sleep(1000);
        let signinInput = await driver.findElement(By.id("normal_login_email"));
        signinInput.sendKeys(Key.CONTROL + "a");
        signinInput.sendKeys(Key.DELETE);
        signinInput.sendKeys("user3@gmail.com");
        await driver.sleep(5000);
        await driver.wait(until.elementLocated(By.id('loginbutton'))).click();
        await driver.sleep(2000);
        let title = await driver.getCurrentUrl();
        expect(title).to.equal('http://localhost:3000/subscriber');
    });

    it('User can update his profile!', async () => {
        await driver.wait(until.elementLocated(By.id('subscriber-profile'))).click()
        await driver.wait(until.elementLocated(By.id('update-website'))).sendKeys("telegraph.com");
        await driver.sleep(3000);
        let title = await driver.getCurrentUrl();
        await driver.wait(until.elementLocated(By.id('update-profile'))).click();
        expect(title).to.equal('http://localhost:3000/subscriber/62ef859cd1eb916a28e753f2');
    });

    it('User can edit his comment!', async () => {
        await driver.navigate().to('http://localhost:3000/posts');
        await driver.sleep(3000);
        await driver.wait(until.elementLocated(By.xpath('//*[@id="__next"]/div[3]/div[1]/a/div/div[2]/div/div/div'))).click()
        await driver.sleep(5000);
        let scrollTill = driver.wait(until.elementLocated(By.id('write-comment')));
        await driver.executeScript("arguments[0].scrollIntoView(true);", scrollTill);
        await driver.sleep(2000);
        await driver.wait(until.elementLocated(By.id('write-comment'))).sendKeys("Comment by Selenium");
        await driver.wait(until.elementLocated(By.id('post-comment'))).click()
        await driver.sleep(1000);
        await driver.navigate().to('http://localhost:3000/subscriber/comments');
        await driver.sleep(2000);
        await driver.wait(until.elementLocated(By.id('edit-comment'))).click()
        await driver.sleep(1000);
        await driver.wait(until.elementLocated(By.id('write-comment'))).sendKeys(" (Updated)");
        await driver.wait(until.elementLocated(By.id('post-comment'))).click()
        let title = await driver.getCurrentUrl();
        await driver.sleep(1000);
        expect(title).to.equal('http://localhost:3000/subscriber/comments');
    });

    it('User can delete his comment!', async () => {
        await driver.sleep(2000);
        await driver.wait(until.elementLocated(By.id('delete-comment'))).click()
        await driver.switchTo().alert().accept();
        await driver.sleep(2000);
        let count = await driver.wait(until.elementLocated(By.id('total-author-post-count'))).getText()
        count = parseInt(count)
        expect(count).to.equal(2);
    });
    
    after(async () => console.log("Testing for Subscriber Role Completed!"));
    after(async () => driver.quit());
});