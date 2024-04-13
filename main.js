const scriptURL = 'https://script.google.com/macros/s/AKfycbzAtiuWtKagTfTVGj6k-E3YSHS3kHz_w-ewkZgI75VU39tcR5nRZvUSOJf5QYnZq0Zm/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })