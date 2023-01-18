// Please do not change the name of this function
function getTweetData (tweet) {
  // Your code here
  const mentions = tweet.match(/@\w+/g) || [];

  const tweetData = { 
    tags: [], 
    mentions: mentions, 
    tagCount: 0, 
    mentionCount: mentions.length, 
    length: tweet.length
  };

  return tweetData;
};

module.exports = getTweetData;
