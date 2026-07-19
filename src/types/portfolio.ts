export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  topics?: string[];
  fork: boolean;
  pushed_at?: string;
  updated_at?: string;
}

export interface ProjectData {
  name: string;
  description: string;
  techTags: string[];
  homepage: string | null;
  html_url: string;
  colorClass: string;
}
