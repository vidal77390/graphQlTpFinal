import ScoreEnum from "../Schema/Enums/ScoreEnum";

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


export const registerUser = async (username: string, password: string) => {
  const response = await client.query(`INSERT INTO user_bt (username, password) VALUES ('${username}', '${password}')`)
  console.log(response)

  return response.rows
}

export const getUserByUsername = async (username: string) => {
  const response = await client.query(`SELECT * from user_bt WHERE username = '${username}' LIMIT 1`)
  console.log(response)

  return response.rows[0]
}

export const deleteComment = async (idComment: number, idUser: number) => {
  // TODO requete pour delete le comment ainsi que dans l'enregistrement du brainTeaser
}

export const createComment = async (userID: number, brainTeaserID: number, text: string, score: string) => {
  // TODO Insert into comment TABLE + insert id of comment in brainTeaser selected
  const response = await client.query(`INSERT INTO comment VALUES`)
}
