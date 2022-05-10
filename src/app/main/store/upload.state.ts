import { AngularFireStorageReference, AngularFireUploadTask } from "@angular/fire/compat/storage";

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
  downloadUrl?: string;
  urlUploaded?: boolean;
}

export interface UploadTaskResult {
  fileId: string;
  url?: string;
  percent?: number;
}

export interface PhotoData {
  photoUrl: string;
  dateUploaded: number;
  fileSize: number;
  fileName: string;
  id: string;
}
