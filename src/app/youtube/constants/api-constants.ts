import { SearchResponse } from '@youtube/models/search-response.model';

const API_URL = 'https://youtube.googleapis.com/youtube/v3';
const SEARCH_URL = 'search';
const STATISTICS_URL = 'videos';

type GetYoutubeItemsIds = (response: SearchResponse) => string;
const getYoutubeItemsIds: GetYoutubeItemsIds = ({ items }) =>
  items.map((item: any) => item.id.videoId).join(',');

export { API_URL, SEARCH_URL, STATISTICS_URL, getYoutubeItemsIds };
