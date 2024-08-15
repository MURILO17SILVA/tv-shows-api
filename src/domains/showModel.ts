import { Document, model, Schema } from "mongoose";

export interface Show extends Document {
  title: string;
  premiere: Date;
  isRunning: boolean;
  language: string;
  mainGenre: string;
  posterUrl?: string;
}

const showSchema = new Schema<Show>({
  title: { type: String, required: true },
  premiere: { type: Date, required: true },
  isRunning: { type: Boolean, default: true },
  language: { type: String, required: true },
  mainGenre: { type: String, required: true },
  posterUrl: { type: String }
});

export const ShowModel = model<Show>("Show", showSchema);

export const validateShowInputs = (showObj: any) => {
  const { title, premiere, language, mainGenre } = showObj;
  const errorMessages: string[] = [];

  if (!title) errorMessages.push("Title is required");
  if (!premiere) errorMessages.push("Premiere date is required");
  if (!language) errorMessages.push("Language is required");
  if (!mainGenre) errorMessages.push("Main genre is required");

  return errorMessages;
};
