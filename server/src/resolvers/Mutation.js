function postMessage(parent, args, context, info) {
  return context.prisma.createMessage({
    messageText: args.messageText
  });
}

async function postReply(parent, args, context, info) {
  const messageExists = await context.prisma.$exists.message({
    id: args.messageId
  });

  if (!messageExists)
    throw new Error(`Message with ID ${args.messageId} does not exist`);

  return context.prisma.createReply({
    replyText: args.replyText,
    message: { connect: { id: args.messageId } }
  });
}

async function updateLikes(parent, { id }, context, info) {
  const message = await context.prisma.messages({ where: { id } }, info);
  const likes = message[0].likes;

  return context.prisma.updateMessage({
    where: { id },
    data: { likes: likes + 1 }
  });
}

async function updateDislikes(parent, { id }, context, info) {
  const message = await context.prisma.messages({ where: { id } }, info);
  const dislikes = message[0].dislikes;

  return context.prisma.updateMessage({
    where: { id },
    data: { dislikes: dislikes + 1 }
  });
}

module.exports = {
  postMessage,
  postReply,
  updateLikes,
  updateDislikes
};
