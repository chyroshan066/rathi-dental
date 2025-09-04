import { MEDIA_ITEMS } from '@/constants/gallery';
import Gallery from './_components/Gallery';

export default function GalleryPage() {
  return (
    <main>
      <Gallery
        mediaItems={MEDIA_ITEMS}
        itemsPerPage={12}
      />
    </main>
  );
}