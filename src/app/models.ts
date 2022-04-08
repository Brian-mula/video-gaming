export interface Game{
  id:number
  background_image:string;
  name:string;
  released:string;
  metacritic_url:string;
  website:string;
  description:string;
  metacritic:number;
  genre:Array<Genre>
  parent_platforms:Array<ParentPlatform>
  publishers:Array<Publishers>
  short_screenshots:Array<ShortScreenshots>
  trailers:Array<Trailer>
  ratings:Array<Rating>
}
export interface APIResponse<T>{
  results:Array<T>
}
interface Genre{
  name:string
}

interface ParentPlatform{
platform:{
  name:string
}
}
interface Publishers{
  name:string
}
interface Rating{
  id:number,
  count:number,
  title:string
}
interface ShortScreenshots{
  image:string
}
interface Trailer{
  data:{
    max:string
  }
}
