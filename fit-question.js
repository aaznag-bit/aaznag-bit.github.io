// Size the question to the available line width, including its border and padding.
(() => {
  const question = document.querySelector('blockquote');
  if (!question) return;
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  function fitQuestion() {
    const style = getComputedStyle(question);
    const available = question.clientWidth - parseFloat(style.paddingLeft) - parseFloat(style.paddingRight) - 2;
    if (available <= 0) return;
    context.font = `${style.fontStyle} ${style.fontWeight} 100px ${style.fontFamily}`;
    const width = context.measureText(question.textContent.trim()).width;
    question.style.fontSize = `${Math.floor(available / width * 1000) / 10}px`;
  }
  new ResizeObserver(fitQuestion).observe(question.parentElement);
  document.fonts.ready.then(fitQuestion);
  fitQuestion();
})();
