export interface CeobeLink {
  name: string;
  desc: string;
  url: string;
  cover: string | null;
}

export interface CeobeLinkResponse {
  code: number;
  msg: string;
  data: CeobeLink[] | null;
}
