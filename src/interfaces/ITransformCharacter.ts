interface IItems {
  resourceURI: string;
  name: string;
  type?: string;
}

export interface ITransformCharacter {
  id: number;
  name: string;
  description: string;
  thumbnail: string;
  homepage: string;
  wiki: string;
  comics: IItems[];
}
