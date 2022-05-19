// Breeds seed file
// update database npx knex seed:run

const breeds =
    [

      "Afghan Hound",
      "Airedale Terrier",
      "Akita",
      "American Bulldog",
      "Australian Cattle Dog",
      "Australian Shepherd",
      "Australian Terrier",
      "Basset Hound",
      "Beagle",
      "Bloodhound",
      "Border Collie",
      "Border Terrier",
      "Boston Terrier",
      "Boxer",
      "Bull Terrier",
      "Bulldog",
      "Bullmastiff",
      "Chihuahua",
      "Chow Chow",
      "Dachshund",
      "Dalmatian",
      "Doberman Pinscher",
      "French Bulldog",
      "German Shepherd",
      "Great Dane",
      "Greyhound",
      "Havanese",
      "Irish Setter",
      "Labrador Retriever",
      "Lhasa Apso",
      "Maltese",
      "Miniature Pinscher",
      "Papillon",
      "Pekingese",
      "Pembroke Welsh Corgi",
      "Poodle",
      "Pug",
      "Rat Terrier",
      "Rottweiler",
      "Russell Terrier",
      "Samoyed",
      "Shar Pei",
      "Shetland Sheepdog",
      "Shih Tzu",
      "St. Bernard",
      "Welsh Sheepdog",
      "Whippet",
      "Yorkshire Terrier",
    ]


exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('breeds').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('breeds').insert([
        {"name": breeds[0]},
        {"name": breeds[1]},
        {"name": breeds[3]},
        {"name": breeds[4]},
        {"name": breeds[5]},
        {"name": breeds[6]},
        {"name": breeds[7]},
        {"name": breeds[8]},
        {"name": breeds[9]},
        {"name": breeds[10]},
        {"name": breeds[11]},
        {"name": breeds[12]},
        {"name": breeds[13]},
        {"name": breeds[14]},
        {"name": breeds[15]},
        {"name": breeds[16]},
        {"name": breeds[17]},
        {"name": breeds[18]},
        {"name": breeds[19]},
        {"name": breeds[20]},
        {"name": breeds[21]},
        {"name": breeds[22]},
        {"name": breeds[23]},
        {"name": breeds[24]},
        {"name": breeds[25]},
        {"name": breeds[26]},
        {"name": breeds[27]},
        {"name": breeds[28]},
        {"name": breeds[29]},
        {"name": breeds[30]},
        {"name": breeds[31]},
        {"name": breeds[32]},
        {"name": breeds[33]},
        {"name": breeds[34]},
        {"name": breeds[35]},
        {"name": breeds[36]},
        {"name": breeds[37]},
        {"name": breeds[38]},
        {"name": breeds[39]},
        {"name": breeds[40]},
        {"name": breeds[41]},
        {"name": breeds[42]},
        {"name": breeds[43]},
        {"name": breeds[44]},
        {"name": breeds[45]},
        {"name": breeds[46]},
        {"name": breeds[47]},




  

        
     
   
      ]);
    });
};
