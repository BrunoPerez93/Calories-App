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
  value?: string;
  onChangeText?: (text: string) => void;
}

export type Meal = {
  calories: string;
  name: string;
  portion: string;
}