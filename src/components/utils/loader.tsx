import {VideoInformation} from "../videos/videoCard"
import {PhotoInfo} from "../photography/photoCard"
import { MedalEntity } from "../medals/MedalEntity";

export const LoadPhotos = async (filename: string): Promise<PhotoInfo[]> => {
  try {
    const resp = await fetch(filename);
    const data = await resp.json();
    return data;
  } catch (error) {
    console.error("error: ", error);
    return [];
  }
};

export const LoadVideos = async (filename: string): Promise<VideoInformation[]> => {
  try {
    const resp = await fetch(filename);
    const data = await resp.json();
    return data;
  } catch (error) {
    console.error("error: ", error);
    return [];
  }
};

export const LoadMedals = async (filename: string): Promise<MedalEntity[]> => {
  try {
    const resp = await fetch(filename);
    const data = await resp.json();
    return data;
  } catch (error) {
    console.error("error: ", error);
    return [];
  } 
}
