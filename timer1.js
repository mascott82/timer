let timers = process.argv.slice(2);

if (!timers) {
  process.exit(1);
}

timers.sort((a, b) => {
  return a - b;
});

timers.forEach(timer => {
  if (Number.parseInt(timer) && Number.parseInt(timer) >= 0) {
    setTimeout(() => {
      console.log(`• ${timer} seconds`);
    }, timer);
    process.stdout.write('\x07');
  }
});