import type { Album } from "../albums/album";

export interface Photo {
  id: string;
  title: string;
  imageId: string;
  albums: Album[];
}