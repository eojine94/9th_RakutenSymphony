export interface files {
  key: string;
  thumbnailUrl: string;
  name: string;
  size: number;
}

export interface LinkData {
  created_at: number;
  key: string;
  expires_at: number;
  download_count: number;
  count: number;
  size: number;
  summary: string;
  thumbnailUrl: string;
  files: files[];
  sent?: {
    subject: string;
    content: string;
    emails: string[];
  };
}
