function toggleAccordion(faqItem) {
    const answer = faqItem.querySelector('.answer');
    const icon = faqItem.querySelector('.plus-icon');

    if (answer.style.display === 'block') {
        answer.style.display = 'none';
        icon.src = './assets/images/icon-plus.svg';
    } else {
        answer.style.display = 'block';
        icon.src = './assets/images/icon-minus.svg';
    }
}
