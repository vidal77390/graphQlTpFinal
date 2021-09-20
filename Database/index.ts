const { Client } = require('pg')
const client = new Client()
client.connect()


export const findBrainTeaserById = async (id: number) => {
  const response = await client.query(`SELECT * FROM ONLY brain_teaser NATURAL FULL JOIN rubiks_cube NATURAL FULL JOIN puzzle WHERE id = ${id} LIMIT 1`)

  return response.rows[0]
};

export const getAllBrainTeaser = async () => {
  const response = await client.query('SELECT * FROM ONLY brain_teaser NATURAL FULL JOIN rubiks_cube NATURAL FULL JOIN puzzle')
  console.log(response)

  return response.rows
}
