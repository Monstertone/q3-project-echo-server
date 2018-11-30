
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('songs').del()
    .then(function () {
      // Inserts seed entries
      return knex('songs').insert([
        {title: 'Reubens Train', artist: 'Nat Keefe', album: 'The Railroad', file_url: 'https://s3-us-west-1.amazonaws.com/echosongfiles/Reuben_s_Train.mp3', cover_url:'https://s3-us-west-1.amazonaws.com/echosongsalbumart/JA_RearviewTown_Album_Cover-thumbnail.jpg', inList:false},
        {title: 'Dude, Wheres my Horse?', artist: 'Nat Keefe', album: 'The Railroad', file_url: 'https://s3-us-west-1.amazonaws.com/echosongfiles/Dude_Where_s_My_Horse.mp3', cover_url:'https://s3-us-west-1.amazonaws.com/echosongsalbumart/JA_RearviewTown_Album_Cover-thumbnail.jpg', inList:false},
        {title: 'Keys to the Car', artist: 'Aaron Lieberman', album: 'You Dont Know', file_url: 'https://s3-us-west-1.amazonaws.com/echosongfiles/Keys_to_the_Car.mp3', cover_url:'https://s3-us-west-1.amazonaws.com/echosongsalbumart/personal-album-cover.jpg', inList:false},
        {title: 'Move Up to the Mountains', artist: 'Aaron Lieberman', album: 'You Dont Know', file_url: 'https://s3-us-west-1.amazonaws.com/echosongfiles/Move_Up_to_the_Mountains.mp3', cover_url:'https://s3-us-west-1.amazonaws.com/echosongsalbumart/personal-album-cover.jpg', inList:false},
        {title: 'Panda Paws', artist: 'Aaron Lieberman', album: 'You Dont Know', file_url: 'https://s3-us-west-1.amazonaws.com/echosongfiles/Panda_Paws.mp3', cover_url:'https://s3-us-west-1.amazonaws.com/echosongsalbumart/personal-album-cover.jpg', inList:false},
        {title: '1940 Slow Dance string', artist: 'Doug Maxwell', album: 'Good Times', file_url: 'https://s3-us-west-1.amazonaws.com/echosongfiles/1940_s_Slow_Dance_Sting.mp3', cover_url:'https://s3-us-west-1.amazonaws.com/echosongsalbumart/funalbum.jpg', inList:false},
        {title: 'Take a Break', artist: 'Aaron Lieberman', album: 'You Dont Know', file_url: 'https://s3-us-west-1.amazonaws.com/echosongfiles/Take_a_Break.mp3', cover_url:'https://s3-us-west-1.amazonaws.com/echosongsalbumart/personal-album-cover.jpg', inList:false},
        {title: 'Two for Tea', artist: 'Aaron Lieberman', album: 'You Dont Know', file_url: 'https://s3-us-west-1.amazonaws.com/echosongfiles/Two_for_Tea.mp3', cover_url:'https://s3-us-west-1.amazonaws.com/echosongsalbumart/personal-album-cover.jpg', inList:false},
        {title: 'Coupe', artist: 'The Grand Affair', album: 'Girl Boss', file_url: 'https://s3-us-west-1.amazonaws.com/echosongfiles/Coupe.mp3', cover_url:'https://s3-us-west-1.amazonaws.com/echosongsalbumart/girlboss.png', inList:false},
        {title: '7th Floor Tango', artist: 'Silent Partner', album: 'Scream', file_url: 'https://s3-us-west-1.amazonaws.com/echosongfiles/7th_Floor_Tango.mp3', cover_url:'https://s3-us-west-1.amazonaws.com/echosongsalbumart/1*ML5MvO4zy7JNHuwzWqCoSw.jpeg', inList:false},

      ]);
    });
};
