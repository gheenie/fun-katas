// Please do not change the name of this function
function getTweetData (tweet) {
  // Make the matches unique.
  const mentions = [...new Set( tweet.match(/@\w+/g) || [] )];
  const tags = [...new Set( tweet.match(/#\w+/g) || [] )];

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
