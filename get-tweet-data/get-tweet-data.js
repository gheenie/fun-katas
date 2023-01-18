// Please do not change the name of this function
function getTweetData (tweet) {
  // Your code here
  const tweetData = { 
    tags: [], 
    mentions: [], 
    tagCount: 0, 
    mentionCount: 0, 
    length: tweet.length
  };

  return tweetData;
};

module.exports = getTweetData;
