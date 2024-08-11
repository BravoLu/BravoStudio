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
  mediumUrl: string;
  selfIntro: string;
  photoCategory: Category[];
  githubAuth: string;
  githubUser: string;
  trackID: string;
  instagramUrl: string;
}

export default Config;