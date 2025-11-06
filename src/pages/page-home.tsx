import Container from "../components/container";
import AlbumsFilter from "../contexts/albums/components/albums-filter";
import PhotosList from "../contexts/photos/components/photos-list";

export default function PageHome() {
  return (
    <Container>
      <AlbumsFilter
        albums={[
          { id: '3421', title: 'Album 1' },
          { id: '123', title: 'Album 2' },
          { id: '456', title: 'Album 3' },
        ]}
        className="mb-9"
        loading
      />

      <PhotosList
        photos={[
          {
            id: '123',
            title: 'Teste',
            imageId: 'portrait-tower.png',
            albums: [
              { id: '3421', title: 'Album 1' },
              { id: '123', title: 'Album 2' },
              { id: '456', title: 'Album 3' },
            ]
          },
          {
            id: '123',
            title: 'Teste',
            imageId: 'portrait-tower.png',
            albums: [
              { id: '3421', title: 'Album 1' },
              { id: '123', title: 'Album 2' },
              { id: '456', title: 'Album 3' },
            ]
          }
        ]}
      />
    </Container>
  )
}