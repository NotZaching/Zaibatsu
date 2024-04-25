function calculateTotal() {
    const sections = document.querySelectorAll('.section');
    let total = 0;
    let summaryText = '';

    sections.forEach(section => {
        const input = section.querySelector('input[type="number"]');
        const label = section.querySelector('label').textContent.trim();
        const count = parseInt(input.value, 10);
        const price = parseInt(section.dataset.price, 10);

        if (count > 0) {
            total += count * price;
            summaryText += `${label} ${count}x - `;
        }
    });

    summaryText = summaryText.slice(0, -3);

    document.getElementById('total').textContent = `Kokku: $${total}`;
    document.getElementById('summary').value = summaryText;
}


document.getElementById('copyButton').addEventListener('click', function() {
    const summaryInput = document.getElementById('summary');
    summaryInput.select();
    document.execCommand('copy');
});
