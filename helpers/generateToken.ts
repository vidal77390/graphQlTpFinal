import * as jsonwebtoken from 'jsonwebtoken';

const generateToken = (id: string, email: string) => {
  return jsonwebtoken.sign(
    {
      id,
      email,
    },
    process.env.JWT_KEY as string,
    { expiresIn: '1d' }
  );
};

export default generateToken;