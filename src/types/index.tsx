export interface Tag {
  label: string;
  href: string;
}

export interface PostSnippet {
  title: string;
  summary: string;
  href: string;
  img: string;
  imgAlt?: string;
  tags: Tag[];
  publishedDate: Date;
}
