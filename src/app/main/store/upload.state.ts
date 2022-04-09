export const UPLOAD_FILE_STORE_KEY: string = 'uploadFiles';

export interface UploadFile {
  id: string;
  fileName: string;
  attachDate: number;
  dateModified: number;
  fileSize: number;
  progress: number;
  completed?: boolean;
  completedDate?: number;
  file: File;
  preview?: any;
}
