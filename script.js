function submitQuiz() {
  const form = document.getElementById('quiz-form');
  const questions = form.querySelectorAll('.question');
  let score = 0;

  questions.forEach((q, index) => {
    const selected = q.querySelector('input[name="q' + (index + 1) + '"]:checked');
    if (selected && selected.value === "correct") {
      score++;
    }
  });

  document.getElementById('quiz-result').textContent = `You scored ${score} out of ${questions.length}!`;
}

