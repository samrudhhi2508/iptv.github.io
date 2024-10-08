const express = require('express');
const app = express();
const port = 3000;

// Sample channel data
const channels = [
  {
    "name": "Cartoon Network Hindi",
    "category": "Kids",
    "imageUrl": "https://i.imgur.com/ltSiLho.png",
    "videoUrl": "https://amg01448-samsungin-cartoonnw-samsungin-1y8kz.amagi.tv/playlist/amg01448-samsungin-cartoonnw-samsungin/playlist.m3u8"
  },
  {
    "name": "Movies Channel 1",
    "category": "Movies",
    "imageUrl": "http://example.com/movies_logo1.png",
    "videoUrl": "http://example.com/movies_stream1.m3u8"
  },
  {
    "name": "Sports Channel 1",
    "category": "Sports",
    "imageUrl": "http://example.com/sports_logo1.png",
    "videoUrl": "http://example.com/sports_stream1.m3u8"
  },
  {
    "name": "Entertainment Channel 1",
    "category": "Entertainment",
    "imageUrl": "http://example.com/entertainment_logo1.png",
    "videoUrl": "http://example.com/entertainment_stream1.m3u8"
  },
  {
    "name": "Music Channel 1",
    "category": "Music",
    "imageUrl": "http://example.com/music_logo1.png",
    "videoUrl": "http://example.com/music_stream1.m3u8"
  },
  {
    "name": "News Channel 1",
    "category": "News",
    "imageUrl": "http://example.com/news_logo1.png",
    "videoUrl": "http://example.com/news_stream1.m3u8"
  },
  {
    "name": "Kids Channel 2",
    "category": "Kids",
    "imageUrl": "http://example.com/kids_logo2.png",
    "videoUrl": "http://example.com/kids_stream2.m3u8"
  },
  {
    "name": "Movies Channel 2",
    "category": "Movies",
    "imageUrl": "http://example.com/movies_logo2.png",
    "videoUrl": "http://example.com/movies_stream2.m3u8"
  },
  {
    "name": "Sports Channel 2",
    "category": "Sports",
    "imageUrl": "http://example.com/sports_logo2.png",
    "videoUrl": "http://example.com/sports_stream2.m3u8"
  },
  {
    "name": "Entertainment Channel 2",
    "category": "Entertainment",
    "imageUrl": "http://example.com/entertainment_logo2.png",
    "videoUrl": "http://example.com/entertainment_stream2.m3u8"
  },
  {
    "name": "Music Channel 2",
    "category": "Music",
    "imageUrl": "http://example.com/music_logo2.png",
    "videoUrl": "http://example.com/music_stream2.m3u8"
  },
  {
    "name": "News Channel 2",
    "category": "News",
    "imageUrl": "http://example.com/news_logo2.png",
    "videoUrl": "http://example.com/news_stream2.m3u8"
  }
];

// Middleware to parse JSON
app.use(express.json());

// Get all channels
app.get('/channels', (req, res) => {
  res.json(channels);
});

// Get channels by category
app.get('/channels/category/:category', (req, res) => {
  const category = req.params.category;
  const filteredChannels = channels.filter(channel => channel.category.toLowerCase() === category.toLowerCase());
  res.json(filteredChannels);
});

// Get channel by name
app.get('/channels/name/:name', (req, res) => {
  const name = req.params.name;
  const channel = channels.find(channel => channel.name.toLowerCase() === name.toLowerCase());
  if (channel) {
    res.json(channel);
  } else {
    res.status(404).json({ message: 'Channel not found' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
