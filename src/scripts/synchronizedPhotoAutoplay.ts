const photoCarousels = new Map<HTMLElement, () => void>();
let timer: number | undefined;

function startPhotoTimer() {
  if (timer !== undefined || photoCarousels.size === 0) return;

  // One timer keeps both milestones on the same three-second schedule.
  timer = window.setInterval(() => {
    photoCarousels.forEach((advance, element) => {
      if (element.isConnected) {
        advance();
      } else {
        photoCarousels.delete(element);
      }
    });

    if (photoCarousels.size === 0) {
      window.clearInterval(timer);
      timer = undefined;
    }
  }, 3000);
}

document.addEventListener('DOMContentLoaded', startPhotoTimer, { once: true });

export function registerSynchronizedPhotoAutoplay(
  carousel: HTMLElement,
  showNextSlide: () => void
) {
  photoCarousels.set(carousel, showNextSlide);
  if (document.readyState === 'complete') startPhotoTimer();
}
