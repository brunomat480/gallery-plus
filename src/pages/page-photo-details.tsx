import { useParams } from "react-router";
import Button from "../components/button";
import Container from "../components/container";
import ImagePreview from "../components/image-preview";
import Skeleton from "../components/skeleton";
import Text from "../components/text";
import AlbumsListSelectable from "../contexts/albums/components/albums-list-selectable";
import PhotosNavigator from "../contexts/albums/components/photo-navigation";
import type { Photo } from "../contexts/photos/models/photo";

export default function PagePhotoDetails() {
  const { id } = useParams()

  const isLoadingPhoto = false;
  const photo = {
    id: '123',
    title: 'Teste',
    imageId: 'portrait-tower.png',
    albums: [
      { id: '3421', title: 'Album 1' },
      { id: '123', title: 'Album 2' },
      { id: '456', title: 'Album 3' },
    ]
  } as Photo;

  return (
    <Container>
      <header className="flex text-center justify-between gap-8 mb-8">
        {!isLoadingPhoto ? (
          <Text as="h2" variant="heading-large">
            {photo?.title}
          </Text>
        ) : (
          <Skeleton className="w-48 h-8" />
        )}

        <PhotosNavigator />
      </header>

      <div className="grid grid-cols-[21rem_1fr] gap-24">
        <div className="space-y-3">
          {!isLoadingPhoto ? (
            <ImagePreview
              src={`/images/${photo?.imageId}`}
              title={photo?.title}
              imageClassName="h-[21rem]"
            />
          ) : (
            <Skeleton className="h-[21rem]" />
          )}

          {!isLoadingPhoto ? (
            <Button variant="destructive">
              Excluir
            </Button>
          ) : (
            <Skeleton className="w-28 h-10" />
          )}
        </div>

        <div className="py-3">
          <Text
            as="h3"
            variant="heading-medium"
            className="mb-6"
          >
            Álbuns
          </Text>

          <AlbumsListSelectable
            photo={photo}
            albums={[
              { id: '3421', title: 'Album 1' },
              { id: '123', title: 'Album 2' },
              { id: '456', title: 'Album 3' },
            ]}
            loading={isLoadingPhoto}
          />
        </div>
      </div>
    </Container>
  )
}