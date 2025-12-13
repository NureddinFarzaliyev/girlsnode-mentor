// Hazırkı tarixi və vaxtı hər saniyə konsola loq edən proqram yazın.

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date


setInterval(() => {
    const info = new Date();
    console.log(info.getTime())
}, 1000)