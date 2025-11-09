import { useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { api } from "../../../helpers/api";

export function usePhotoAlbums() {
  const queryClient = useQueryClient();

  async function managePhotoOnAlbum(photoId: string, albumIds: string[]) {
    try {
      await api.put(`/photo/${photoId}/albums`, {
        albumIds,
      });

      queryClient.invalidateQueries({ queryKey: ['photo', photoId] });
      queryClient.invalidateQueries({ queryKey: ['photos'] });

      toast.success('Álbums atualizados');
    } catch (error) {
      toast.error('Erro ao gerenciar álbums da foto!');
      throw error;
    }
  }

  return {
    managePhotoOnAlbum
  }
}