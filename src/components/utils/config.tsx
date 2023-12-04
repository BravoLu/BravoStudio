interface Category {
  title: string;
  subcategories: string[];
}

interface Config {
  name: string;
  email: string;
  githubUrl: string;
  xiaohongshuUrl: string;
  linkedinUrl: string;
  youtubeUrl: string;
  notionUrl: string;
  twitterUrl: string;
  bilibiliUrl: string;
  selfIntro: string;
  photoCategory: Category[];
  githubAuth: string;
  githubUser: string;
}

export default Config;