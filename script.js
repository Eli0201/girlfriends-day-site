function toggleLetter() {
  const panel = document.getElementById('letterPanel');
  panel.classList.toggle('hidden');
}

function revealGift() {
  const panel = document.getElementById('voucherPanel');
  panel.classList.remove('hidden');

  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });
}

function closeVoucher() {
  const panel = document.getElementById('voucherPanel');
  panel.classList.add('hidden');
}
