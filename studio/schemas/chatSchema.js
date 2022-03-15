export const chatSchema = {
  name: 'chat',
  title: 'Chat',
  type: 'document',
  fields: [
    {
      name: 'serverName',
      title: 'Server Name',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'serverId',
      title: 'Server ID',
      type: 'string',
    },
    {
      name: 'isDirectMessage',
      title: 'Is Direct Message',
      type: 'boolean',
    },
    {
      name: 'userPointer',
      title: 'User Pointer',
      type: 'reference',
      to: [{ type: 'users' }],
    },
  ],
}
