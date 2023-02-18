import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2023-02-18',
  useCdn: false,
  token: 'skAGzm3ZCvuyj9FWlkndrwwFi9VvbtJXpsRFVoBQofbxARKxBUtNakvdZAxMCLrvt8CLfYhkBNC7AbH4qxBg1UjkM2TL5QDzbI7J1492IPq42YRPcvzmM2YyKC6AYI8BBimjMWGL57onL5LDQ7htAdpR7INWhsdj2H4qMOgmfLp4hpZ51C4d'
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);