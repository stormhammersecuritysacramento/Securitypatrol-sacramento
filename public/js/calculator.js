function updateQuote() {
    const mins = document.getElementById('duration').value;
    const price = (mins * 0.89).toFixed(2);
    document.getElementById('display-price').innerText = `$${price}`;
}
