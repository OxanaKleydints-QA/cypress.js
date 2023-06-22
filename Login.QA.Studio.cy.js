describe('Форма логина и пароля', () => {
  it('Проверка на позитивный кейс авторизации', () => {
    cy.visit('https://login.qa.studio/')

    cy.get('#mail').type('german@dolnikov.ru')
    cy.get('#pass').type('iLoveqastudio1')
    cy.get('#loginButton').click()

    cy.get('#messageHeader').should('be.visible')
    cy.get('#exitMessageButton > img').should('be.visible')
  })

  
    it('Проверка логики восстановления пароля', () => {
      cy.visit('https://login.qa.studio/')
  
      cy.get('#forgotEmailButton').click()
      cy.get('#mailForgot').type('oxanakleydints@gmail.com')
      cy.get('#restoreEmailButton').click()
  
      cy.get('#messageHeader').should('contain', 'Успешно отправили пароль на e-mail')
      cy.get('#exitMessageButton > img').should('be.visible')
    })

    it('Правильный логин, неправильный пароль', () => {
        cy.visit('https://login.qa.studio/')
    
        cy.get('#mail').type('german@dolnikov.ru')
        cy.get('#pass').type('iLoveqastudio15')
        cy.get('#loginButton').click()
    
        cy.get('#messageHeader').should('contain', 'Такого логина или пароля нет')
        cy.get('#exitMessageButton > img').should('be.visible')
      })

      it('Неправильный логин, правильный пароль', () => {
        cy.visit('https://login.qa.studio/')
    
        cy.get('#mail').type('oxanakleydints@gmail.com')
        cy.get('#pass').type('iLoveqastudio1')
        cy.get('#loginButton').click()
    
        cy.get('#messageHeader').should('contain', 'Такого логина или пароля нет')
        cy.get('#exitMessageButton > img').should('be.visible')
      })
    
      it('Проверка на негативный кейс валидации', () => {
        cy.visit('https://login.qa.studio/')

        cy.get('#mail').type('germandolnikov.ru')
        cy.get('#pass').type('iLoveqastudio1')
        cy.get('#loginButton').click()

        cy.get('#messageHeader').should('contain', 'Нужно исправить проблему валидации')
        cy.get('#exitMessageButton > img').should('be.visible')
  })
      it('Проверка на приведение к строчным буквам в логине:', () => {
        cy.visit('https://login.qa.studio/')

        cy.get('#mail').type('GerMan@Dolnikov.ru')
        cy.get('#pass').type('iLoveqastudio1')
        cy.get('#loginButton').click()

        cy.get('#messageHeader').should('contain', 'Такого логина или пароля нет')
        cy.get('#exitMessageButton > img').should('be.visible')
  })
})
