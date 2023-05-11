const initVideo = () => {
  const video = document.querySelectorAll('.gym__video-wrapper');

  video.forEach((block) => {
    const videoCover = block.querySelector('.gym__video-cover');
    const videoButton = block.querySelector('.gym__video-button');
    const iframeBlock = block.querySelector('.gym__video');

    videoButton.addEventListener('click', () => {
      iframeBlock.src = `${iframeBlock.src}?autoplay=1`;
      videoCover.classList.add('hidden');
    });
  });
};

export {initVideo};
