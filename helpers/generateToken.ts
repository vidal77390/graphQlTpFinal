import * as jsonwebtoken from 'jsonwebtoken';

const generateToken = (username: string, password: string) => {
  return jsonwebtoken.sign(
    {
      username,
      password,
    },
    process.env.JWT_KEY as string,
    { expiresIn: '1d' }
  );
};

export default generateToken;