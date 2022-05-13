interface IItems {
  resourceURI: string;
  name: string;
  type?: string;
}

interface ISubResult {
  available: number;
  collectionURI: string;
  items: IItems[];
  returned: number;
}

interface IThumbnail {
  path: string;
  extension: string;
}

interface IUrls {
  type: string;
  url: string;
}

export interface IResult {
  id: number;
  name: string;
  description: string;
  modified: string;
  thumbnail: IThumbnail;
  resourceURI: string;
  comics: ISubResult;
  series: ISubResult;
  stories: ISubResult;
  events: ISubResult;
  urls: IUrls[];
}

export interface IAllDataCharacter {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  etag: string;
  data: {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: IResult[];
  };
}
