const initVideo = () => {
  const video = document.querySelectorAll('.gym__video-wrapper');
  const iframe = document.querySelectorAll('.gym__video');

  if (video && video.length) {
    video.forEach((block) => {
      const videoCover = block.querySelector('.gym__video-cover');
      const videoButton = block.querySelector('.gym__video-button');
      const iframeBlock = block.querySelector('.gym__video');

      videoButton.addEventListener('click', () => {
        iframeBlock.append(iframe);
        videoCover.classList.add('hidden');
      });
    });
  }
};

export {initVideo};
