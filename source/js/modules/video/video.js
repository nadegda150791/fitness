const initVideo = () => {
  const video = document.querySelectorAll('.gym__video-wrapper');

  if (video && video.length) {
    video.forEach((block) => {
      const videoCover = block.querySelector('.gym__video-cover');
      const videoButton = block.querySelector('.gym__video-button');
      const iframeBlock = block.querySelector('.gym__video');

      videoButton.addEventListener('click', () => {
        videoCover.classList.add('hidden');
        iframeBlock[0].src += '&autoplay=1';
      });
    });
  }
};

export {initVideo};
