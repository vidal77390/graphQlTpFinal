import createClient from './createClient';

let database = createClient();

export const findHumanById = async (id: number) => {
  const { data, error } = await database
    .from('human')
    .select('*')
    .filter('id', 'eq', id)
    .single();
  if (error) {
    throw error;
  }
  return data;
};


export default database;
