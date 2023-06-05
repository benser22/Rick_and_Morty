import { useEffect } from 'react';

function PreloadImages() {
  useEffect(() => {
    const imageUrls = [
      "../images/rickand-morty-rick.gif",
      "../images/morty.gif",
      "../images/summer.gif",
      "../images/beth.gif",
      "../images/jerry.gif"
    ];

    imageUrls.forEach(url => {
      const img = new Image();
      img.src = url;
    });
  }, []);

  return null;
}

export default PreloadImages;
