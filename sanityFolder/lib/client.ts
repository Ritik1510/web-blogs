import { createClient } from '@sanity/client';
import { projectId, dataset, apiVersion, token } from '../env';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  token,
});
