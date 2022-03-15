export const userSchema = {
  name: 'users',
  title: 'Users',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'walletAddress',
      title: 'Wallet Address',
      type: 'string',
    },
    {
      name: 'profilePicture',
      title: 'Profile Picture',
      type: 'image',
    },
  ],
}
