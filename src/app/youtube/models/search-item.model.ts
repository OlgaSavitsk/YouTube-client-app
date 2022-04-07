interface SearchItemSnippetThumbnails {
    url: string;
    width: number;
    height: number;
  }

  export interface SearchItemSnippet {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: SearchThumbnailsSize;
    channelTitle: string;
    tags: string[];
    categoryId: string;
    liveBroadcastContent: string;
    localized: {
      title: string;
      description: string;
    };
    defaultAudioLanguage: string;
  }

  interface Statistics {
    viewCount: string;
    likeCount: string;
    dislikeCount: string;
    favoriteCount: string;
    commentCount: string;
  }

  export interface SearchThumbnailsSize {
    default: SearchItemSnippetThumbnails;
    medium: SearchItemSnippetThumbnails;
    high: SearchItemSnippetThumbnails;
    standard: SearchItemSnippetThumbnails;
    maxres: SearchItemSnippetThumbnails;
  }

  export interface SearchItem {
    kind: string;
    etag: string;
    id: string;
    snippet: SearchItemSnippet;
    statistics: Statistics;
  }
