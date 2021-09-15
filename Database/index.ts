import createClient from './createClient';
import {TableName} from "./Constants/TableName";

let database = createClient();

export const findBrainTeaserById = async (id: number) => {
  const { data, error } = await database
    .from(TableName.BrainTeaserTable)
    .select('*')
    .filter('id', 'eq', id)
    .single();
  if (error) {
    throw error;
  }
  return data;
};

export const getAllBrainTeaser = async () => {
  const { data, error } = await database
      .from(TableName.BrainTeaserTable)
      .select('*')
  if (error) {
    throw error;
  }
  return data;
}


export default database;
