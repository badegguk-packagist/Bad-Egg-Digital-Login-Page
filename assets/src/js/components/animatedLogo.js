import supportsHEVCAlpha from '../lib/supportsHEVCAlpha';

export default function animatedLogo()
{
  const logo = document.getElementById('js-bedlp-animated-brand');

  if (!logo) return;

  const mov = logo.dataset.mov;
  const webm = logo.dataset.webm;
  const video = logo.querySelector('video');

  if (supportsHEVCAlpha()) {
    video.src = mov;
  } else {
    video.src = webm;
  }
}
