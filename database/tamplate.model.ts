import { model, models, Schema, Types } from "mongoose";

export interface IModel {}

const ModelSchema = new Schema<IModel>({}, { timestamps: true });

const Model = models?.Accoutn || model<IModel>("Account", ModelSchema);

export default Model;
