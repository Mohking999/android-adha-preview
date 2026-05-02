const gallery = document.getElementById('image-gallery');

const mediaFiles = [
  {
    src: 'Screenshot_2026-04-27-11-50-41-664_com.example.myapplication.jpg',
    label: 'App screen 1'
  },
  {
    src: 'Screenshot_2026-04-27-11-50-45-746_com.example.myapplication.jpg',
    label: 'App screen 2'
  },
  {
    src: 'Screenshot_2026-04-27-11-51-05-396_com.example.myapplication.jpg',
    label: 'App screen 3'
  },
  {
    src: 'Screenshot_2026-04-27-11-51-10-054_com.example.myapplication.jpg',
    label: 'App screen 4'
  },
  {
    src: 'Screenshot_2026-04-27-11-51-19-776_com.example.myapplication.jpg',
    label: 'App screen 5'
  },
  {
    src: 'Screenshot_2026-04-27-11-51-22-562_com.example.myapplication.jpg',
    label: 'App screen 6'
  }
];

function renderGallery(items) {
  gallery.innerHTML = items
    .map(
      (item) => `
      <article class="card">
        <img src="${item.src}" alt="${item.label}" loading="lazy" />
        <div class="card-meta">
          <p>${item.label}</p>
        </div>
      </article>`
    )
    .join('');
}

renderGallery(mediaFiles);
