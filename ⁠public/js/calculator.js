function updateQuote() {
    const mins = document.getElementById('duration').value;
    document.getElementById('display-price').innerText = `$${(mins * 0.89).toFixed(2)}`;
}
