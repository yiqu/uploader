import { AngularFireStorageReference, AngularFireUploadTask } from "@angular/fire/compat/storage";

export const UPLOAD_FILE_STORE_KEY: string = 'uploadFiles';
export const USER_FILES_STORE_KEY: string = 'userFiles';

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
  downloadUrl?: string;
  urlUploaded?: boolean;
}

export interface UploadTaskResult {
  fileId: string;
  url?: string;
  percent?: number;
}

/**
 * Photo from Firebase display data
 */
export interface PhotoData {
  photoUrl: string;
  dateUploaded: number;
  fileSize: number;
  fileName: string;
  fileId: string;
  id: string;
}

export interface FilesUploadingStatus {
  total: UploadFile[];
  uploadings: PhotoData[];
}
