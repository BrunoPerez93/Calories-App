export type PostImage = {
  date?: string;
  explanation?: string;
  hdurl?: string;
  media_type?: string;
  service_version?: string;
  title?: string;
  url?: string;
}

export type RootStacksParams = {
  Home: undefined;
  AddFood: PostImage;
}

export type FormItemType = {
  placeholder?: string;
  text?: string;
}