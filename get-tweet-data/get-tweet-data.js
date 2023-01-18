// Please do not change the name of this function
function getTweetData (tweet) {
  // Your code here
  const mentions = tweet.match(/@\w+/g) || [];
  const tags = tweet.match(/#\w+/g) || [];

  const tweetData = { 
    tags: tags, 
    mentions: mentions, 
    tagCount: tags.length, 
    mentionCount: mentions.length, 
    length: tweet.length
  };

  return tweetData;
};

module.exports = getTweetData;
