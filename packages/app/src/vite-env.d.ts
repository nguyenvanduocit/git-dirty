/// <reference types="vite/client" />

declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare interface Project {
  id: string;
  path: string;
}

declare interface fileData {
  name: string;
  isDir: boolean;
  isHidden: boolean;
  createdAt?: string | Date;
  modifiedAt?: string | Date;
  accessedAt?: string | Date;
  size?: number;
  isSystemFile?: boolean;
  isTrash?: boolean;
  type?: string;
  path?: string;
  realPath?: string;
  trashDeletionDate?: string | Date;
  displayName?: string;
}

declare interface SystemTime {
  nanos_since_epoch: number;
  secs_since_epoch: number;
}

declare interface FileMetaData {
  file_path: string;
  basename: string;
  file_type: string;
  original_parent?: string;
  time_deleted?: number;
  is_trash: boolean;
  is_dir?: boolean;
  is_hidden?: boolean;
  is_file?: boolean;
  is_system?: boolean;
  size?: number;
  readonly?: boolean;
  last_modified?: SystemTime;
  last_accessed?: SystemTime;
  created?: SystemTime;
}

declare interface FolderInformation{
  number_of_files: number,
  files: Array<FileMetaData>,
  skipped_files: Array<string>,
  lnk_files: Array<LnkData>,
}

declare interface LnkData {
  file_path: string,
  icon: string,
}
