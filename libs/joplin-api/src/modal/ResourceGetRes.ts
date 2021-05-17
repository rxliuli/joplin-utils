import { ResourceProperties } from "./ResourceProperties";
import { CommonType } from "./CommonType";

export type ResourceGetRes = Pick<ResourceProperties, "id" | "title"> & CommonType
