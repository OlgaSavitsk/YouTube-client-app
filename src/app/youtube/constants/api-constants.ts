import { SearchResponse } from '@youtube/models/search-response.model';

const SEARCH_URL = 'search';
const STATISTICS_URL = 'videos';

type GetYoutubeItemsIds = (response: SearchResponse) => string;
const getYoutubeItemsIds: GetYoutubeItemsIds = ({ items }) =>
  items.map((item: any) => item.id.videoId).join(',');

export { SEARCH_URL, STATISTICS_URL, getYoutubeItemsIds };
