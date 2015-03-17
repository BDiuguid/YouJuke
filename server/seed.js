if (Rooms.find().count() === 0) {
  Rooms.insert({
    name: 'DummyRoom',
    comment: [
      {
        author: 'Ben',
        content: 'This is such an awesome app!'
      },
      {
        author: 'Chris',
        content: 'YUKE ON!'
      },
      {
        author: 'That-Guy',
        content: 'PARTAYYYY'
      }
    ],
    queueItem: [
      {
        videoTitle: 'Timber',
        videoId: 'hHUbLv4ThOo'
      },
      {
        videoTitle: 'Timber',
        videoId: 'hHUbLv4ThOo'
      },
      {
        videoTitle: 'Never Gonna Give You Up',
        videoId: 'dQw4w9WgXcQ'
      },
      {
        videoTitle: 'Timber',
        videoId: 'hHUbLv4ThOo'
      }
    ]
  });
}
