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


export const registerUser = async (id: string, username: string, password: string) => {
  const response = await client.query(`INSERT INTO user_bt (username, password) VALUES ('${username}', '${password}')`)
  console.log(response)

  return response.rows
}
