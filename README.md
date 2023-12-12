# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](./images/rating.png)
  
### Links

- Solution URL: https://www.frontendmentor.io/solutions/interactive-rating-component-with-html-css-and-js-Te8rrdQh5-
- Live Site URL: https://interactive-rating-component-bay-five.vercel.app/

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow


### What I learned

```css
submit-btn {
  background-color: liner-gradient();
}
```
```js
rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML
    })
})
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

**Note: Delete this note and the content within this section and replace with your own learnings.**

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

### Useful resources

- [Stack Overflow](https://www.example.com) - I learnt to use the css linear gradient property to either lighten or darken colours of the same background. Although I didn't end up using it in this project, It was worth learning.
- [Rivendell web](https://publishing-project.rivendellweb.net/lightening-and-darkening-colors-with-css/#:~:text=Each%20of%20the%20lightened%20colors,to%20lighten%20the%20color%20by.&text=We%20then%20create%20classes%20for,in%20the%20background%2Dcolor%20property.) - This is an amazing article which helped me finally understand how to darken and lighten colours having the same background colors. I'd recommend it to anyone still learning this concept.

## Author

- Website - [Obialor Ijeoma](https://my-portfolio-project-alpha.vercel.app/)
- Frontend Mentor - [Igraziella](https://www.frontendmentor.io/profile/igraziella)
- Linkedin - [Obialor Ijeoma](https://www.linkedin.com/in/ijeoma-obialor-012494114)
- Twitter - [@ObialorGraziel2](https://twitter.com/ObialorGraziel2)

## Acknowledgments

Special thanks to Ikpa Precious for helping out at some point when I got stuck.
