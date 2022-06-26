import { PhotoData } from "../upload/upload.state";

export interface PhotoTableData {
  columnIds: string[];
  columnData: PhotoData[];
  apiLoading: boolean;
}
