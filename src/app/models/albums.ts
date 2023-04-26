import { Author } from './author';

export interface AlbumRoot {
  result_code: number;
  result_data: ResultData;
}

export interface ResultData {
  items: Album[];
  paging: Paging;
  total_photo_count: number;
}

export interface Album {
  latest_photos: any;
  created_at: number;
  photo_count: number;
  owner: Author;
  photo_album_key: string;
  name: string;
  photos?: any[];
}

export interface Paging {
  previous_params: any;
  next_params: NextParams;
}

export interface NextParams {
  access_token: string;
  band_key: string;
  limit: string;
  after: string;
}
